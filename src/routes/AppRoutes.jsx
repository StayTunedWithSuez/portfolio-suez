import { Routes, Route} from "react-router-dom"

import Home from "../pages/home"
import About from "../pages/about"
import Skills from "../pages/skills"
import Projects from "../pages/projects"
import Login from "../pages/authentication/Login"
import SignUp from "../pages/authentication/SignUp"
import AuthLayout from "../pages/authentication/AuthLayout"
import ForgotPassword from "../pages/authentication/ForgotPassword"

import UserRoutes from "./UserRoutes"
import UserLayout from "../layouts/UserLayout"

import AdminLayout from "../layouts/AdminLayout"
import AdminRoutes from "./AdminRoutes"

const AppRoutes = () => {
    return (

        <Routes>
            <Route element = {<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />

                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="forgotpassword" element={<ForgotPassword />} />
                </Route>

                
                {UserRoutes}

            </Route>


            <Route element={<AdminLayout />} >
                {AdminRoutes}
            </Route>
        </Routes>

    )
}

export default AppRoutes