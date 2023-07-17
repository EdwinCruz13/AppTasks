import { React } from "react";
import { Link } from "react-router-dom";


import "./Card.css";
import profile from "../../assets/profile-icon.png";

/**
 * Create a cardview with the task information
 * @param {*} task
 * @returns
 */
export const CardType = ({ type, toSelectTyoe }) => { 
  return (
    <>
      <div className="card" data-item={type._id} onClick={toSelectTyoe}>
        <div className="card-body">
          <section className="card-left-side card-side">
            <img src={profile} alt="profile-apptasks" />
            <span className="">fd</span>
          </section>

          <section className="card-right-side card-side">
            <div className="card-side-header">
              <span className="card-titled">{type.nType}</span>
              <Link className="actions" onClick={toSelectTyoe}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </Link>
            </div>
            <span className="card-description">{type.nType}</span>

          </section>
        </div>
      </div>
    </>
  );
};
