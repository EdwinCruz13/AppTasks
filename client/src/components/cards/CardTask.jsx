import { React } from "react";
import { Link } from "react-router-dom";


import "./Card.css";
import profile from "../../assets/profile-icon.png";

/**
 * Create a cardview with the task information
 * @param {*} task
 * @returns
 */
export const CardTask = ({ task, toSelectedTask }) => {
  /* Date format dd/mm/yyyy */
  let Stardate = new Date(task.StartDate);
  let startDateMDY = `${Stardate.getDate()}/${Stardate.getMonth() + 1}/${Stardate.getFullYear()}`;

  /* Date format dd/mm/yyyy */
  let Duedate = new Date(task.DueDate);
  let dueDateMDY = `${Duedate.getDate()}/${Duedate.getMonth() + 1}/${Duedate.getFullYear()}`;

  

  return (
    <>
      <div className="card" data-item={task._id} onClick={toSelectedTask}>
        <div className="card-body">
          <section className="card-left-side card-side">
            <img src={profile} alt="profile-apptasks" />
            <span className="">{task.AssignedTo.Username}</span>
          </section>

          <section className="card-right-side card-side">
            <div className="card-side-header">
              <span className="card-titled">{task.Title}</span>
              <Link className="actions" onClick={toSelectedTask}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </Link>
            </div>
            <span className="card-description">{task.Description}</span>
            <div className="card-side-footer">
              <span style={{ color: "#0683D7" }}>Start {startDateMDY}</span>
              <span style={{ color: "#CB6869" }}>End {dueDateMDY}</span>
              <span>{task.Completed} %</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
