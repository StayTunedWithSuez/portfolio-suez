
import NavMenu from './NavMenu'

function DesktopMenu() {
    return (

        <div className="hidden md:flex space-x-6">
            <NavMenu itemName = "home"  />
            <NavMenu itemName = "about" />
            <NavMenu itemName = "skills" />
            <NavMenu itemName = "projects" />
            <NavMenu itemName = "experience" />
            <NavMenu itemName = "contact" />
        </div>

    )
}

export default DesktopMenu