import { React } from "react";
import { Link } from "react-router-dom";


import "./Card.css";
import profile from "../../assets/profile-icon.png";

/**
 * Create a cardview with the task information
 * @param {*} task
 * @returns
 */
export const Card = ({ _id, Title, SubTitle, Description, Image, Label1, Label2, Label3 , action }) => {

  return (
    <>
      <div className="card" data-item={_id} onClick={action}>
        <div className="card-body">
          <section className="card-left-side card-side">
            <img src={profile} alt="profile-apptasks" />
            <span className="">{SubTitle}</span>
          </section>

          <section className="card-right-side card-side">
            <div className="card-side-header">
              <span className="card-titled">{Title}</span>
              <Link className="actions" onClick={action}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </Link>
            </div>
            <span className="card-description">{Description}</span>
            <div className="card-side-footer">
              <span style={{ color: "#0683D7" }}>{Label1}</span>
              <span style={{ color: "#CB6869" }}>{Label2}</span>
              <span>{Label3}</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
