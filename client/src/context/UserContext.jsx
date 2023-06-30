import { React, createContext  } from "react";

//create a context
export const UserContext = createContext();

//create a provider
export const UserContextProvider = ({ children }) => {
    //here create functions, hooks and variable

    return (
        <UserContext.Provider>
            { children }
        </UserContext.Provider>
    )
}