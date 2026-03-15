import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const login = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password);

}