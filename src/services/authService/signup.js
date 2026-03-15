import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";



export const signUp = async (signUpData) => {
    const userCredential = await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
    const newUser = userCredential.user;

    await setDoc(doc(db, "users", newUser.uid), {
        'firstName': signUpData.firstName,
        'lastName':signUpData.lastName,
        'email': signUpData.email,
        createdAt: serverTimestamp(),
    })
    
    return newUser;
}