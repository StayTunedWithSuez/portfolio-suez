import PropTypes from "prop-types"
import { NavLink} from "react-router-dom"


function NavMenu({itemName}) {
    

    return(
        <NavLink
        to={`/${itemName}`}
        className={({ isActive }) =>
            `group relative capitalize font-semibold text-lg transition duration-200
            ${isActive ? "text-primary" : "text-text-primary/90 hover:text-primary"}`
        }
        >
        {({ isActive }) => (
            <>
            {itemName}
            <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-200
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
            </>
        )}
        </NavLink>
    )
}


NavMenu.propTypes = {
    itemName: PropTypes.string.isRequired,
}

export default NavMenu;