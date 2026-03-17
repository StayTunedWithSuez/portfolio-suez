import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import Spinner from "../../components/common/Spinner"
import ErrorMessageBox from "../../components/common/ErrorMessageBox"

function Login() {

    const [loginData, setLoginData] = useState({
        'email': '',
        'password': '',
    })

    const [userloading, setUserLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showNotVerified, setShowNotVerified] = useState(false);
    const [sentVerificationEmail, setSentVerificationEmail] = useState(false);
    const [resendEmailUser, setResendEmailUser] = useState("");
    const [resending, setResending] = useState(false);

    const {user, loading, login, logout, verifyEmail} = useAuth();
    const navigate = useNavigate();



    useEffect(() => {
        if(!loading && user?.emailVerified) {
            navigate("/user")
        }
    }, [user, loading, navigate]);

    const handleChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;

        setLoginData({
            ...loginData,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUserLoading(true);
        
        try {
            const response = await login(loginData.email, loginData.password);
            if(!response.user.emailVerified) {
                setResendEmailUser(response.user);
                await logout()
                setShowNotVerified(true);
            }
        } catch (error) {
            console.log(error.message);
            setErrorMessage("The login information you entered is incorrect.");
        } finally {
            setUserLoading(false);
        }
    }


    const handleResendVerification = async () => {

        if(!resendEmailUser) return

        setResending(true);
        
        try {
            await verifyEmail(resendEmailUser);

            setShowNotVerified(false);
            setSentVerificationEmail(true);
        } catch (error) {
            console.log(error.message);
            if(error.code === "auth/too-many-requests") {
                setErrorMessage("A verification email has already been sent. Please verify your email and then log in.")
            }
            setShowNotVerified(false);
        } finally {
            setResending(false);
        }
    }


    if(showNotVerified) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md p-8 border border-gray-200 rounded-xl shadow-md bg-white">

            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
                <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
                Email Not Verified
            </h2>

            {/* Message */}
            <p className="text-center text-gray-600">
                Your email address has not been verified yet. Please check your inbox and click the verification link we sent you.
            </p>

            {/* Resend Button */}
            <button
                onClick={handleResendVerification}
                className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition duration-300 cursor-pointer w-full"
            >
                {resending? <Spinner /> : "Resend Verification Email"}
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-500">
                Already verified?{" "}
                <Link
                onClick={() => setShowNotVerified(false)}
                to="/login"
                className="text-purpleLight font-medium hover:underline"
                >
                Go to login
                </Link>
            </p>

            </div>          
        )
    }

    if(sentVerificationEmail){
        return (
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md p-8 border border-gray-200 rounded-xl shadow-md bg-white">
            
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
                Verification Email Sent
            </h2>

            {/* Message */}
            <p className="text-center text-gray-600">
                We have sent a verification email to your inbox. Please check your email and click the link to verify your account before logging in.
            </p>

            {/* Optional link to login */}
            <p className="text-center text-sm text-gray-500">
                Already verified? <Link onClick={() => sentVerificationEmail(false)} to="/login" className="text-purpleLight font-medium hover:underline">Go to login</Link>
            </p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 bg-white w-full max-w-md p-8 shadow-sm rounded-lg">
            <h2 className="text-2xl font-semibold text-center">Login</h2>

            {errorMessage && <ErrorMessageBox errorMessage={errorMessage} />}
            

            <form onSubmit={handleSubmit} className="flex flex-col gap-8" action="">
                <div className="flex flex-col gap-4">
                
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            autoComplete="username"
                            placeholder="Enter your email address"
                            className="border border-gray-400 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            className="border border-gray-400 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                </div>

                <div>
                    <button className="flex items-center justify-center bg-primary text-white text-lg w-full text-center py-2.5 rounded-full font-semibold cursor-pointer transition duration-300 hover:bg-primary-dark">{userloading? <Spinner /> : "Log in"}</button>
                </div>

            </form>

            <span className="flex justify-center">
                <Link to={"/forgotpassword"}>Forgotten password?</Link>
            </span>

            <div className="flex items-center justify-center -mt-3 text-sm space-x-1">
                <span>Not have an account?</span> <Link className="underline" to={"/signup"}>Sign up</Link>
            </div>
            
        </div>
           
    )
}

export default Login