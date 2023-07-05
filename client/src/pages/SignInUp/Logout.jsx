import { React, useContext, useEffect } from "react";
import {  UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export const Logout = () => {
    const { user, Logout } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect( () => {
        async function disconnect()
        {
            await Logout();
        }

        disconnect();
        navigate("/home");
    }, []);

    return(
        <>
        </>
    );
}