
import { auth } from "../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}/login`,
    });
}