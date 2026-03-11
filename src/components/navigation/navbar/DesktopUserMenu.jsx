import { BsPersonCircle } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";


function DesktopUserMenu() {

    const {userDetails} = useAuth();

    return (
        <div className="flex items-center space-x-2 border-l-2 pl-3 ">
            <BsPersonCircle className="text-xl" />
            <span className="text-lg capitalize font-medium">{userDetails?.firstName}</span>
        </div>
    )
}

export default DesktopUserMenu