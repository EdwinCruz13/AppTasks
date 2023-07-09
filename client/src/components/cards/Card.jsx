import { React } from "react";

import "./Card.css";
import profile from '../../assets/profile-icon.png'

/**
 * Create a cardview with the task information
 * @param {*} task 
 * @returns 
 */
export const Card = (element) => {

    /* Date format dd/mm/yyyy */
    let Stardate = new Date(element.task.StartDate);
    let startDateMDY = `${Stardate.getDate()}/${Stardate.getMonth() + 1}/${Stardate.getFullYear()}`;

    /* Date format dd/mm/yyyy */
    let Duedate = new Date(element.task.DueDate);
    let dueDateMDY = `${Duedate.getDate()}/${Duedate.getMonth() + 1}/${Duedate.getFullYear()}`;

    return(
        <>
            <div className="card">
                <div className="card-body">
                    <section className="card-left-side card-side">
                        <img src={profile} alt="profile-apptasks" />
                        <span className="">{element.task.AssignedTo.Username}</span>
                    </section>

                    <section className="card-right-side card-side">
                        <div className="card-side-header">
                            <span className="card-titled">{element.task.Title}</span>
                            <a href="#"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                        </div>
                        <span className="card-description">{element.task.Description}</span>
                        <div className="card-side-footer">
                            <span style={{color: "#0683D7"}}>Start {startDateMDY}</span>
                            <span style={{color: "#CB6869"}}>End {dueDateMDY}</span>
                            <span>{element.task.Completed} %</span>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}