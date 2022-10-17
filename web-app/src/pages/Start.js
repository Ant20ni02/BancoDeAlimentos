import React from 'react';
import LinkButton from '../components/LinkButton';
import styles from '../styles/Start.module.css';
import logo from '../images/recurso-4.png';

function Start() {
    return (
        <div className={styles.grid}>

            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>

            <div className={styles.start}>
                <LinkButton path="/inicio-de-sesion" text="Iniciar sesión" />
                <LinkButton path="/registro-de-cuenta" text="Registrarse" />
            </div>

        </div>
    );
}

export default Start;
