import React from "react";
import {Route, Routes} from "react-router-dom"

import Users from "../pages/users/users"

const PagesRoutes = () => {
    return(
        <Routes>
            <Route element={<Users/>} path="/"/>
        </Routes>
    )
}

export default PagesRoutes