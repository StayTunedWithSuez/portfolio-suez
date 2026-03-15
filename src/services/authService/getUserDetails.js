import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const getUserDetails = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data();
  return null;
};