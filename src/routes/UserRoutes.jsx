import { Route } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes"
import UserDashBoard from "../pages/user/UserDashBoard"


const UserRoutes = (

    <Route path="user" element={<ProtectedRoutes />}>
        <Route index element={<UserDashBoard/>} />
    </Route>

)

export default UserRoutes