import { React, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import context
import { UserContext } from "../../context/UserContext";

import "./Loginup.css"

export const Signinform = () => {
    //create an userState to handle the form
    const [data, setData] = useState({Username: "", Email: "", Password: ""});
    

    //use the function from userContext
    const { Signin, isAuthenticated, errorMessage } = useContext(UserContext);

    const navigate = useNavigate();
    useEffect(() => {
        if(isAuthenticated) navigate("/home");
    }, [isAuthenticated])

   

    /**
     * event that catch the value from the form
     * @param {*} event 
     */
    const handleInputChanged = (e) => {
        setData({...data, [e.target.name] : e.target.value   });
    }

    /**
     * event that cathc the data from form and send a rquest in order to verify the user account
     * @param {*} e 
     */
    const handleSubmit = async(e) => {
        e.preventDefault();

        //login the form
        await Signin(data);
    }

    return(
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h2 className="form-title">Log in to your user account</h2>
                    <span className="form-description">Manage your tasks properly and better</span>
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" id="Email" className="form-control" value={data.Email} onChange={handleInputChanged} />
                    <div className="invalid-feedback">{errorMessage.emailError}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="Password" className="form-control" value={data.Password} onChange={handleInputChanged} />
                    <div className="group-tooltips">
                        <div className="invalid-feedback">{errorMessage.passwordError}</div>
                        <small id="emailHelp" className="text-muted"><a href="#">You forgot your password?.</a></small>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary">Log in</button>
                </div>

                <div className="form-group">
                    <div id="text-response" className="invalid-feedback" style={{textAlign: "center", fontSize: "18px"}} >{errorMessage.responseError}</div>
                </div>

               
                <section className="form-group-message-signup">
                    <small id="emailHelp" style={{fontSize: "18px", color:"#756969"}}>Don't you have any account yet? </small>
                    <Link to="/signup" className="btn" style={{ fontSize: "18px"}}>Sign up</Link>
                </section>
            </form>

            
        </>
    )
}