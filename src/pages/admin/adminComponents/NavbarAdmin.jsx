import { IoMenu } from "react-icons/io5";
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";

function NavbarAdmin({sidebarOpen, setSideBarOpen}) {

    const location = useLocation();
    const currentPage = location.pathname.split('/').filter(Boolean).pop();

    return (
        <div className="flex h-16 border-b bg-surface items-center px-4 md:px-6">

            <div className="flex space-x-6 items-center">
                {!sidebarOpen && <IoMenu size={30} className="md:hidden cursor-pointer" onClick={() => setSideBarOpen((prev) => !prev)} />}

                <h1 className="text-xl font-medium capitalize">{currentPage}</h1>
            </div>
        </div>
    )
}

NavbarAdmin.propTypes = {
    sidebarOpen: PropTypes.bool.isRequired,
    setSideBarOpen: PropTypes.func.isRequired,
}

export default NavbarAdmin