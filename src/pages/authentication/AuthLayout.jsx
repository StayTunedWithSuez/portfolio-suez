import { Outlet } from "react-router-dom"

function AuthLayout() {
    return (
        <div className='container-layout flex items-center justify-center py-6 min-h-[70vh]'>
            <Outlet />
        </div>
    )
}

export default AuthLayout