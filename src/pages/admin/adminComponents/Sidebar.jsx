
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";

import { RxAvatar } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsTrophy } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";


const navItems = [
    {label: 'Dashboard', icon: LuLayoutDashboard , path: '/admin/dashboard'},
    {label: 'Users', icon: LuUsersRound , path: '/admin/users'},
    {label: 'Result', icon: BsTrophy , path: '/admin/result'}
]

function Sidebar({sidebarOpen, setSideBarOpen}) {

    const {userDetails} = useAuth();

    return (

        <>
            {/* side bar */}
            <aside className={`fixed inset-y-0 left-0 transition-transform duration-200 md:relative flex flex-col bg-surface border-r w-64 overflow-hidden shrink-0 z-50 ${sidebarOpen? "translate-x-0": "-translate-x-full md:translate-x-0"}`}>
                
                {/* logo section */}
                <div className="flex h-16 border-b items-center justify-between px-4">
                    <Link className="font-family-logo text-2xl font-semibold" to="/">
                        <span className="text-primary">Suez</span>
                        <span className="text-primary">Sohan</span>
                    </Link>

                    <span className="bg-muted-background px-4 py-[0.5px] rounded-lg text-text-secondary text-sm">Admin</span>
                </div>


                {/* Menu section */}
                <nav className="flex flex-1 flex-col px-4 py-6 gap-2">
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.path}
                            to={item.path}
                            onClick={() => setSideBarOpen(false)}
                            className={({isActive}) => `flex items-center font-medium gap-4 px-3 rounded-xl py-2 transition-all duration-200 ${!isActive? 'text-text-primary/90 hover:bg-muted-background hover:text-text-primary ': 'text-primary bg-primary/10' }`}
                        >
                            <item.icon size={17} />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* User footer */}
                <div className="flex flex-col py-6 px-6 border-t gap-6">
                    <div className="flex space-x-2 items-center">
                        <RxAvatar className="text-text-primary/80" size={45} />
                        <div className="flex flex-col">
                            <span className="font-medium">{userDetails?.firstName?.length > 10 ? userDetails?.firstName?.slice(0, 10) + "...": userDetails?.firstName}</span>
                            <span className="capitalize text-text-secondary">{userDetails?.role}</span>
                        </div>

                    </div>
                </div>
            </aside>

            {/* side bar overlay */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40 md:hidden transition-all duration-200 ${sidebarOpen? "opacity-100": "opacity-0 pointer-events-none"}`}
                onClick={() => setSideBarOpen(false)}
            />

        </>
    )
}

Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool.isRequired,
    setSideBarOpen: PropTypes.func.isRequired,
}

export default Sidebar