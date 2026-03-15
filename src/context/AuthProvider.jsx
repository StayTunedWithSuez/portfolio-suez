import { useState, useEffect} from "react";
import PropTypes from "prop-types"
import authService from "../services/authService";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth"
import AuthContext from "./AuthContext";


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(null);



    //Service Calls
    const login = (email, password) => authService.login(email, password);
    const signUp = (signUpdata) => authService.signUp(signUpdata);
    const logout = () => authService.logout();
    const resetPassword = (email) => authService.resetPassword(email);
    const verifyEmail = (user) => authService.verifyEmail(user);



    //Get user details from firestore    
    const fetchUserDetails = async (uid) => {
        try {
            const details = await authService.getUserDetails(uid);
            if(details) setUserDetails(details)
        } catch (error) {
            console.error("Failed to fetch user details: ", error.message);
        }
    }
   


    //listen for auth state changes (persist login)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            
            setUser(currentUser);
            if(currentUser?.emailVerified) await fetchUserDetails(currentUser.uid);
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
