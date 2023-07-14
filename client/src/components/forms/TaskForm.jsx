import { React, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import user context
import { UserContext } from "../../context/UserContext";
import { TaskContext } from "../../context/TaskContext";

import "./TaskForm.css";

/**
 * a componente that
 * create a form for task
 * @returns
 */
export const TaskForm = ({ title }) => {
  const navigate = useNavigate();
  const { user, users } = useContext(UserContext);

  const { states, types, loading, selectedTask, SaveTask } = useContext(TaskContext);

  //create a usestate to handle the input from form
  const [data, setData] = useState({
    Title: "",
    Description: "",
    StartDate: "",
    DueDate: "",
    Notes: "",
    Completed: 50,
    AssignedTo: { Id: "" },
    AssignedBy: { Id: user.id },
    Type: { Id: "" },
    CurrentState: { Id: "" }
  });

  /**
   * the useEffect allows the data is loaded, according if the task will be new or updated
   */
  // useEffect(() => {
  //   //if it is false, the task is new
  //   if (selectedTask) {
  //     setData({
  //       Title: selectedTask.Title,
  //       Description: selectedTask.Description,
  //       StartDate: selectedTask.StartDate,
  //       DueDate: selectedTask.DueDate,
  //       Notes: selectedTask.Notes,
  //       Completed: selectedTask.Completed,
  //       AssignedTo: { Id: selectedTask.AssignedTo.Id },
  //       AssignedBy: { Id: user.id },
  //       Type: { Id: selectedTask.Type.Id },
  //       CurrentState: { Id: selectedTask.CurrentState.Id }
  //     });

  //     let spanValue = document.getElementById("CompletedValue");
  //     spanValue.innerHTML = selectedTask.Completed + " %";
  //   }

  //   //if it is true, the task will be updated
  //   if (!selectedTask) {
  //     setData({
  //       Title: "",
  //       Description: "",
  //       StartDate: "",
  //       DueDate: "",
  //       Notes: "",
  //       Completed: 50,
  //       AssignedTo: { Id: "" },
  //       AssignedBy: { Id: user.id },
  //       Type: { Id: "" },
  //       CurrentState: { Id: "" }
  //     });

  //     let spanValue = document.getElementById("CompletedValue");
  //     spanValue.innerHTML = "50 %";
  //   }


  //   let spanValue = document.getElementById("CompletedValue");
  //   spanValue.innerHTML = selectedTask.Completed + " %";
  // }, []);


  useEffect(() => {
    //if it is false, the task is new
    if (selectedTask) {
      setData({
        Title: selectedTask.Title,
        Description: selectedTask.Description,
        StartDate: selectedTask.StartDate,
        DueDate: selectedTask.DueDate,
        Notes: selectedTask.Notes,
        Completed: selectedTask.Completed,
        AssignedTo: { Id: selectedTask.AssignedTo.Id },
        AssignedBy: { Id: user.id },
        Type: { Id: selectedTask.Type.Id },
        CurrentState: { Id: selectedTask.CurrentState.Id }
      });

      let spanValue = document.getElementById("CompletedValue");
      spanValue.innerHTML = selectedTask.Completed + " %";
    }

    //if it is true, the task will be updated
    if (!selectedTask) {
      setData({
        Title: "",
        Description: "",
        StartDate: "",
        DueDate: "",
        Notes: "",
        Completed: 50,
        AssignedTo: { Id: "" },
        AssignedBy: { Id: user.id },
        Type: { Id: "" },
        CurrentState: { Id: "" }
      });

      let spanValue = document.getElementById("CompletedValue");
      spanValue.innerHTML = "50 %";
    }


    
  }, [selectedTask]);

  /**
   * event change in order to get any changes by the input form
   */
  const handleInputChanged = (e) => {
    //create a object in this properties
    if (
      e.target.name === "AssignedTo" ||
      e.target.name === "Type" ||
      e.target.name === "CurrentState"
    )
      setData({ ...data, [e.target.name]: { Id: e.target.value } });
    else setData({ ...data, [e.target.name]: e.target.value });

    /**event change value for the slider */
    if (e.target.name === "Completed") {
      let spanValue = document.getElementById("CompletedValue");
      spanValue.innerHTML = e.target.value + " %";
    }
  };

  /**
   *event to save the task
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    //save the task
    let save = await SaveTask(data);
    if (save === "OK") refreshPage();
    else alert(save);
  };

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <form className="form form-task" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2 className="form-title">{title}</h2>

        <span className="form-description">
          And manage your tasks properly and better
        </span>
      </div>

      <div className="form-section">
        <section className="form-column">
          <div className="form-group">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              name="Title"
              id="Title"
              className="form-control"
              onChange={handleInputChanged}
              value={data.Title}
            />
            <div className="invalid-feedback">value is required</div>
          </div>

          <div className="form-group form-inline">
            <div className="form-inline-input">
              <label htmlFor="StartDate">Start Date</label>
              <input
                type="date"
                name="StartDate"
                id="StartDate"
                className="form-control"
                onChange={handleInputChanged}
                value={data.StartDate}
              />
              <div className="invalid-feedback">value is required</div>
            </div>

            <div className="form-inline-input">
              <label htmlFor="DueDate">Start Date</label>
              <input
                type="date"
                name="DueDate"
                id="DueDate"
                className="form-control"
                onChange={handleInputChanged}
                value={data.DueDate}
              />
              <div className="invalid-feedback">value is required</div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="Type">Task Type</label>
            <select
              name="Type"
              id="Type"
              className="form-control"
              onChange={handleInputChanged}
              value={data.Type.Id}
            >
              {types && !loading ? (
                types.length > 0 &&
                types.map((type) => {
                  return (
                    <option key={type._id} value={type._id}>
                      {type.nType}
                    </option>
                  );
                })
              ) : (
                <option>No data...</option>
              )}
            </select>
            <div className="invalid-feedback">value is required</div>
          </div>

          <div className="form-group">
            <label htmlFor="CurrentState">Current State</label>
            <select
              name="CurrentState"
              id="CurrentState"
              className="form-control"
              onChange={handleInputChanged}
              value={data.CurrentState.Id}
            >
              {states && !loading ? (
                states.length > 0 &&
                states.map((state) => {
                  return (
                    <option key={state._id} value={state._id}>
                      {state.nState}
                    </option>
                  );
                })
              ) : (
                <option>No data...</option>
              )}
            </select>
            <div className="invalid-feedback">value is required</div>
          </div>

          {/* Completed slider */}
          <div className="form-group">
            <label id="porcentage" htmlFor="Completed">
              Completed <span id="CompletedValue">value</span>
            </label>
            <input
              type="range"
              name="Completed"
              id="Completed"
              className="form-control"
              onChange={handleInputChanged}
              min="0"
              max="100"
              step="1"
              value={data.Completed}
            />
            <div className="invalid-feedback">value is required</div>
          </div>
        </section>

        <section className="form-column">
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              type="text"
              name="Description"
              id="Description"
              className="form-control"
              onChange={handleInputChanged}
              value={data.Description}
            />
            <div className="invalid-feedback">value is required</div>
          </div>

          <div className="form-group">
            <label htmlFor="Notes">Notes</label>
            <textarea
              type="text"
              name="Notes"
              id="Notes"
              className="form-control"
              onChange={handleInputChanged}
              value={data.Notes}
            />
            <div className="invalid-feedback">value is required</div>
          </div>

          <div className="form-group">
            <label htmlFor="AssignedTo">Assigned To</label>
            <select
              name="AssignedTo"
              id="AssignedTo"
              className="form-control"
              onChange={handleInputChanged}
              value={data.AssignedTo.Id}
            >
              {users && !loading ? (
                users.length > 0 &&
                users.map((user) => {
                  return (
                    <option key={user._id} value={user._id}>
                      {user.Username}
                    </option>
                  );
                })
              ) : (
                <option>No data...</option>
              )}
            </select>
            <div className="invalid-feedback">value is required</div>
          </div>
        </section>
      </div>

      <hr />
      <div className="form-section form-submit-section">
        <button type="submit" className="btn btn-lg btn-primary">
          Close
        </button>
        <button type="submit" className="btn btn-lg btn-primary">
          Save
        </button>
      </div>

      <section className="form-group-message-signup">
        <small id="emailHelp" style={{ fontSize: "18px", color: "#756969" }}>
          you wanna see the full list?{" "}
        </small>
        <Link to="/tasks" className="btn" style={{ fontSize: "18px" }}>
          Tasks list
        </Link>
      </section>
    </form>
  );
};
