import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function ProtectedRoutesAdmin() {

    const {user, userDetails} = useAuth();

    if(!user) return <Navigate to={"/login"} />

    if(userDetails?.role !== "admin") return <Navigate to={"/"} />

    return <Outlet />
}

export default ProtectedRoutesAdmin