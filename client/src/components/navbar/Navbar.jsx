import { React, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

import "./Navbar.css";
import profile from "../../assets/profile-icon.png";

export const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <nav className="navbar bg-light">
        <a className="navbar-brand" href="#">
        { window.location.pathname.toUpperCase().replace("/", "")}
        </a>

        <div className="navbar-user">
          <ul className="navbar-menu">
            <li>
              <a className="navbar-user-profile" href="#">
                {user.Username}
                <img src={profile} alt="profile-apptasks" />
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="navbar-menu-item">
                <li>
                  <Link to="/profile" className="btn btn-lg btn-warning">
                    <i className="fa fa-user" aria-hidden="true"></i> Profile
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cog" aria-hidden="true"></i> Settings
                  </a>
                </li>
                <li>
                  <Link to="/logout" className="btn btn-lg btn-warning">
                    <i className="fa fa-power-off" aria-hidden="true"></i>{" "}
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
