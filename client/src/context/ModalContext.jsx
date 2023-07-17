import { React, createContext, useRef, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {

    //functionalities
    const modalSection = useRef(null);
    const modal = useRef(null)
    const overlay = useRef(null)
    const modalOpen = useRef(null)
    const modalClose = useRef(null)
    const titleModal = useRef(null)
    const modalContent = useRef(null)

    // const [modalSection, setModalSection] = useState(null);
    // const [modal, setModal] = useState(null);
    // const [overlay, setOverlay] = useState(null);
    // const [modalOpen, setModalOpen] = useState(null);
    // const [modalClose, setModalClose] = useState(null);
    // const [titleModal, setTitleModal] = useState(null);
    // const [modalContent, setModalContent] = useState(null);

   

    /**
     * Open the modal
     */
    const openModal =()=>{
        modal.current.classList.remove("hidden");
        overlay.current.classList.remove("hidden");
        modalSection.current.style.zIndex = 1000;
        modalContent.current.scrollTo(0, 0);
    }

    /**
     * Close the modal
     */
    const closeModal =()=>{
        modal.current.classList.add("hidden");
        overlay.current.classList.add("hidden");
        modalSection.current.style.zIndex = -1;
    }

  return (
        <ModalContext.Provider value={{titleModal, modalSection, modal, overlay, modalOpen, modalClose, modalContent, openModal, closeModal, }}>
            { children }
        </ModalContext.Provider>
    )
};
