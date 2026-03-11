import { useState, useEffect} from "react";
import PropTypes from "prop-types"



import {auth, db} from "../config/firebase";
import {
   
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification,

} from "firebase/auth"

import { doc, setDoc, serverTimestamp, getDoc} from "firebase/firestore"



import AuthContext from "./AuthContext";

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(null);



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



    // Get user details from Firestore
    const getUserDetails = async (uid) => {
        try {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
            }
        } catch (error) {
            console.error("Failed to fetch user details:", error.message);
        }
    };



    //listen for auth state changes (persist login)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            
            setUser(currentUser);
            if(currentUser?.emailVerified) {
                await getUserDetails(currentUser.uid);
            }
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);


    return(
        <AuthContext.Provider value={{user, loading, login, signUp, logout, resetPassword, verifyEmail, userDetails}}>
            {!loading && children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
