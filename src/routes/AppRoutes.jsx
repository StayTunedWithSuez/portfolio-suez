import { Routes, Route} from "react-router-dom"

import Home from "../pages/home"
import About from "../pages/about"

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>

    )
}

export default AppRoutes