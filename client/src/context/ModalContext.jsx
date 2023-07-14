import { React, createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {

    //functionalities
    const [modalSection, setModalSection] = useState(null);
    const [modal, setModal] = useState(null);
    const [overlay, setOverlay] = useState(null);
    const [modalOpen, setModalOpen] = useState(null);
    const [modalClose, setModalClose] = useState(null);

    /**
     * Open the modal
     */
    const openModal =()=>{
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        modalSection.style.zIndex = 1000;

    }

    /**
     * Close the modal
     */
    const closeModal =()=>{
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
        modalSection.style.zIndex = -1;
    }

  return (
        <ModalContext.Provider value={{setModalSection, setModal, setOverlay, setModalOpen, setModalClose, openModal, closeModal}}>
            { children }
        </ModalContext.Provider>
    )
};
