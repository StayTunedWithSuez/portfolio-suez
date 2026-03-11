import Admin from "../pages/admin/Admin"
import { Outlet } from "react-router-dom"

function AdminLayout() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default AdminLayout