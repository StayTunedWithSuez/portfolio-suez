import useAdmin from "../../hooks/useAdmin"
import LoadingSpinner from "../../components/common/LoadingSpinner"
import { updateUserDetails } from "../../services/adminService/updateUserDetails";
import Spinner from "../../components/common/Spinner";
import toast from "react-hot-toast";
import ErrorMessageBox from "../../components/common/ErrorMessageBox";

import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { FaRegSave } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import Modal from "./adminComponents/Modal";

import { useState } from "react";


function UsersPageAdmin() {

    const {loading, allUsers, refetchAllUsers} = useAdmin();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userInfoLoading, setUserInfoLoading] = useState(false)
    const [userInfoError, setUserInfoError] = useState(null);

    const handleSubmit = async (event) => {

        event.preventDefault();
        setUserInfoLoading(true);
        setUserInfoError(null);

        try {
            await updateUserDetails(selectedUser.id, selectedUser.firstName, selectedUser.lastName, selectedUser.role);
            refetchAllUsers();
            setIsModalOpen(false);
            toast.success("User details updated successfully!");
            setUserInfoError(null);
        } catch (error) {
            console.error("Error while updating user details: ", error.message)
            setUserInfoError(error.message)
        } finally {
            setUserInfoLoading(false)
        }
    }



    const handleDelete = (event) => {
        event.preventDefault();
        console.log("deleting user")
    }



    if(loading) return <LoadingSpinner />

    return (
        <div>
            
            <div className="admin-card p-6 overflow-auto">
                <table className="min-w-full">
                    <thead className="bg-muted-background" >
                        <tr>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Id</th>
                            <th className="px-4 py-3">Role</th>
                            <th className="px-4 py-3">More</th>
                        </tr>
                    </thead>

                    <tbody className="text-text-primary/90 text-sm">
                        {allUsers.map((user) => (
                            <tr key={user?.id} className="border-b">
                                <td className="px-4 py-3 flex gap-2 text-text-primary font-semibold">
                                    <span>{user?.firstName}</span>
                                    <span>{user?.lastName}</span>
                                </td>

                                <td className="px-4 py-3">
                                    {user?.email}
                                </td>

                                <td className="px-4 py-3">
                                    {user?.id.slice(0, 12) + "..."}
                                </td>

                                <td className="px-6 py-3 text-center capitalize">
                                    <span
                                        className={`px-4 py-1 rounded-full font-medium
                                        ${
                                            user?.role === "admin"
                                                ? "bg-accent/10 text-accent"
                                                : user?.role === "student"
                                                ? "bg-primary/10 text-primary"
                                                : "bg-gray-100 text-gray-600"
                                        }`}
                                    >
                                        {user?.role || "guest"}
                                    </span>
                                </td>

                                <td className="px-4 py-3">
                                    <div className="flex items-center justify-center">
                                        <button
                                            onClick={() => {
                                                setIsModalOpen(true);
                                                setSelectedUser(user);
                                            }}
                                            className="cursor-pointer transition duration-300 hover:text-primary"
                                        >
                                            <PiDotsThreeOutlineVertical size={18} />
                                        </button> 
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false); setUserInfoError(null)}}>
                <div>
                    <div onClick={() => setIsModalOpen(false)} className="flex justify-end text-text-primary/70 cursor-pointer">
                        <ImCancelCircle size={25} />
                    </div>
                    <div className="flex gap-3 justify-center items-center">
                        <div className="bg-primary/10 w-auto p-2 rounded-lg">
                            <FaRegEdit size={30} className="text-primary" />
                        </div>
                        <span className="font-bold text-xl text-text-primary/80">Edit User Information</span>
                    </div>

                    {userInfoError && <div className="mt-6">
                        <ErrorMessageBox errorMessage={userInfoError} />
                    </div>}

                    <div className="mt-4 p-2">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <div className="flex flex-col justify-between md:flex-row gap-3">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="firstName" className="text-text-primary/80">First Name</label>
                                    <input 
                                        type="text"
                                        id="firstName"
                                        value={selectedUser?.firstName || ""}
                                        onChange={(e) => setSelectedUser((prev) => ({...prev, firstName: e.target.value}))}
                                        name="firstName" 
                                        placeholder="First name"
                                        className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
                                        required
                                        disabled={selectedUser?.role === "admin" && true}
                                    />
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="lastName" className="text-text-primary/80">Last Name</label>
                                    <input 
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={selectedUser?.lastName || ""}
                                        onChange={(e) => setSelectedUser((prev) => ({...prev, lastName: e.target.value}))}
                                        placeholder="Last name"
                                        className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
                                        required
                                        disabled={selectedUser?.role === "admin" && true}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col justify-between md:flex-row gap-3">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="userId" className="text-text-primary/80">User ID</label>
                                    <input 
                                        type="text"
                                        id="userId"
                                        name="userId"
                                        value={selectedUser?.userId || "No user ID assigned !"}
                                        className="border px-4 py-2 rounded-lg bg-muted-background/70 focus:outline-none focus:ring-1 focus:ring-gray-200"
                                        required
                                        disabled
                                    />
                                </div>

                                {selectedUser?.role !== "admin" && <div className="flex flex-col gap-2 w-full">
                                    <label className="text-text-primary/80">
                                        User Role
                                    </label>

                                    <select
                                        className="border px-4 py-2 rounded-lg bg-transparent
                                        focus:outline-none focus:ring-2 focus:ring-gray-200
                                        transition-all duration-200"
                                        value={selectedUser?.role || ""}
                                        onChange={(e) => setSelectedUser((prev) => ({...prev, role: e.target.value}))}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select a role
                                        </option>
                                        <option value="guest">Guest</option>
                                        <option value="student">Student</option>
                                    </select>
                                </div>}
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="email" className="text-text-primary/80">Email</label>
                                <input 
                                    type="text"
                                    id="email"
                                    name="email" 
                                    value={selectedUser?.email || ""}
                                    className="border px-4 py-2 rounded-lg bg-muted-background/70  text-text-primary/80 focus:outline-none focus:ring-1 focus:ring-gray-200"
                                    disabled
                                />
                            </div>

                            {selectedUser?.role !== "admin" && <div className="flex flex-col xs:flex-row justify-end gap-3 mt-4">
                                <button className="flex items-center justify-center gap-2 bg-primary text-white text-lg text-center py-2 rounded-lg font-semibold px-10 cursor-pointer transition duration-300 hover:bg-primary-dark">

                                    {userInfoLoading? <Spinner />:
                                        <>
                                            <span><FaRegSave /></span>
                                            <span>Save</span>
                                        </>
                                    }
                                </button>

                                {/* <button onClick={handleDelete} className="flex items-center justify-center gap-2 bg-red-600 text-white text-lg text-center py-2 rounded-lg font-semibold px-6 cursor-pointer transition duration-300 hover:bg-red-800">

                                    <span><RiDeleteBin6Line /></span>
                                    <span>Delete</span>
                                </button> */}

                                
                            </div>}
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UsersPageAdmin