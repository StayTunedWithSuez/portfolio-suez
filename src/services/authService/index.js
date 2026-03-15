
import { login } from "./login";
import { logout } from "./logout";
import { resetPassword } from "./resetPassword";
import { signUp } from "./signup";
import { verifyEmail } from "./verifyEmail";
import { getUserDetails } from "./getUserDetails";

const authService = {
    login,
    logout,
    resetPassword,
    signUp,
    verifyEmail,
    getUserDetails,

    
}

export default authService;