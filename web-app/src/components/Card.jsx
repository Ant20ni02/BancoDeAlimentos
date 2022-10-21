import React from "react";
import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ icon, title/* , description */ }) => {
    return (
        <div className="Card">

            <header className="Card__header">
                <FontAwesomeIcon icon={icon} className="Card__header-icon" />
            </header>

            <hr/>

            {/* <div className="card-body">
                <p>{description}</p>
            </div> */}

            <footer className="Card__footer">
                <h3 className="Card__footer-heading">{title}</h3>
            </footer>
        </div>
    );
}

export default Card;
