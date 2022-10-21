import PortalModal from '../components/PortalModal';
import React, { useRef, useId, useState } from 'react';
import icon from '../images/icons/icon.png';
import login from '../styles/LogIn.module.css';
import url from '../config/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import useTabTitle from '../custom-hooks/useTabTitle';

function LogIn() {
    useTabTitle("BAMX - Inicio de sesión")
    const form = useRef();
    const id = useId();
    const navigate = useNavigate();

    const [showModalLoginSuccess, setShowModalLoginSuccess] = useState(false);
    const [showModalLoginError, setShowModalLoginError] = useState(false);
    const [passwordEmptyError, setPasswordEmptyError] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = JSON.stringify({ email: form.current.email.value, password_: form.current.password.value });
        
        
        const response = await fetch(url+'login',{ method: 'POST',headers: {
            'Content-Type': 'application/json',
          }, body: formData});
        const data = await response.json();
        if(data.mensaje !== 'Usuario o contraseña inválidos'){
            localStorage.setItem('token', data.token);
            localStorage.setItem('idUser', data.idUser);
            console.log(data.token);
            console.log(data.idUser);
            setShowModalLoginSuccess(true);
            navigate('/bamx/pagina-principal', { replace: true });
        } else {
            setShowModalLoginError(true);
        }
    }

    const handlePassword = (e) => {
        e.preventDefault();
        const password = form.current.password.value;

        if(password === '') {
            setPasswordEmptyError(true);
        } else {
            setPasswordEmptyError(false);
        }
    }
    
    return (
        <>
            <div className={login.grid}>
                <header className={login.formHeader}>
                    <h1>Inicia sesión</h1>
                </header>
                <div className={login.iconContainer}>
                    <Link to="/"><img className={login.iconLogin} src={icon} alt="Icon"/></Link>
                </div>
                <form className={login.form} ref={form} onSubmit={handleSubmit}>
                    <fieldset className={login.formGroup} id={`${id}-formGroupEmail`}>
                        <label className={login.formLabel} htmlFor={`${id}-email`}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </label>
                        <div className={login.formInputLogin}>
                            <input type="email" className={login.inputLogin} id={`${id}-email`} name="email" placeholder="Correo electrónico" title='Ingrese su correo electrónico institucional.' onInvalid={e => e.target.setCustomValidity('Por favor, ingrese aquí su correo electrónico institucional.')} autoComplete autoFocus required/>
                            <FontAwesomeIcon className={login.formValidationStatusSuccess} icon={faCircleCheck} />
                            <FontAwesomeIcon className={login.formValidationStatusError} icon={faTimesCircle} />
                        </div>
                        <span className={login.formInputError}>Debe ingresar su correo electrónico institucional con el que se registro.</span>
                    </fieldset>

                    <fieldset className={login.formGroup} id={`${id}-formGroupPassword`}>
                        <label className={login.formLabel} htmlFor={`${id}-password`}>
                            <FontAwesomeIcon icon={faLock} />
                        </label>
                        <div className={login.formInputLogin}>
                            <input type="password" className={login.inputLogin} id={`${id}-password`} name="password" placeholder="Contraseña" title='Ingrese su contraseña.' onInvalid={e => e.target.setCustomValidity('Por favor, ingrese aquí su contraseña.')} onPaste={(e) => {e.preventDefault(); return false;}} onCopy={(e) => {e.preventDefault(); return false;}} onBlur={handlePassword} onSelectStart={(e) => {e.preventDefault(); return false;}} autoComplete required/>
                        </div>
                        {
                            passwordEmptyError &&
                            <span className={login.passwordEmptyError}>Debe ingresar su contraseña con la que se registro.</span>
                        }
                    </fieldset>

                    <span className={login.newAccount}>¿No tienes cuenta?, regístrate <br/> <Link to="/registro-de-cuenta">aquí &gt;</Link>.</span>

                    <footer className={login.formFooterLogin}>
                        <button className={login.formBtnSubmitLogin} type="submit">Continuar</button>
                    </footer>  
                </form>
            </div>

            <PortalModal onShow={showModalLoginSuccess} onClose={() => setShowModalLoginSuccess(false)} title="¡Inicio de sesión exitoso!" > 
                <p><b>¡Felicidades!</b>, ya puedes comenzar a usar el <b>nuevo sistema</b> del banco de alimentos.</p>
            </PortalModal>

            <PortalModal onShow={showModalLoginError} label="Error" onClose={() => setShowModalLoginError(false)} title="¡Error al iniciar sesión!" >
                <p>El <b>correo electrónico</b> o la <b>contraseña</b> proporcionada son <u>incorrectos</u>.</p>
            </PortalModal>
        </>
    );
}

export default LogIn;
