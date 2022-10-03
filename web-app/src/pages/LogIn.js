import React, { useRef, useId } from 'react';
import '../styles/LogIn.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function LogIn() {
    const form = useRef();
    const id = useId();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = JSON.stringify({ email: form.current.email.value, password_: form.current.password.value });
        
        
        const response = await fetch('http://localhost:4000/login',{ method: 'POST',headers: {
            'Content-Type': 'application/json',
          }, body: formData});
        const data = await response.json();
        if(data.mensaje !== 'Usuario o contraseña inválidos'){
            localStorage.setItem('token', data.token);
            localStorage.setItem('idUser', data.idUser);
            console.log(data.token);
            console.log(data.idUser);
            navigate('/home', { replace: true });
        }
    }
    return (
        <>
            <h1 className="form-header">Iniciar sesión</h1>

            <div className="grid">
                <form className="form-login" ref={form} onSubmit={handleSubmit}>
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
                            <input type="password" className="input-login-password" id={`${id}-password`} name="password" placeholder="Contraseña" onInvalid={e => e.target.setCustomValidity('Ingrese su contraseña')} onPaste={(e) => {e.preventDefault(); return false;}} onCopy={(e) => {e.preventDefault(); return false;}} /* onSelectStart={(e) => {e.preventDefault(); return false;}} */ autoComplete required/>
                        </div>
                    </fieldset>

                    <footer className="form-footer-login">
                        <button className="form-btn-submit-login" type="submit">Continuar</button>
                    </footer>  
                </form>
            </div>
        </>
    );
}

export default LogIn;
