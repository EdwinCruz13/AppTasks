import { React } from "react";

import "./Card.css";
import profile from '../../assets/profile-icon.png'

/**
 * Create a cardview with the task information
 * @param {*} task 
 * @returns 
 */
export const Card = (task) => {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <section className="card-left-side card-side">
                        <img src={profile} alt="profile-apptasks" />
                        <span className="">MyName</span>
                    </section>

                    <section className="card-right-side card-side">
                        <div className="card-side-header">
                            <span className="card-titled">Titled</span>
                            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                        </div>
                        <span className="card-description">Description task lorem isump dolor sit amet, consectetur adipsioning elit, sed do.</span>
                        <div className="card-side-footer">
                            <span style={{color: "#0683D7"}}>start date</span>
                            <span style={{color: "#CB6869"}}>due date</span>
                            <span>progress</span>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}