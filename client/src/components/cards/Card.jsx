import { React, useContext } from "react";
import { Link } from "react-router-dom";

//load the components
import { Modal } from "../../components/modals/Modal";
import { TaskForm } from "../../components/forms/TaskForm";

//import context
import { TaskContext } from "../../context/TaskContext";
import { ModalContext } from "../../context/ModalContext";

import "./Card.css";
import profile from "../../assets/profile-icon.png";

/**
 * Create a cardview with the task information
 * @param {*} task
 * @returns
 */
export const Card = ({ task }) => {
  const { openModal } = useContext(ModalContext);
  const { GetTask, selectedTask } = useContext(TaskContext);

  /* Date format dd/mm/yyyy */
  let Stardate = new Date(task.StartDate);
  let startDateMDY = `${Stardate.getDate()}/${Stardate.getMonth() + 1}/${Stardate.getFullYear()}`;

  /* Date format dd/mm/yyyy */
  let Duedate = new Date(task.DueDate);
  let dueDateMDY = `${Duedate.getDate()}/${Duedate.getMonth() + 1}/${Duedate.getFullYear()}`;

  /**
   * click evento in order to catch the selected task
   * @param {*} e
   */
  const SelectedTask = async(e) => {
    let _id = e.currentTarget.getAttribute("data-item");
    await GetTask(_id);

    
    openModal();
    
  };

  return (
    <>
      <Modal children={<TaskForm title={"Update the Task"} />} title=""/>
      <div className="card" data-item={task._id} onClick={SelectedTask}>
        <div className="card-body">
          <section className="card-left-side card-side">
            <img src={profile} alt="profile-apptasks" />
            <span className="">{task.AssignedTo.Username}</span>
          </section>

          <section className="card-right-side card-side">
            <div className="card-side-header">
              <span className="card-titled">{task.Title}</span>
              {/* <a href="#"><i className="fa fa fa-eye" aria-hidden="true"></i></a> */}
              <Link className="actions" onClick={SelectedTask}>
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
