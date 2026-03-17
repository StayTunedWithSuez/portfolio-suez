
import NavMenu from "./NavMenu"
import PropTypes from "prop-types"
import MobileUserTopSection from "./MobileUserTopSection"
import MobileUserMenu from "./MobileUserMenu"

import useAuth from "../../../hooks/useAuth"

function MobileMenu({showMenu, setShowMenu}) {

    const {user} = useAuth();

    return (
        <>
            <div className={`fixed md:hidden top-0 left-0 w-2/3 h-screen bg-surface transition-transform duration-300 ease-in-out z-50 ${showMenu ? "translate-x-0" : "-translate-x-full"}`} >
                 
                <MobileUserTopSection setShowMenu={setShowMenu} />

                <div className="flex flex-col mt-5 px-4">

                    <div onClick={() => setShowMenu((prev) => !prev)} className="flex flex-col items-start gap-3">
                        <NavMenu itemName = "home"  />
                        <NavMenu itemName = "about" />
                        <NavMenu itemName = "skills" />
                        <NavMenu itemName = "projects" />
                        <NavMenu itemName = "experience" />
                        <NavMenu itemName = "contact" />
                    </div>
                    
                    {user && (
                        <>
                        <div className="bg-text-secondary/10 w-full h-[1.5px] my-5 rounded-full"></div>

                        <MobileUserMenu setShowMenu={setShowMenu} />
                        </> 
                    )}

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