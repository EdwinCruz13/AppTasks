import { React, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

//import context
import { TaskContext } from "../../context/TaskContext";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";
import { Cardboard } from "../../components/cards/Cardboard";

import "./Dashboard.css";

export const Dashboard = () => {
  const { tasks, loading } = useContext(TaskContext);
  const [onGoing, setOngoing] = useState(null);
  const [notStarted, setNotStarted] = useState(null);
  const [completed, setCompleted] = useState(null);
  const [cancelled, setCancelled] = useState(null);

  useEffect(() => {
    //set the on going task list
    if (!loading && tasks.length > 0) {
      if (tasks) {
        let _onGoing = tasks.filter((item) => {
          return item.CurrentState.StateID === 1;
        });
        setOngoing(_onGoing);

        let _noStarted = tasks.filter((item) => {
          return item.CurrentState.StateID === -1;
        });
        setNotStarted(_noStarted);

        let _completed = tasks.filter((item) => {
          return item.CurrentState.StateID === 2;
        });
        setCompleted(_completed);


        let _cancelled = tasks.filter((item) => {
          return item.CurrentState.StateID === 0;
        });
        setCancelled(_cancelled);
      }
    }
  }, [tasks]);

  return (
    <>
      <section className="container">
        <Aside />

        <div className="section-body">
          <Navbar />

          <div className="wrap-elemntary">
            <section className="dashboard-pane">

            <div className="dashboard-table">
                <h2>Cancelled</h2>
                {cancelled ? (
                  cancelled.map((item) => {
                    return <Cardboard key={item._id} Title = {item.Title} Description = {item.Description} Completed = {item.Completed} user = {item.AssignedTo.Fullname} style="background-cancelled" />;
                  })
                ) : (
                  <b>no tasks here</b>
                )}
              </div>


              <div className="dashboard-table">
                <h2>Not Started</h2>
                {notStarted ? (
                  notStarted.map((item) => {
                    return <Cardboard key={item._id} Title = {item.Title} Description = {item.Description} Completed = {item.Completed} user = {item.AssignedTo.Fullname} style="background-notStarted"/>;
                  })
                ) : (
                  <b>no tasks</b>
                )}
              </div>

              <div className="dashboard-table">
                <h2>On going</h2>
                {onGoing ? (
                  onGoing.map((item) => {
                    return <Cardboard key={item._id} Title = {item.Title} Description = {item.Description} Completed = {item.Completed} user = {item.AssignedTo.Fullname} style="background-ongoing"/>;
                  })
                ) : (
                  <b>no tasks</b>
                )}
              </div>

              <div className="dashboard-table">
                <h2>Completed</h2>
                {completed ? (
                  completed.map((item) => {
                    return <Cardboard key={item._id} Title = {item.Title} Description = {item.Description} Completed = {item.Completed} user = {item.AssignedTo.Fullname} style="background-completed"/>;
                  })
                ) : (
                  <b>no tasks</b>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
