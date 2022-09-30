import React, { useRef } from "react";

const DialogModal = ({ title, message }) => {
    /* const showModalBtn = useRef(); */
    const dialogModal = useRef();
    /* const closeModalBtn = useRef(); */

    /* showModalBtn.addEventListener("click", () => {
        dialogModal.showModal();
    });

    dialogModal.addEventListener("click", () => {
        dialogModal.close();
    });

    closeModalBtn.addEventListener("click", () => {
        dialogModal.close();
    }); */

    function showModalFunc(){
        dialogModal.showModal();
    }

    function closeModalFunc(){
        dialogModal.close();
    }

    return (
        <>
            <button /* ref={showModalBtn} */ onClick={showModalFunc}>Show Modal</button>
            <dialog ref={dialogModal} onClick={closeModalFunc}>
                <header>
                    <h1>{title}</h1>
                </header>
                <p>{message}</p>
                <footer>
                    <button /* ref={closeModalBtn} */ onClick={closeModalFunc}>Close</button>
                </footer>
            </dialog>
        </>
    );
}

export default DialogModal;
