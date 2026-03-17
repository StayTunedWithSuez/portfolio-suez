import { Route } from "react-router-dom"
import { lazy } from "react"


import ProtectedRoutes from "./ProtectedRoutes"


const UserDashBoard = lazy(() => import("../pages/user/UserDashBoard"))
const ManageAccount = lazy(() => import("../pages/user/userPages/manageAccount"))


const UserRoutes = (

    <Route path="user" element={<ProtectedRoutes />}>
        <Route index element={<UserDashBoard/>} />
        <Route path="manage-account" element={<ManageAccount />} />
    </Route>

)

export default UserRoutes