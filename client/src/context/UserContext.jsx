import { React, createContext, useEffect, useState  } from "react";
import Cookies from "js-cookie";
import { LoginRequest, LogoutRequest, VerifyTokenRequest } from "../api/auth.api";
import { UsersRequest, UserDetailRequest, CreateUserRequest, UpdateUserRequest } from "../api/user.api";

//create a context
export const UserContext = createContext();

//create a provider
export const UserContextProvider = ({ children }) => {
    //here create functions, hooks and variable

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState({ responseError: "", usernameError: "", emailError: "", passwordError: ""});
    const [loading, setLoading] = useState(true);



    //verify the token througt the cookie
    useEffect(() => {
        GetUserList();
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
                if(response.status === 498) {
                    await LogoutRequest();
                }

                if(!response.data){
                    setLoading(false);
                    setIsAuthenticated(false);
                    setUser(null);
                    Logout();
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

                Logout();
            }
        }

        verifyToken();
    }, []);


    /**
     * create a new user
     * @param {*} user 
     * @returns 
     */
    const CreateUser = async(user) => {
        try {
            //do a request using a new AxiosRequest object
            const response = await CreateUserRequest(user);
      
            //check the response from api rest
            if (!response.data.error) {
              //refresh the page
              return "OK";
            } else {
              return response.data.error;
            }
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
    }


    const UpdateUser = async(user) => {
        try {
            //do a request using a new AxiosRequest object
            const response = await UpdateUserRequest(user);
      
            //check the response from api rest
            if (!response.data.error) {
              //refresh the page
              return "OK";
            } else {
              return response.data.error;
            }
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
    }


    /**
     * get the user list
     * @returns 
     */
    const GetUserList = async() => {
        try {
            const list = await UsersRequest();
            if(!list){
                setUsers(null);
                setLoading(false);
                return
            }
            setUsers(list.data);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }
    }

    const GetUser = async(Id) => {
        try {
            const list = await UserDetailRequest(Id);
            if(!list){
                setSelectedUser(null);
                setLoading(false);
                return
            }
            setSelectedUser(list.data);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }
    }

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

    const setNew = () => {
        setSelectedUser(null);
    }

    return (
        <UserContext.Provider 
            value={{user, users, selectedUser, isAuthenticated, loading, errorMessage, CreateUser, UpdateUser, GetUser, Signin, Logout, setNew}}
        >
            { children }
        </UserContext.Provider>
    )
}