import { React } from "react";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";
import { TaskForm } from "../../components/forms/TaskForm";
import { Modal } from "../../components/modals/Modal";


export const NewTask = () => {
  return (
    <>
      <section className="container">
        <Aside />

        <div className="section-body">
          <Navbar />
          <div className="wrap-elemntary">
            <div className="wrap-child" style={{width: "100%"}}>
                <Modal children = { <TaskForm /> } title = "New Task" />
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};
