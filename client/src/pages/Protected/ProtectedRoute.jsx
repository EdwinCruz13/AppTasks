import { React, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

export const ProtectedRoute = () => {
    const {isAuthenticated} = useContext(UserContext);

    if(!isAuthenticated) return <Navigate to="/signin" replace/>

    return <Outlet />
}