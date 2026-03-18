import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const updatePersonalDetails = async (userId, firstName, lastName) => {

  if (!userId) throw new Error("User ID is required");

  // Trim the values
  const fName = firstName?.trim();
  const lName = lastName?.trim();

  // Validate type, empty, and length (max 50 characters as example)
  if (
    typeof fName !== "string" ||
    typeof lName !== "string" ||
    !fName ||
    !lName ||
    fName.includes(" ") ||
    lName.includes(" ") ||
    fName.length > 50 ||
    lName.length > 50
  ) {
    throw new Error("Invalid personal information.");
  }

  const userRef = doc(db, "users", userId);

  await updateDoc(userRef, {
    firstName: fName,
    lastName: lName,
  });
};