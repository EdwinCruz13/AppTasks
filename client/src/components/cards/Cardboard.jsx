import { React, useRef, useEffect, useContext, useState } from "react";



import "./Card.css";
import "./Cardboard.css";

import profileIcon from "../../assets/profile-icon.png";
import commentsIcon from "../../assets/comments-icon.png";
import attachmentsIcon from "../../assets/attachments-icon.png";

export const Cardboard = ({ Title, Description, Completed, user, style }) => {


  const rangeInput = useRef(null);
  const rangeValue = useRef(0);

  return (
   <>
     <div className={`card ${style}`}>
      <div className="card-bodyDashboard">
        <h3 style={{ color: "#5F22D9" }}>{Title}</h3>
        <p>
          {Description}
        </p>

        <div className="form-group">
          <label id="porcentage" htmlFor="Completed">
            Completed{" "}
            <span id="CompletedValue" ref={rangeValue}>
              {Completed} %
            </span>
          </label>
          <input
            type="range"
            id="Completed"
            min="0"
            max="100"
            step="1"
            value= {Completed}
            readOnly={true}
            ref={rangeInput}
          />
        </div>

        <div className="dashboard-user">
          <div className="dashboard-profile">
            <img src={profileIcon} alt="dashboard" />
            <span>{user}</span>
          </div>
          <div className="dashboard-icon">
            <img src={commentsIcon} alt="icon1" />
            <img src={attachmentsIcon} alt="icon1" />
          </div>
        </div>
      </div>
    </div>
   </>
  );
};
