
import { MdOutlineDashboard } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import { Link } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

import PropTypes from "prop-types"

function MobileUserMenu({setShowMenu}) {

    const {logout, userDetails} = useAuth();

    return (
        <div className="flex flex-col gap-4">
            
            <span className="text-gray-600 font-medium">My Account</span>
            <div className="flex flex-col gap-3 font-medium text-lg text-gray-900">

                {userDetails?.role === "admin" && (
                    
                    <Link to={"/admin"} onClick={() => {setShowMenu((prev) => !prev)}} className="flex space-x-4 items-center">
                        <MdOutlineAdminPanelSettings size={21} />
                        <span>Admin Dashboard</span>
                    </Link>

                )}

                <Link to={"/user"} onClick={() => {setShowMenu((prev) => !prev)}} className="flex space-x-4 items-center">
                    <MdOutlineDashboard size={21} />
                    <span>{userDetails?.role === "admin"? "User Dashboard": "Dashboard"}</span>
                </Link>

                <Link to={"/user/manage-account"} onClick={() => {setShowMenu((prev) => !prev)}} className="flex space-x-4 items-center">
                    <RiUserSettingsFill size={21} />
                    <span>Manage Account</span>
                </Link>

                <Link to={"/login"} onClick={() => {logout(); setShowMenu((prev) => !prev)}} className="flex space-x-4 items-center">
                    <RxExit size={21} />
                    <span>Logout</span>
                </Link>
            </div>

        </div>
    )
}

MobileUserMenu.propTypes = {
    setShowMenu: PropTypes.func.isRequired,
}

export default MobileUserMenu