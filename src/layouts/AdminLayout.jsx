
import { Outlet } from "react-router-dom"
import Sidebar from "../pages/admin/adminComponents/Sidebar"
import NavbarAdmin from "../pages/admin/adminComponents/NavbarAdmin"
import { useState } from "react"

function AdminLayout() {

    const [sidebarOpen, setSideBarOpen] = useState(false);

    return (
        <div className="min-h-dvh flex">
            <Sidebar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
            <div className="flex-1 flex flex-col min-w-0">
                <NavbarAdmin sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
                
                <div className="flex flex-col px-4 py-6 md:px-6">
                    <Outlet />
                </div>
            </div>
            
        </div>
    )
}

export default AdminLayout