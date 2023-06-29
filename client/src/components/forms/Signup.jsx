import { React } from "react";
import "./Loginup.css"

export const Signup = () => {
    return(
        <>
            <div className="form">
                <div className="form-header">
                    <h2 className="form-title">Create a new account</h2>
                    <span className="form-description">Manage your tasks properly and better</span>
                </div>

                <div className="form-group">
                    <label htmlFor="Username">Username</label>
                    <input type="text" name="Username" id="Username" className="form-control" />
                    <div class="invalid-feedback">El Campo es requerido </div>
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" id="Email" className="form-control" />
                    <div class="invalid-feedback">El Campo es requerido </div>
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="Password" className="form-control" />
                    <div className="group-tooltips">
                        <div class="invalid-feedback">El Campo es requerido </div>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary">Sign up</button>
                </div>

            </div>
        </>
    )
}