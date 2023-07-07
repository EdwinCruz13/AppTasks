import {React} from "react";

import "./Navbar.css";
import profile from '../../assets/profile-icon.png'

export const Navbar = () => {
    return(
        <>
            <nav className="navbar bg-light">
                <a className="navbar-brand" href="#">Title here</a>
                

                <div className="navbar-user">
                    <ul className="navbar-menu">
                        <li>
                            <a className="navbar-user-profile" href="#">
                                <img src={profile} alt="profile-apptasks" />
                                <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="navbar-menu-item">
                                <li>
                                    <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Profile</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-cog" aria-hidden="true"></i> Settings</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-power-off" aria-hidden="true"></i> Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr />
        </>
        
    ) 
}