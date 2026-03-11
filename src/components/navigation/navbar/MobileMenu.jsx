
import NavMenu from "./NavMenu"
import {FaXmark} from "react-icons/fa6"
import PropTypes from "prop-types"

function MobileMenu({showMenu, setShowMenu}) {
    return (
        <>
            <div className={`fixed md:hidden top-0 left-0 w-3/5 h-screen bg-white transition-transform duration-300 ease-in-out z-50 ${showMenu ? "translate-x-0" : "-translate-x-full"}`} >   
                <FaXmark className="absolute text-2xl text-gray-900 top-5 right-4 cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} />

                <div className="absolute flex flex-col top-12 left-6 gap-4" onClick={() => setShowMenu((prev) => !prev)} >
                    <NavMenu itemName = "home" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenu itemName = "about" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenu itemName = "skills" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenu itemName = "projects" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenu itemName = "experience" onClick={() => setShowMenu((prev) => !prev)} />
                    <NavMenu itemName = "contact" onClick={() => setShowMenu((prev) => !prev)} />
                </div>
            </div>
            
            {/* Navmanu overlay for mobile sites */}
            <div className= {`fixed md:hidden inset-0 backdrop-blur-[2px] bg-black/60 transition-all duration-300 z-40 ${showMenu? "opacity-100": "opacity-0 pointer-events-none"}`} onClick={() => setShowMenu((prev) => !prev)} >
            </div>      
        
        </>
    )
}

MobileMenu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    setShowMenu: PropTypes.func.isRequired,
}

export default MobileMenu