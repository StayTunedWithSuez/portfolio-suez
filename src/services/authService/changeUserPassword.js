import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";

import { auth } from "../../config/firebase";

export const changeUserPassword = async (currentPassword, newPassword) => {

  const user = auth.currentUser;

  if (!user) {
    throw new Error("No authenticated user found");
  }

  if (!currentPassword || !newPassword) {
    throw new Error("Current and new password are required");
  }

  if (newPassword.length < 6) {
    throw new Error("New password must be at least 6 characters");
  }

  // Create credential with current password
  const credential = EmailAuthProvider.credential(user.email, currentPassword);

  // Reauthenticate user
  await reauthenticateWithCredential(user, credential);

  // If successful, update the password
  await updatePassword(user, newPassword);
};