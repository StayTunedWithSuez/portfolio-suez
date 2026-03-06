import { Routes, Route} from "react-router-dom"

import Home from "../pages/home"
import About from "../pages/about"
import Skills from "../pages/skills"

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>

    )
}

export default AppRoutes