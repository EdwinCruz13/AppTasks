import { React,useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";
import { Loading } from "../../components/loading/Loading";
import { Modal } from "../../components/modals/Modal";
import { Card } from "../../components/cards/Card";


//import context
import { StateContext } from "../../context/StateContext";
import { ModalContext } from "../../context/ModalContext";

export const States = () => {
  const { states, selectedState, loading, GetStates, GetState, setNew } = useContext(StateContext);
  const [title, setTitle] = useState("New State");
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    GetStates();
  }, []);



  /**
   * open a new form in order to save a new type
   */
  const handleSaveClick = () => {
    setNew();
    setTitle("Create a new State");
    openModal();
  };


  const toSelectState = async(e) => {
    let _id = e.currentTarget.getAttribute("data-item");
    await GetState(_id);
    setTitle("Update the State");
    openModal();
  };

  return (
    <>
    <Modal children={"This state cannot be changed"} title={title} />
      <section className="container">
        <Aside />

        <div className="section-body">
          <Navbar />

          <div className="wrap-elemntary">
          <div
              className="filter-option-header"
              style={{ justifyContent: "flex-end", marginTop: "2.1rem" }}
            >
              <section className="options-row">
                <div className="group-filter-item">
                  <div>
                    <label
                      htmlFor="FF"
                      className="col-form-label"
                      style={{ padding: "1.14rem" }}
                    ></label>
                    <Link className="actions" onClick={handleSaveClick}>
                      <i className="fa fa-floppy-o" aria-hidden="true"></i> New
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <div className="wrap-child" style={{ width: "100%" }}>
              {!loading ? (
                states &&
                states.length > 0 && (
                  <div className="wrap-child" style={{ width: "100%" }}>
                    {states.map((item) => {
                      return (
                        <Card
                          key={item._id}
                          _id={item._id}
                          Title={""}
                          SubTitle={""}
                          Description={item.nState}
                          Image={""}
                          Label1={""}
                          Label2={""}
                          Label3={""}
                          action={toSelectState}
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
        </div>
      </section>
    </>
  );
};
