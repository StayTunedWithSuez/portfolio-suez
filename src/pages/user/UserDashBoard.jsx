
import useAuth from '../../hooks/useAuth'


function UserDashBoard() {


    const {logout, user, userDetails} = useAuth();

    console.log(user);
    console.log(userDetails);

    const handleLogout = () => {
        logout();
    }


    


    return (
        <div className='container-layout mt-2 space-y-4'>
           
            <button className="bg-purple-700 text-white text-lg w-full text-center py-2.5 rounded-full font-semibold cursor-pointer transition duration-300 hover:bg-purple-800" onClick={handleLogout}>LogOut</button>
            
        </div>
    )
}

export default UserDashBoard