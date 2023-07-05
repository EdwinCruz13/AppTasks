import { React } from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/vite.svg';
import "./Aside.css";

export const Aside = () => {
    return (
        <>
           <aside className="aside">
                <header>
                    <img className="aside-logo" src={logo} alt="apptasks-logo" />
                    <h1 className="aside-label">AppTasks</h1>
                </header>
                <ul className="aside-list">
                    <li>
                        <Link to="/">
                            <i className="fa fa-home fa-aside"></i>
                            <span className="nav-text">
                                Dashboard
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <i className="fa fa-tasks fa-aside"></i>
                            <span className="nav-text">
                                Tasks
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <i className="fa fa-tags fa-aside"></i>
                            <span className="nav-text">
                                Task Types
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <i className="fa fa-tint fa-aside"></i>
                            <span className="nav-text">
                               States
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <i className="fa fa-users fa-aside"></i>
                            <span className="nav-text">
                               Users
                            </span>
                        </Link>
                    </li>
                </ul>
           </aside>
        </>
    )
}