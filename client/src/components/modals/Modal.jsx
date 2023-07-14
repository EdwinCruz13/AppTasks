import { React, useContext, useEffect } from "react";

//import the modal context
import { ModalContext } from "../../context/ModalContext";

import "./Modal.css";

export const Modal = ({ children, title }) => {
  const {
    setModalSection,
    setModal,
    setOverlay,
    setModalOpen,
    setModalClose,
    openModal,
    closeModal
  } = useContext(ModalContext);

  //load the value from dom
  useEffect(() => {
    setModalSection(document.querySelector(".modal-section"));
    setModal(document.querySelector(".modal"));
    setModal(document.querySelector(".modal"));
    setOverlay(document.querySelector(".overlay"));
    setModalOpen(document.querySelector(".modal-open"));
    setModalClose(document.querySelector(".modal-close"));
  }, []);

  return (
    <>
      <div className="modal-section">
        <section className="modal hidden">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <span className="modal-close" onClick={closeModal}>
            ⨉
          </span>
        </div>
        <hr />
        <div className="modal-content">{children}</div>

        {/* <div className="modal-footer">
                    <button className="btn btn-primary" onClick={closeModal}>Cerrar</button>
                </div> */}
      </section>
      <div className="overlay hidden"></div>

      {/* <button className="btn modal-open" onClick={openModal}>Open</button> */}
      </div>
      
    </>
  );
};
