import { React, createContext, useEffect, useState  } from "react";
import Cookies from "js-cookie";
import { LoginRequest, LogoutRequest, VerifyTokenRequest } from "../api/auth.api";

//create a context
export const UserContext = createContext();

//create a provider
export const UserContextProvider = ({ children }) => {
    //here create functions, hooks and variable

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState({ responseError: "", usernameError: "", emailError: "", passwordError: ""});
    const [loading, setLoading] = useState(true);



    //verify the token througt the cookie
    useEffect(() => {
        async function verifyToken(){
            const cookies = Cookies.get();
           
            //if there any token saved as cookie
            if(!cookies.token){
                setLoading(false);
                setIsAuthenticated(false);
                setUser(null);
                return;
            }

            try {
                const response = await VerifyTokenRequest(cookies.token);
                if(!response.data){
                    setLoading(false);
                    setIsAuthenticated(false);
                    setUser(null);
                    return
                }

                setLoading(false);
                setIsAuthenticated(true);
                setUser(response.data);
                

                //console.log(user, isAuthenticated);
        
            } catch (error) {
                setLoading(false);
                setIsAuthenticated(false);
                setUser(null);
            }
        }

        verifyToken();
    }, []);

    /**
     * a function that verify the user from a form
     * @param {*} user 
     */
    const Signin = async(user) => {
        try {
            if(user.Email.length === 0) setErrorMessage({ emailError: "Email is required" });
            if(user.Password.length === 0) setErrorMessage({ passwordError: "Password is required" });

            //if the form is completed
            if(user.Email.length !== 0 && user.Password.length !== 0){

                //do a request using a new AxiosRequest object 
                const response = await LoginRequest(user)

                //check the response from api rest
                if(!response.data.error){
                    setIsAuthenticated(true);
                    setUser(response.data);
                } else{
                    setErrorMessage({responseError: response.data.error, usernameError: "", emailError: "", passwordError: ""})
                }  
            }

            
        } catch (error) {
            setLoading(false);
            setIsAuthenticated(false);
            setUser(null);
        }
    }

    /**
     * method that eliminated the cookies
     */
    const Logout = async() => {
        try {
            
            const response = await LogoutRequest();
            console.log(response);

            if(!response.data.error){
                setIsAuthenticated(false);
                setUser(null);
            } else{
                console.log(response);
            }  


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider 
            value={{user, isAuthenticated, loading, errorMessage, Signin, Logout}}
        >
            { children }
        </UserContext.Provider>
    )
}