import { BsPersonCircle } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

import { MdOutlineDashboard } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import { useState, useRef, useEffect } from "react";


function DesktopUserMenu() {

    const {userDetails, logout} = useAuth();

    const [showUserMenu, setShowUserMenu] = useState(false);

    const menuRef = useRef();

    const userMenuHandler = () => {
        setShowUserMenu((prev) => !prev);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {document.removeEventListener("mousedown", handleClickOutside)};
    }, [])


    return (
        <div ref={menuRef} className="relative border-l-2 pl-3">
            
            <div onClick={userMenuHandler} className=" flex items-center space-x-2 cursor-pointer transition-transform duration-200 hover:scale-105">
                <BsPersonCircle className="text-xl" />
                <span className="text-lg capitalize font-medium">{userDetails?.firstName?.length > 6 ? userDetails?.firstName?.slice(0, 6) + "...": userDetails?.firstName}</span>
            </div>

            <div className={`absolute top-10 -left-16 w-60 transition-all duration-300 ${showUserMenu? "opacity-100 scale-100": "opacity-0 scale-95 pointer-events-none" }`}>
                
                <div className="relative border border-gray-200 shadow bg-surface p-6 w-full text-lg font-medium">

                    <div className="absolute h-4 w-4 bg-surface border-l-2 border-t-2 border-gray-200 rotate-45 -top-2.25 left-27"></div>
                
                    <div className="space-y-4">

                        {userDetails?.role === "admin" && <Link to={"/admin"} onClick={userMenuHandler} className="flex items-center gap-3 transition duration-200 hover:text-accent"><MdOutlineAdminPanelSettings size={20}/> <span>Admin Dashboard</span></Link>}

                        <Link to={"/user"} onClick={userMenuHandler} className="flex items-center gap-3 transition duration-200 hover:text-accent"><MdOutlineDashboard size={20}/> <span>{userDetails?.role === "admin"? "User Dashboard": "Dashboard"}</span></Link>

                        <Link to={"/user/manage-account"} onClick={userMenuHandler} className="flex items-center  gap-3 transition duration-200 hover:text-accent"><RiUserSettingsFill size={20}/> <span>Manage Account</span></Link>

                        <Link to={"/login"} onClick={logout} className="flex items-center  gap-3 transition duration-200 hover:text-accent cursor-pointer"><RxExit size={20}/><span>Log Out</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopUserMenu