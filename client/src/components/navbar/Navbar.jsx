import {React} from "react";

import "./Navbar.css"

export const Navbar = () => {
    return(
        <nav className="navbar bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <i className="fa fa-align-justify" aria-hidden="true"></i>
                </span>
            </button>
        </nav>
    ) 
}