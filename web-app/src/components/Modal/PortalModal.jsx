import React from "react";
/* import ReactDOM from "react-dom"; */
import '../../styles/Modal/PortalModal.css';
import logo from '../../images/recurso-4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const PortalModal = ({ onShow, label="Aviso", img={logo}, title, children, onClose }) => {
    if (!onShow ) return null;
    return /* ReactDOM.createPortal */ (
        <>
            <div className="modal-overlay" onClick={onClose}>
            </div>
            <div className="Portal-modal">
                <div className="Portal-modal-header">
                    <div className="Portal-modal-header-txt-btn">
                        <span>{label}</span>
                        <button className="Portal-modal-close" onClick={onClose}><FontAwesomeIcon icon={faXmark} className="icon"/></button>
                    </div>
                    <img src={logo} alt="logo"/>
                    <div className="Portal-modal-header-title">
                        <h1>{title}</h1>
                    </div>
                </div>

                <div className="Portal-modal-body">
                    {children}
                </div>
            </div>

        </>/* ,
        document.getElementById('portal') */
    )
}

export default PortalModal;
