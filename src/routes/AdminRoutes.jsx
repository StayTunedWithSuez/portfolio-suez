import { Route } from "react-router-dom";
import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin";
import { lazy } from "react";

const Admin = lazy(() => import("../pages/admin/Admin"));

const AdminRoutes = (

    <Route path="admin" element={<ProtectedRoutesAdmin />} >
        <Route index element = {<Admin />} />
    </Route>
)

export default AdminRoutes;