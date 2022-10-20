import React from "react";
import ReactDOM from "react-dom";
import '../styles/PortalModal.css';
import icon from '../images/icons/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const PortalModal = ({ onShow, label="Aviso", img={icon}, title, children, onClose }) => {
    if (!onShow ) return null;
    return ReactDOM.createPortal (
        <>
            <div className="modal-overlay" onClick={onClose}>
            </div>
            <div className="Portal-modal">
                <div className="Portal-modal-header">
                    <div className="Portal-modal-header-txt-btn">
                        <span>{label}</span>
                        <button className="Portal-modal-close" onClick={onClose}><FontAwesomeIcon icon={faXmark} className="close-icon"/></button>
                    </div>
                    <img src={icon} alt="Icon"/>
                    <div className="Portal-modal-header-title">
                        <h1>{title}</h1>
                    </div>
                </div>

                <div className="Portal-modal-body">
                    {children}
                </div>
            </div>

        </>,
        document.getElementById('portal')
    )
}

export default PortalModal;
