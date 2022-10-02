import React, { useRef, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import '../styles/scrollbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faCircleCheck, faTimesCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function SignUp() {
    const form = useRef();
    const id = useId();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const firstName = form.current.firstName.value;
        const lastName = form.current.lastName.value;
        const age = form.current.age.value;
        const email = form.current.email.value;
        const phoneNumber = form.current.phoneNumber.value;
        const sex = form.current.sex.value;
        const password = form.current.password.value;
        const passwordConfirm = form.current.passwordConfirm.value;

        if (password === passwordConfirm) {
            let formData = JSON.stringify({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, sex: sex, age: age, email: email, password_: password, userType: 'Admin'});
            const response = await fetch('http://localhost:4000/signup',{ method: 'POST',headers: {
            'Content-Type': 'application/json',
            }, body: formData});
            const data = await response.json();
            if(data.mensaje === 'Usuario insertado correctamente'){
                navigate('/login', { replace: true });
            } else if(data.mensaje === "El usuario ya se encuentra registrado"){
                alert('El usuario ya se encuentra registrado');
            } else{
                alert('Error al registrarse');
            }
        } else {
            alert('Las contraseñas no coinciden');
        }
    }
    return (
        <>
            <h1 className="form-header">Registrarse</h1>
            <form className="form" ref={form} onSubmit={handleSubmit}>

                <fieldset className="form-group" id={`${id}-formGroupFirstName`}>
                    <label className="form-label" htmlFor={`${id}-firstName`}>
                        Nombres
                    </label>
                    <div className="form-input">
                        {/* <FontAwesomeIcon icon={faUser} className="form-icon"/> */}
                        <input id={`${id}-firstName`} name="firstName" placeholder="Pamela" pattern="[0-9]+" required/>
                        <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                        <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                    </div>

                    <span className="form-input-error">El nombre solo puede contener letras.</span>
                </fieldset>

                <fieldset className="form-group" id={`${id}-formGroupLastName`}>
                    <label className="form-label" htmlFor={`${id}-lastName`}>
                        Apellidos
                    </label>
                    <div className="form-input">
                        {/* <FontAwesomeIcon icon={faUser} className="form-icon"/> */}
                        <input id={`${id}-lastName`} name="lastName" placeholder="Mejia" required/>
                        <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                        <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                    </div>

                    <span className="form-input-error">El apellido solo puede contener letras.</span>
                </fieldset>

                <fieldset className="form-group" id={`${id}-formGroupAge`}>
                    <label className="form-label" htmlFor={`${id}-age`}>
                        Edad
                    </label>
                    <div className="form-input">
                        {/* <FontAwesomeIcon icon={faUser} className="form-icon"/> */}
                        <input id={`${id}-age`} name="age" placeholder="20" required/>
                        <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                        <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                    </div>

                    <span className="form-input-error">La edad solo puede contener números.</span>
                </fieldset>

                {/* <input type="number" name="age" size="2" min="1" max="100" data-maxlength="2" pattern="[0-9]{1,100}" onInput={this.value=this.value.slice(0,this.dataset.maxlength);} onInvalid={e => e.target.setCustomValidity('Ingrese una edad valida')} required/> */}

                <fieldset className="form-group" id={`${id}-formGroupEmail`}>
                    <label className="form-label" htmlFor={`${id}-email`}>
                        Correo electrónico
                    </label>
                    <div className="form-input">
                        {/* <FontAwesomeIcon icon={faUser} className="form-icon"/> */}
                        <input type="email" id={`${id}-email`} name="email" placeholder="Correo electrónico" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" /* onInvalid={e => e.target.setCustomValidity('Ingrese un correo e')} */ required/>
                        <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                        <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                    </div>

                    <span className="form-input-error">El correo institucional solo puede contener letras, números, puntos, guiones y guión bajo.</span>
                </fieldset>

                <div className="form-group" id={`${id}-formGroupPhoneNumber`}>
                    <label className="form-label" htmlFor={`${id}-phoneNumber`}>
                        Número de teléfono
                    </label>
                    <div className="form-input">
                        {/* <FontAwesomeIcon icon={faUser} className="form-icon"/> */}
                        <input type="tel" id={`${id}-phoneNumber`} name="phoneNumber" placeholder="7773464786" pattern="[0-9]{10}" onInvalid={e => e.target.setCustomValidity('Ingrese un número de teléfono válido')} required/>
                        <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                        <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                    </div>

                    <span className="form-input-error">El número de teléfono <br/> solo puede contener números <br/> y máximo 10 digitos.</span>
                </div>

                {/* Identity */}
                <select name="sex" required>
                    <option selected disabled hidden>Identidad de género</option>
                    <option value="m">Masculino</option>
                    <option value="f">Femenino</option>
                    <option value="o">No especificar</option>
                </select>

                <div className="form-group" id={`${id}-formGroupPassword`}>
                    <label className="form-label" htmlFor={`${id}-password`}>
                        Contraseña
                    </label>
                    <div className="form-input">
                        {/* <FontAwesomeIcon icon={faUser} className="form-icon"/> */}
                        <input type="password" id={`${id}-password`} name="password" placeholder="Contraseña" className="input-password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" onInvalid={e => e.target.setCustomValidity('Ingrese una contraseña valida')} onCopy={(e) => {e.preventDefault(); return false;}} onSelectStart={(e) => {e.preventDefault(); return false;}} required/>
                        <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                        <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                    </div>

                    <span className="form-input-error">La contraseña tiene que ser de 4 a 12 dígitos.</span>
                </div>
                
                <div className="form-group" id={`${id}-formGroupPasswordConfirm`}>
                    <label className="form-label" htmlFor={`${id}-passwordConfirm`}>
                        Confirmar contraseña
                    </label>
                    <div className="form-input">
                        {/* <FontAwesomeIcon icon={faUser} className="form-icon"/> */}
                        <input type="password" id={`${id}-passwordConfirm`} name="passwordConfirm" placeholder="Confirmar contraseña" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" onInvalid={e => e.target.setCustomValidity('Confirme correctamente su contraseña valida')} onPaste={(e) => {e.preventDefault(); return false;}} required/>
                        <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                        <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                    </div>
                    
                    <span className="form-input-error">Las contraseñas no coinciden.</span>
                </div>
                
                <hr/>

                <footer className="form-footer">
                    <div className="form-group" id={`${id}-formGroupTermsAndConditions`}>
                        <label className="form-label">
                            <input className="form-checkbox" type="checkbox" id={`${id}-termsAndConditions`} name="termsAndConditions" required/>Acepto los <a href="#">términos y condiciones</a>
                        </label>
                        <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                        <span className="form-input-error">Debe aceptar los términos y condiciones.</span>
                    </div>

                    <div id={`${id}-formGroupPrivacyPolicy`}>
                        <label className="form-label">
                            <input className="form-checkbox" type="checkbox" id={`${id}-privacyPolicy`} name="privacyPolicy" required/>Acepto la <a href="#">política de privacidad</a>
                        </label>
                        <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                        <span className="form-input-error">Debe aceptar la política de privacidad.</span>
                    </div>

                    <div className="form-invalid-submit-message" id={`${id}-formInvalidSubmitMessage`}>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <span> <b>Error:</b> Por favor, revise los campos marcados en rojo.</span>
                    </div>

                    <button className="form-btn-submit" type="submit">Continuar</button>
                </footer>                
            </form>
        </>
    );
}

export default SignUp;
