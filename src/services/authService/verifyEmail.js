
import { sendEmailVerification } from "firebase/auth";

export const verifyEmail = (user) => {
    return sendEmailVerification(user, {
        url: `${window.location.origin}/login`,
    });
};
