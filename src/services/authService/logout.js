
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

export const logout = () => {
    return signOut(auth);
}