import { React, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

export const ProtectedRoute = () => {
    const {isAuthenticated, loading} = useContext(UserContext);

    if(loading) return <h1>Loading......</h1>
    if(!isAuthenticated && !loading) return <Navigate to="/signin" replace/>

    return <Outlet />
}