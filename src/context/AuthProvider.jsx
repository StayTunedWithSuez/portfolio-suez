import { useState, useEffect} from "react";
import PropTypes from "prop-types"


import app from "../config/firebase";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification,

} from "firebase/auth"

import {getFirestore, doc, setDoc, serverTimestamp} from "firebase/firestore"


const  auth = getAuth(app);
const db = getFirestore(app);

import AuthContext from "./AuthContext";

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //listen for auth state changes (persist login)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);


    //login function
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signUp function
    const signUp = async (signUpdata) => {
        const userCredential = await createUserWithEmailAndPassword(auth, signUpdata.email, signUpdata.password);
        const newUser = userCredential.user;

        await setDoc(doc(db, "users", newUser.uid), {
            'firstName': signUpdata.firstName,
            'lastName':signUpdata.lastName,
            'email': signUpdata.email,
            createdAt: serverTimestamp(),
        })
        
        return newUser;
    }

    //logout function 
    const logout = () => {
        return signOut(auth);
    }

    //Reset password function
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email, {
            url: `${window.location.origin}/login`,
        });
    }

    //Email verification
    const verifyEmail = (user) => {
    return sendEmailVerification(user, {
        url: `${window.location.origin}/login`,
    });
    };

    return(
        <AuthContext.Provider value={{user, loading, login, signUp, logout, resetPassword, verifyEmail}}>
            {!loading && children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
