
import NavMenu from './NavMenu'
import DesktopUserMenu from './DesktopUserMenu'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom';

function DesktopMenu() {

    const {user} = useAuth();

    return (


        <div className='hidden md:flex items-center gap-6'>
            <div className="flex space-x-6">
                <NavMenu itemName = "home"  />
                <NavMenu itemName = "about" />
                <NavMenu itemName = "skills" />
                <NavMenu itemName = "projects" />
                <NavMenu itemName = "contact" />
            </div>

            {!user? 

            <Link to={"/login"} className='border-2 border-purpleLight px-4 py-1 font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-purpleLight hover:text-white'>Log in</Link>:

            <div>
                <DesktopUserMenu />
            </div>}
        </div>

    )
}

export default DesktopMenu