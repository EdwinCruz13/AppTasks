import { React } from "react";
import { Link } from "react-router-dom";
import "./Loginup.css"

export const Signupform = () => {
    return(
        <>
            <form className="form">
                <div className="form-header">
                    <h2 className="form-title">Create a new account</h2>
                    <span className="form-description">Manage your tasks properly and better</span>
                </div>

                <div className="form-group">
                    <label htmlFor="Username">Username</label>
                    <input type="text" name="Username" id="Username" className="form-control" />
                    <div className="invalid-feedback">El Campo es requerido </div>
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" id="Email" className="form-control" />
                    <div className="invalid-feedback">El Campo es requerido </div>
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="Password" className="form-control" />
                    <div className="group-tooltips">
                        <div className="invalid-feedback">El Campo es requerido </div>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary">Sign up</button>
                </div>

                <section className="form-group-message-signup">
                    <small id="emailHelp" style={{fontSize: "18px", color:"#756969"}}>Aren't you new ? </small>
                    <Link to="/signin" className="btn" style={{ fontSize: "18px"}}>Sign in</Link>
                </section>

            </form>
        </>
    )
}