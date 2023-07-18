import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";
import { Loading } from "../../components/loading/Loading";
import { Modal } from "../../components/modals/Modal";
import { TypeForm } from "../../components/forms/TypeForm";

//import components
import { Card } from "../../components/cards/Card";

//import context
import { TaskTypeContext } from "../../context/TaskTypeContext";
import { ModalContext } from "../../context/ModalContext";

export const TaskTypes = () => {
  const { types, selectedType, loading, GetTypes, GetType, setNew } = useContext(TaskTypeContext);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    GetTypes();
  }, []);

  /**
   * open a new form in order to save a new type
   */
  const handleSaveClick = () => {
    setNew();
    openModal();
  };
  /**
   * event click in order to catch the selected type
   */
  const toSelectType = async(e) => {
    let _id = e.currentTarget.getAttribute("data-item");
    await GetType(_id)
    openModal();


  };
  return (
    <>
      <Modal children={<TypeForm title = {"new Type"} />} title={"new modal"} />
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
                types &&
                types.length > 0 && (
                  <div className="wrap-child" style={{ width: "100%" }}>
                    {types.map((item) => {
                      return (
                        <Card
                          key={item._id}
                          _id={item._id}
                          Title={item.nType}
                          SubTitle={item.nType}
                          Description={item.nType}
                          Image={"item.Title"}
                          Label1={"item.Title"}
                          Label2={"item.Title"}
                          Label3={"item.Title"}
                          action={toSelectType}
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
