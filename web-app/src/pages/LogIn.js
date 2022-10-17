import React, { useRef, useId, useState } from 'react';
import '../styles/LogIn.css';
import url from '../config/API';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/recurso-4.png';
import PortalModal from '../components/PortalModal';

function LogIn() {
    const form = useRef();
    const id = useId();
    const navigate = useNavigate();

    const [showModalLoginSuccess, setShowModalLoginSuccess] = useState(false);
    const [showModalLoginError, setShowModalLoginError] = useState(false);
    
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
    return (
        <>
            <div className="grid">
                <div className="logo-container">
                    <Link to="/"><img className="logo-login" src={logo} alt="Logo"/></Link>
                </div>
                <header className="form-header-login">
                    <h1>Inicia sesión</h1>
                </header>
                <form className="form-login" ref={form} onSubmit={handleSubmit}>
                    {/* <label className="form-label">
                            Inicia sesión
                    </label> */}
                    <fieldset className="form-group" id={`${id}-formGroupEmail`}>
                        <label className="form-label" htmlFor={`${id}-email`}>
                            <FontAwesomeIcon icon={faEnvelope} className="form-icon"/>
                        </label>
                        <div className="form-input-login">
                            <input type="email" className="input-login" id={`${id}-email`} name="email" placeholder="Correo electrónico" onInvalid={e => e.target.setCustomValidity('Ingrese su correo electrónico institucional')} autoComplete autoFocus required/>
                            <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                            <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                        </div>
                        <span className="form-input-error">El correo institucional solo puede <br/>contener letras, números, puntos,<br/> guiones y guión bajo.</span>
                    </fieldset>

                    <fieldset className="form-group" id={`${id}-formGroupPassword`}>
                        <label className="form-label" htmlFor={`${id}-password`}>
                            <FontAwesomeIcon icon={faLock} className="form-icon"/>
                        </label>
                        <div className="form-input-login">
                            <input type="password" className="input-login" id={`${id}-password`} name="password" placeholder="Contraseña" onInvalid={e => e.target.setCustomValidity('Ingrese su contraseña')} onPaste={(e) => {e.preventDefault(); return false;}} onCopy={(e) => {e.preventDefault(); return false;}} /* onSelectStart={(e) => {e.preventDefault(); return false;}} */ autoComplete required/>
                        </div>

                        {/* <span className="form-input-error">Tienes que poner tu contraseña para ingresar. </span> */}
                    </fieldset>

                    {/* <hr/> */}

                    <span className="new-account">¿No tienes cuenta?, regístrate <br/> <Link to="/registro-de-cuenta">aquí &gt;</Link>.</span>

                    {/* <hr/> */}

                    <footer className="form-footer-login">
                        <button className="form-btn-submit-login" type="submit">Continuar</button>
                    </footer>  
                </form>
            </div>

            <PortalModal onShow={showModalLoginSuccess} onClose={() => setShowModalLoginSuccess(false)} title="¡Inicio de sesión exitoso!" > 
                <p><b>¡Felicidades!</b>, ya puedes comenzar a usar el <b>nuevo sistema</b> del banco de alimentos.</p>
            </PortalModal>

            <PortalModal onShow={showModalLoginError} label="Error" onClose={() => setShowModalLoginError(false)} title="¡Error al iniciar sesión!" >
                <p>El <b>correo electrónico</b> o la <b>contraseña</b> son <u>incorrectos</u>.</p>
            </PortalModal>
        </>
    );
}

export default LogIn;
