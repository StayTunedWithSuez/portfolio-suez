import { Route } from "react-router-dom";
import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Admin = lazy(() => import("../pages/admin/Admin"));
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"))

const AdminRoutes = (

    <Route path="admin" element={<ProtectedRoutesAdmin />} >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element = {<AdminDashboard />} />
        <Route path="users" element = {<Admin />} />
        <Route path="result" element = {<Admin />} />
    </Route>
)

export default AdminRoutes;