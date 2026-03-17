import { Link } from "react-router-dom"
import { FaXmark } from "react-icons/fa6"
import useAuth from "../../../hooks/useAuth"
import { MdAccountCircle } from "react-icons/md";

import PropTypes from "prop-types"

function MobileUserTopSection({setShowMenu}) {

  const {user, userDetails} = useAuth();


  if(user) {
    return(
      <div className="flex w-full bg-secondary px-4 py-6 justify-between">
        <div className="flex space-x-2 items-center">
          <MdAccountCircle className="text-5xl text-surface" />

        	<div>
				    <h2 className="text-surface text-lg font-semibold">{userDetails?.firstName?.length > 6 ? userDetails?.firstName?.slice(0, 6) + "...": userDetails?.firstName}</h2>
				    <Link to={"/user"} onClick={() => setShowMenu((prev) => !prev)} className="text-surface">View Profile</Link>
         	 </div>

        </div>

        <FaXmark className="text-2xl text-text-secondary bg-surface rounded-full h-6 w-6 p-1 cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} />
      </div>
    )
  }

  return (

    <div className="w-full bg-secondary">
      <div className="flex flex-col gap-5 px-4 py-6 ">
        <div className="flex justify-between items-center" >
            
          <h2 className="text-surface text-xl  font-bold">Welcome Dear</h2>

          <FaXmark className="text-2xl text-text-secondary bg-surface rounded-full h-7 w-7 p-1 cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} />

        </div>

        <div className="flex space-x-4 w-full">

          <Link to={"/login"} onClick={() => setShowMenu((prev) => !prev)} className="flex justify-center w-1/2 bg-surface py-2 rounded-lg text-lg font-semibold items-center">Log in</Link>

          <Link to={"/signup"} onClick={() => setShowMenu((prev) => !prev)} className="flex justify-center w-1/2  border-2 border-surface text-surface py-2 rounded-lg text-lg font-semibold items-center">Sign up</Link>
        
        </div>
          
      </div>
    </div>       

  )
}


MobileUserTopSection.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
}

export default MobileUserTopSection