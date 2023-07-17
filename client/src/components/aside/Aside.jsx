import { React, useEffect, useRef, useState } from "react";
import { NavLink  } from "react-router-dom";

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
                        <NavLink to="/dashboard" id="dashboard">
                            <i className="fa fa-tachometer fa-aside"></i>
                            <span className="nav-text">
                                Dashboard
                            </span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/tasks" id="tasks" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            <i className="fa fa-tasks fa-aside"></i>
                            <span className="nav-text">
                                Tasks
                            </span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/tasktypes" id="tasktypes" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            <i className="fa fa-tags fa-aside"></i>
                            <span className="nav-text">
                                Task Types
                            </span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/states" id="states" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            <i className="fa fa-tint fa-aside"></i>
                            <span className="nav-text">
                               States
                            </span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/users" id="users" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            <i className="fa fa-users fa-aside"></i>
                            <span className="nav-text">
                               Users
                            </span>
                        </NavLink>
                    </li>
                </ul>
           </aside>
        </>
    )
}