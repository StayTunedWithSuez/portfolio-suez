import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Spinner from "../../components/common/Spinner"
import ErrorMessageBox from "../../components/common/ErrorMessageBox"

import useAuth from "../../hooks/useAuth"

function SignUp() {

    const [signUpData, setSignUpData] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'password': '',
    })

    const [userloading, setUserLoading] = useState(false);
    const [sentVerificationEmail, setSentVerificationEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const {signUp, user, loading, verifyEmail, logout} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if (!loading && user) {
            if (!user.emailVerified) {
                setSentVerificationEmail(true);
            } else {
                setSentVerificationEmail(false);
                navigate("/login");
            }
        }
    }, [user, navigate, loading]);

    const handleChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;

        setSignUpData({
            ...signUpData,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUserLoading(true);

        try {
            const newUser = await signUp(signUpData);

            await logout();

            await verifyEmail(newUser)

            

        } catch (error) {

            console.log(error.message);
            if (error.code === "auth/email-already-in-use") {
                setErrorMessage("This email address is already registered. Please log in.");
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }

        } finally {
            setUserLoading(false);
        }
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
                Already verified? <Link to="/login" className="text-purpleLight font-medium hover:underline">Go to login</Link>
            </p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 bg-surface w-full max-w-md p-8 shadow-sm rounded-lg">
                <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

                {errorMessage && <ErrorMessageBox errorMessage={errorMessage}/> }

                <form onSubmit={handleSubmit} className="flex flex-col gap-8" action="">
                    <div className="flex flex-col gap-4">


                        <div className="flex flex-col gap-1">
                            <label htmlFor="firstName" className="text-md font-semibold p-0.5">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={signUpData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                                className="border border-gray-400 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="lastName" className="text-md font-semibold p-0.5">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={signUpData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                className="border border-gray-400 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                                required
                            />
                        </div>


                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-md font-semibold p-0.5">Email</label>
                            <input
                                type="email"
                                id="email"
                                name = "email"
                                value={signUpData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                placeholder="Enter your email address"
                                className="border border-gray-400 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-md font-semibold p-0.5">Password</label>
                            <input
                                type="password"
                                id="password"
                                name = "password"
                                value={signUpData.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                                placeholder="Enter your password"
                                className="border border-gray-400 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                                required
                            />
                        </div>

                    </div>

                    <div>
                        <button className="flex items-center justify-center bg-primary text-white text-lg w-full text-center py-2.5 rounded-full font-semibold cursor-pointer transition duration-300 hover:bg-primary-dark">{userloading? <Spinner />: "Sign up"}</button>
                    </div>

                </form>

                <div className="flex items-center justify-end px-3 text-sm space-x-1">
                    <span>Already resistered?</span> <Link className="underline" to={"/login"}>Login</Link>
                </div>
                
        </div>
    )
}

export default SignUp