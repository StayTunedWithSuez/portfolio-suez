import { Routes, Route} from "react-router-dom"

import Home from "../pages/home"
import About from "../pages/about"
import Skills from "../pages/skills"
import Projects from "../pages/projects"
import Login from "../pages/authentication/Login"
import SignUp from "../pages/authentication/SignUp"
import AuthLayout from "../pages/authentication/AuthLayout"
import ProtectedRoutes from "./ProtectedRoutes"
import UserDashBoard from "../pages/user/UserDashBoard"
import ForgotPassword from "../pages/authentication/ForgotPassword"

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />

            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<UserDashBoard/>} />
            </Route>


            
        </Routes>

    )
}

export default AppRoutes