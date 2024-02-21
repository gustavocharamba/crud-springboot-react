import React from "react";
import {Route, Routes} from "react-router-dom"

import Users from "../pages/users/users"
import Create from "../pages/create/create"

const PagesRoutes = () => {
    return(
        <Routes>
            <Route element={<Users/>} path="/"/>
            <Route element={<Create/>} path="/create"/>
        </Routes>
    )
}

export default PagesRoutes