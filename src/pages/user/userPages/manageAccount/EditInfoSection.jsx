import { useState } from "react";
import useAuth from "../../../../hooks/useAuth"
import { FaRegSave } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ErrorMessageBox from "../../../../components/common/ErrorMessageBox";
import Spinner from "../../../../components/common/Spinner";
import toast from "react-hot-toast";

import { updatePersonalDetails } from "../../../../services/authService/updatePersonalDetails";
import { changeUserPassword } from "../../../../services/authService/changeUserPassword";

function EditInfoSection() {
    
    const {userDetails, user, fetchUserDetails} = useAuth();


    const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
    const [personalInfo, setPersonalInfo] = useState({
        firstName: userDetails?.firstName,
        lastName: userDetails?.lastName,
    })
    const [loadingPersonalInfo, setLoadingPersonalInfo] = useState(false);
    const [errorPersonalInfo, setErrorPersonalInfo] = useState(null);


    const [isPasswordChanging, setIsPasswordChanging] = useState(false);
    const [passwordInfo, setPasswordInfo] = useState({
        currentPassword: "",
        newPassword: "",
    })
    const [loadingPassword, setLoadingPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState(null);

    //Update personal info function
    const handlePersonalInfo = async (event) => {

        event.preventDefault();

        setLoadingPersonalInfo(true);
        setErrorPersonalInfo("");

        try {

            const fName = personalInfo.firstName;
            const lName = personalInfo.lastName;

            await updatePersonalDetails(user.uid, fName, lName);
            await fetchUserDetails(user.uid);
            setIsEditingPersonalInfo(false);

            toast.success("Personal info updated successfully!", {
                duration: 2000,
            });

        } catch (error) {
            console.error("Updating personal information: ", error.message);
            setErrorPersonalInfo(error.message);
        } finally {
            setLoadingPersonalInfo(false);
        }
    }

    //Change password handler
    const handleChangePassword = async (event) => {
        event.preventDefault();
        setLoadingPassword(true);
        setErrorPassword("");

        try {
            await changeUserPassword(passwordInfo.currentPassword, passwordInfo.newPassword)
            toast.success("Your password has been changed successfully!")
            setIsPasswordChanging(false);

        } catch (error) {
            console.log("Error when changing password", error.message);

            if (error.code === "auth/invalid-credential") {
                setErrorPassword("Your current password is incorrect");
            } else {
                setErrorPassword(error.message);
            }
        } finally {
            setLoadingPassword(false)
        }
    }


    return (
        <div className="flex flex-col gap-8 bg-surface rounded-lg shadow p-8 pb-10">

            {/* Personal Information */}
            <div className="flex flex-col gap-6">

                <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                    <h3 className="text-lg font-medium">
                        Personal Information
                    </h3>

                    {!isEditingPersonalInfo && <button onClick={() => setIsEditingPersonalInfo(true)} className="cursor-pointer text-primary transition duration-200 hover:text-primary-dark">Edit</button>}

                    {isEditingPersonalInfo && 
                    <button 
                        onClick={() => {
                            setIsEditingPersonalInfo(false);
                            setPersonalInfo({
                                firstName: userDetails?.firstName,
                                lastName: userDetails?.lastName,
                            });
                            setErrorPersonalInfo(null);
                        }} 

                        className="cursor-pointer text-primary transition duration-200 hover:text-primary-dark"
                    >        
                        
                        Cancel

                    </button>}
                </div>
                
                {errorPersonalInfo && <ErrorMessageBox errorMessage={errorPersonalInfo} />}

                <form onSubmit={handlePersonalInfo} className="flex flex-col gap-4">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="firstName">First Name *</label>
                        <input 
                            type="text"
                            name = "firstName" 
                            value={personalInfo?.firstName}
                            onChange={(e) => setPersonalInfo((prev) => ({
                                ...prev,
                                firstName: e.target.value,
                            }))}
                            className="border border-gray-300 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                            required
                            disabled = {!isEditingPersonalInfo}
                        />
                    </div>

                    
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastName">Last Name *</label>
                        <input 
                            type="text"
                            name = "lastName" 
                            value={personalInfo?.lastName}
                            onChange={(e) => setPersonalInfo((prev) => ({
                                ...prev,
                                lastName: e.target.value,
                            }))}
                            className="border border-gray-300 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                            required
                            disabled = {!isEditingPersonalInfo}
                        />
                    </div>

                    {isEditingPersonalInfo && <div className="flex justify-end">
                        <button className="flex min-w-40 justify-center items-center space-x-2 bg-primary transition duration-200 hover:bg-primary-dark text-surface px-4 py-2 text-lg rounded-xl font-medium cursor-pointer" >{loadingPersonalInfo? <Spinner /> : (<><FaRegSave /><span>Save Changes</span></>)}</button>
                    </div>}
                </form>
            </div>

            {/* User Email */}
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                    <h3 className="text-lg font-medium">
                        User Email
                    </h3>
                </div>
                
                <div className="flex flex-col gap-2">
                    <div className="border border-gray-300 py-4 px-4 rounded-lg bg-accent/10" >
                        <span>{userDetails?.email}</span>
                    </div>
                    <span className="text-sm text-text-secondary px-2">* User email can not be changed</span>
                </div>

            </div>


            {/* Change Password */}
            <div className="flex flex-col gap-6">
                <div className="group flex space-x-6 items-center">

                    <h3 onClick={() => setIsPasswordChanging((prev) => !prev)} className="text-lg font-medium  text-primary transition duration-200 cursor-pointer group-hover:text-primary-dark">
                        Change Password
                    </h3>

                    <div >
                        <MdOutlineKeyboardArrowRight onClick={() => setIsPasswordChanging((prev) => !prev)} className={`transition duration-200 text-primary cursor-pointer group-hover:text-primary-dark ${isPasswordChanging && "rotate-90"}`} size={25} />
                    </div>
                </div>

                {errorPassword && <ErrorMessageBox errorMessage={errorPassword} />}
                
               <form onSubmit={handleChangePassword} className={`flex flex-col gap-5 text-text-primary/80 transition-all duration-300 ease-in-out overflow-hidden ${isPasswordChanging ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>

                    <div className="flex flex-col gap-1">

                        <label htmlFor="password" className="">Current Password</label>
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            value={passwordInfo.currentPassword}
                            onChange={(e) => setPasswordInfo((prev) => ({...prev, currentPassword: e.target.value})) }
                            className="border border-gray-300 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">

                        <label htmlFor="password" className="">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={passwordInfo.newPassword}
                            onChange={(e) => setPasswordInfo((prev) => ({...prev, newPassword: e.target.value})) }
                            className="border border-gray-300 rounded-lg px-3 py-3 placeholder:text-gray-500 placeholder:font-medium focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <button className="flex min-w-40 justify-center items-center space-x-2 bg-primary transition duration-200 hover:bg-primary-dark text-surface px-4 py-2 text-lg rounded-xl font-medium cursor-pointer" >{loadingPassword? <Spinner />: (<><FaRegSave /><span>Update Password</span></>)}</button>
                    </div>

               </form>

            </div>
        </div>
    )
}

export default EditInfoSection