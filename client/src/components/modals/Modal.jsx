import { React, useContext, useEffect } from "react";

//import the modal context
import { ModalContext } from "../../context/ModalContext";

import "./Modal.css";

export const Modal = ({ children, title }) => {
  const { modalSection, modal, overlay, modalContent, closeModal, openModal } =
    useContext(ModalContext);

  return (
    <>
      <div className="modal-section" ref={modalSection}>
        <section className="modal hidden" ref={modal}>
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <span className="modal-close" onClick={closeModal}>
              ⨉
            </span>
          </div>
          <hr />
          <div className="modal-content" ref={modalContent}>
            {children}
          </div>
        </section>
        <div className="overlay hidden" ref={overlay}></div>
      </div>


      
    </>
  );
};
