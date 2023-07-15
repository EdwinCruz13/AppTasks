import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//import context
import { TaskContext } from "../../context/TaskContext";
import { ModalContext } from "../../context/ModalContext";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";
import { Card } from "../../components/cards/Card";
import { Loading } from "../../components/loading/Loading";
import { TaskForm } from "../../components/forms/TaskForm";
import { Modal } from "../../components/modals/Modal";

import "./Tasks.css";

export const Tasks = () => {
  const { tasks, loading, GetTasks, GetTask, setNew } = useContext(TaskContext);
  const { openModal, titleModal, updateTitle } = useContext(ModalContext);

  /**
   * When the page is selected,
   * it start to find any request
   */
  useEffect(() => {
    GetTasks();
  }, []);


  
  const handleSaveClick = ()=>{
    setNew();
    updateTitle("Create a new task");
    openModal();
  }


  
  

  return (
    <>
      
      <Modal children={<TaskForm title={"titleModal"} />} title={"titleModal"}/>
      <section className="container">
        <Aside />

        <div className="section-body">
          <Navbar />

          <div className="wrap-elemntary">
            
            <div className="filter-option-header ">
              <section className="filter-date-row">
                <div className="group-filter-item">
                  <label htmlFor="FI" className="col-form-label">
                    Fecha Inicial
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    name="FI"
                    id="FI"
                  />
                </div>

                <div className="group-filter-item">
                  <label htmlFor="FF" className="col-form-label">
                    Fecha Fin
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    name="FF"
                    id="FF"
                  />
                </div>

                <div className="group-filter-item ">
                  <label
                    htmlFor="btn"
                    className="col-form-label"
                    style={{ padding: "1.14rem" }}
                  ></label>
                  <button className="btn btn-primary">Buscar</button>
                </div>
              </section>

              <section className="options-row">
                <div className="group-filter-item">
                  <div>
                    <label
                      htmlFor="FF"
                      className="col-form-label"
                      style={{ padding: "1.14rem" }}
                    ></label>
                    <Link className="actions" onClick={handleSaveClick}>
                      <i className="fa fa-floppy-o" aria-hidden="true"></i>{" "}
                      Nuevo
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            {!loading ? (
              tasks &&
              tasks.length > 0 && (
                <div className="wrap-child" style={{width:"100%"}}>
                  
                  {tasks.map((item) => {
                    return (
                      <Card
                        key={item._id}
                        task={item}
                        
                      />
                    );
                  })}
                </div>
              )
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
