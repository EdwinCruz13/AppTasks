import { React, createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {

    //functionalities
    const [modalSection, setModalSection] = useState(null);
    const [modal, setModal] = useState(null);
    const [overlay, setOverlay] = useState(null);
    const [modalOpen, setModalOpen] = useState(null);
    const [modalClose, setModalClose] = useState(null);
    const [titleModal, setTitleModal] = useState(null);

   

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

    const updateTitle =(message)=>{
        if(!titleModal)
            titleModal.innerHTML = message;

        
    }

  return (
        <ModalContext.Provider value={{titleModal, setModalSection, setModal, setOverlay, setModalOpen, setModalClose, openModal, closeModal, setTitleModal, updateTitle}}>
            { children }
        </ModalContext.Provider>
    )
};
