import React from "react";
import {Route, Routes} from "react-router-dom"

import Home from "../pages/home/home"

const PagesRoutes = () => {
    return(
        <Routes>
            <Route element={<Home/>} path="/"/>
        </Routes>
    )
}

export default PagesRoutes