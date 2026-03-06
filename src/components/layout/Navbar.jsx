import PropTypes from "prop-types"
import { useState } from "react"
import {FaBars} from "react-icons/fa"
import {FaXmark} from "react-icons/fa6"
import { NavLink } from "react-router-dom"

function NavMenue({itemName, activeMenu, setActiveMenu}) {
    

    return(
        <NavLink className="group relative" onClick={() => setActiveMenu(itemName)} to={`${itemName}`}>
            <span className={`capitalize text-gray-950 font-semibold text-lg group-hover:text-purple-900 transition duration-200 ${activeMenu === itemName && "text-purple-900"}`}>{itemName}</span>

            <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-900 transition-all duration-200 group-hover:w-full ${activeMenu === itemName && "w-full"}`}></span>
        </NavLink>
    )
}


function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");

    return (
        <nav className="sticky top-0 w-full bg-white shadow-sm py-3 z-50">
            
            {/* Navmenu for desktop sites */}
            <div className="container-layout mx-auto flex justify-between items-center">
                <div>
                    <a className="font-family-logo text-3xl font-semibold md:text-4xl" href="#">
                        Suez<span className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">Sohan</span>
                    </a>
                </div>

                <div className="hidden md:flex space-x-6">
                    <NavMenue itemName = "home" activeMenu = {activeMenu} setActiveMenu = {setActiveMenu} />
                    <NavMenue itemName = "about" activeMenu = {activeMenu} setActiveMenu = {setActiveMenu} />
                    <NavMenue itemName = "skills" activeMenu = {activeMenu} setActiveMenu = {setActiveMenu} />
                    <NavMenue itemName = "projects" activeMenu = {activeMenu} setActiveMenu = {setActiveMenu} />
                    <NavMenue itemName = "experience" activeMenu = {activeMenu} setActiveMenu = {setActiveMenu} />
                    <NavMenue itemName = "contact" activeMenu = {activeMenu} setActiveMenu = {setActiveMenu} />
                </div>

                <div className=" md:hidden">
                    {
                        showMenu ||
                        <FaBars className="text-2xl text-gray-900 cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} />
                    }

                </div>
            </div>
        
            {/* Navmenu for mobile sites */}
            <div className={`fixed md:hidden top-0 left-0 w-3/5 h-screen bg-white transition-transform duration-300 ease-in-out z-50 ${showMenu ? "translate-x-0" : "-translate-x-full"}`} >   
                <FaXmark className="absolute text-2xl text-gray-900 top-5 right-4 cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} />

                <div className="absolute flex flex-col top-12 left-6 gap-4" onClick={() => setShowMenu((prev) => !prev)} >
                    <NavMenue itemName = "home" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenue itemName = "about" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenue itemName = "skills" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenue itemName = "projects" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenue itemName = "experience" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenue itemName = "contact" onClick={() => setShowMenu((prev) => !prev)} />
                </div>
            </div>
            
            {/* Navmanu overlay for mobile sites */}
            <div className= {`fixed md:hidden inset-0 backdrop-blur-[2px] bg-black/60 transition-all duration-300 z-40 ${showMenu? "opacity-100": "opacity-0 pointer-events-none"}`} onClick={() => setShowMenu((prev) => !prev)} >
            </div>
            
        </nav>
    )
}


NavMenue.propTypes = {
    itemName: PropTypes.string.isRequired,
    activeMenu: PropTypes.string.isRequired,
    setActiveMenu: PropTypes.func.isRequired,
}
export default Navbar