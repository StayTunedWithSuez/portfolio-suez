import { doc, runTransaction } from "firebase/firestore";
import { db } from "../../config/firebase";

// Function to update user and auto-assign custom userId if role is student
export const updateUserDetails = async (firebaseUid, firstName, lastName, role) => {
  if (!firebaseUid) throw new Error("Firebase UID is required");

  const fName = firstName?.trim();
  const lName = lastName?.trim();
  const userRole = role?.trim();

  // Validate fields
  if (
    !fName || !lName || !userRole ||
    typeof fName !== "string" || typeof lName !== "string" || typeof userRole !== "string" ||
    fName.length > 50 || lName.length > 50 || userRole.length > 20
  ) {
    throw new Error("Invalid personal information.");
  }

  const userRef = doc(db, "users", firebaseUid);
  const counterRef = doc(db, "counters", "users"); // counter document

  try {
    await runTransaction(db, async (transaction) => {
      const userDoc = await transaction.get(userRef);
      const counterDoc = await transaction.get(counterRef);

      if (!userDoc.exists()) throw new Error("User not found");
      if (!counterDoc.exists()) throw new Error("Counter not found");

      const userData = userDoc?.data();
      const counterData = counterDoc?.data();

      let newUserId = userData?.userId ?? null; // keep existing userId if already exists

      // Assign new custom userId if role becomes student and no userId exists
      if (userRole === "student" && !userData.userId) {
        newUserId = counterData.lastCustomId + 1;

        // Update the counter
        transaction.update(counterRef, {
          lastCustomId: newUserId
        });
      }

      if(userRole === "guest" || !userRole) {
        newUserId = null;
      }

      // Update the user document
      transaction.update(userRef, {
        firstName: fName,
        lastName: lName,
        role: userRole,
        userId: newUserId
      });
    });

    console.log("User details updated successfully!");
  } catch (err) {
    console.error("Transaction failed: ", err);
    throw err;
  }
};