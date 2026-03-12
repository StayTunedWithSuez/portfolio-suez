
import { MdOutlineDashboard } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { RxExit } from "react-icons/rx";

import { Link } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

import PropTypes from "prop-types"

function MobileUserMenu({setShowMenu}) {

    const {logout} = useAuth();

    return (
        <div className="flex flex-col gap-4">
            
            <span className="text-gray-600 font-medium">My Account</span>
            <div className="flex flex-col gap-3 font-medium text-lg text-gray-900">
                <Link to={"/user"} onClick={() => {setShowMenu((prev) => !prev)}} className="flex space-x-4 items-center">
                    <MdOutlineDashboard size={21} />
                    <span>Dashboard</span>
                </Link>

                <Link onClick={() => {setShowMenu((prev) => !prev)}} className="flex space-x-4 items-center">
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