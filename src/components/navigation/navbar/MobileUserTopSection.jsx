import { Link } from "react-router-dom"
import { FaXmark } from "react-icons/fa6"
import useAuth from "../../../hooks/useAuth"
import { MdAccountCircle } from "react-icons/md";

import PropTypes from "prop-types"

function MobileUserTopSection({setShowMenu}) {

  const {user, userDetails} = useAuth();


  if(user) {
    return(
      <div className="flex w-full bg-black px-4 py-6 justify-between">
        <div className="flex space-x-2 items-center">
          <MdAccountCircle className="text-5xl text-gray-200" />
          <div>
            <h2 className="text-white text-lg font-semibold">{userDetails.firstName}</h2>
            <Link to={"/user"} onClick={() => setShowMenu((prev) => !prev)} className="text-white">View Profile</Link>
          </div>
        </div>

        <FaXmark className="text-2xl text-gray-200 bg-gray-800 rounded-full h-6 w-6 p-1 cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} />
      </div>
    )
  }

  return (

    <div className="w-full bg-black">
      <div className="flex flex-col gap-5 px-4 py-6 ">
        <div className="flex justify-between items-center" >
            
          <h2 className="text-white text-xl  font-bold">Welcome Dear</h2>

          <FaXmark className="text-2xl text-gray-200 bg-gray-800 rounded-full h-7 w-7 p-1 cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} />

        </div>

        <div className="flex space-x-4 w-full">

          <Link to={"/login"} onClick={() => setShowMenu((prev) => !prev)} className="flex justify-center w-1/2 bg-white py-2 rounded-lg text-lg font-semibold items-center">Log in</Link>

          <Link to={"/signup"} onClick={() => setShowMenu((prev) => !prev)} className="flex justify-center w-1/2 bg-[rgba(255,255,255,0.2)] text-white border border-gray-500 py-2 rounded-lg text-lg font-semibold items-center">Sign up</Link>
        
        </div>
          
      </div>
    </div>       

  )
}

MobileUserTopSection.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
}

export default MobileUserTopSection