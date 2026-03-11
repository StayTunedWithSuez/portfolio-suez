import { useState } from "react"
import Spinner from "../../components/common/Spinner";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [userLoading, setUserLoading] = useState(false);
    const [resetEmailSent, setResetEmailSent] = useState(false);

    const {resetPassword} = useAuth();


    const handleSubmit = async (event) => {
        event.preventDefault();
        setUserLoading(true);

        try {
            await resetPassword(email);
            setResetEmailSent(true);
        } catch (error) {
            console.log(error.message);
        } finally {
            setUserLoading(false);
        }
    }



    return (
        <>
        {!resetEmailSent ? 
            <div className="flex flex-col gap-6 border border-gray-100 w-full max-w-md p-8 shadow-sm rounded-lg">

             <h2 className="text-2xl font-semibold text-center">Reset Password</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8" action="">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoComplete="username"
                            placeholder="Enter your email address"
                            className="border border-gray-400 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                    <div>
                        <button className="flex items-center justify-center bg-purple-700 text-white text-lg w-full text-center py-2.5 rounded-full font-semibold cursor-pointer transition duration-300 hover:bg-purple-800">{userLoading? <Spinner /> : "Send Reset Link"}</button>
                    </div>
                
                </form>
            </div> :

            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md p-8 border border-gray-200 rounded-xl shadow-md bg-white">
                        
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                    <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    </svg>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Password Reset Email Sent
                </h2>

                {/* Message */}
                <p className="text-center text-gray-600">
                    A recovery email has been sent to your email address. Please check your inbox and follow the instructions to reset your password.
                </p>

                {/* Login link */}
                <p className="text-center text-sm text-gray-500">
                    After resetting your password,{" "}
                    <Link
                        to="/login"
                        className="text-purpleLight font-medium hover:underline"
                    >
                        log in again
                    </Link>
                </p>

            </div>
        }
        </>
    )
}

export default ForgotPassword