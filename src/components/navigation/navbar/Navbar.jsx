
import { useState } from "react"
import {FaBars} from "react-icons/fa"
import {FaXmark} from "react-icons/fa6"
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";





function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="sticky top-0 w-full bg-surface shadow-sm py-3 z-50">
            
            
            <div className="container-layout mx-auto flex justify-between items-center">
                <div>
                    <Link className="font-family-logo text-3xl text-accent font-semibold md:text-4xl" to="/">
                        Suez<span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Sohan</span>
                    </Link>
                </div>

                {/* Navmenu for desktop sites */}
                <DesktopMenu />

                <div className=" md:hidden">
                    {
                        showMenu ||
                        <FaBars className="text-2xl text-text-primary cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} />
                    }

                </div>
            </div>
        
            {/* Navmenu for mobile sites */}
            <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            
        </nav>
    )
}

export default Navbar