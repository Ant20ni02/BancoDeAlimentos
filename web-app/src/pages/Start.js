import React from 'react';
import LinkButton from '../components/LinkButton';
import start from '../styles/Start.module.css';
import icon from '../images/icons/icon.png';

function Start() {
    return (
        <div className={start.grid}>

            <div className={start.logoContainer}>
                <img src={icon} alt="Icon" className={start.logo} />
            </div>

            <div className={start.start}>
                <LinkButton path="/inicio-de-sesion" text="Iniciar sesión" />
                <LinkButton path="/registro-de-cuenta" text="Registrarse" />
            </div>

        </div>
    );
}

export default Start;
