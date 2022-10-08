import React, { useRef, useId, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import url from '../config/API';
import '../styles/SignUp.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock, faCircleCheck, faTimesCircle, faExclamationTriangle,  faVenusMars, faCalendar} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/recurso-4.png';
import '../styles/TextHeader.css';
import PortalModal from '../components/PortalModal';

function SignUp() {
    const form = useRef();
    const id = useId();
    const navigate = useNavigate();

    const [showModalCreatedUserSuccess, setShowModalCreatedUserSuccess] = useState(false);
    const [showModalCreatedUserEmailTakenError, setShowModalCreatedUserEmailTakenError] = useState(false);
    const [showModalUnknownError, setShowModalUnknownError] = useState(false);
    const [showModalInvalidPassword, setShowModalInvalidPassword] = useState(false);
    
    const [showInvalidInputPassword, setShowInvalidInputPassword] = useState(false);

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
            let formData = JSON.stringify({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, sex: sex, age: age, email: email, password_: password,isActive: 1, userType: 'Admin'});
            const response = await fetch(url+'signup',{ method: 'POST',headers: {
            'Content-Type': 'application/json',
            }, body: formData});
            const data = await response.json();
            if(data.mensaje === 'Usuario insertado correctamente'){
                setShowModalCreatedUserSuccess(true);
                navigate('/inicio-de-sesion', { replace: true });
            } else if(data.mensaje === "El usuario ya se encuentra registrado"){
                setShowModalCreatedUserEmailTakenError(true);
            } else{
                setShowModalUnknownError(true);
            }
        } else {
            setShowModalInvalidPassword(true);
        }
    }

    const inputPasswordValidation = (e) => {
        e.preventDefault();
        const password = form.current.password.value;
        const passwordConfirm = form.current.passwordConfirm.value; 

        if (password !== passwordConfirm) {
            setShowInvalidInputPassword(true);
        } else if (password === passwordConfirm) {
            setShowInvalidInputPassword(false);
        }
    }
    return (
        <>
            <header className="form-header">
                <h1>Regístrate</h1>
            </header>
            <div className="grid">
                <div className="logo-container-signup">
                    <Link to="/"><img className="logo-signup" src={logo} alt="Logo"/></Link>
                </div>
                <form className="form" ref={form} onSubmit={handleSubmit}>
                    <div className="form-container">
                        <fieldset className="form-group">
                            <label className="form-label" htmlFor={`${id}-firstName`}>
                                <FontAwesomeIcon icon={faUser} className="form-icon"/>
                            </label>
                            <div className="form-input">
                                <input className="input-signup" id={`${id}-firstName`} name="firstName" placeholder="Nombres" /* pattern="/^[a-zA-ZÀ-ÿ\s]{1,40}$/" */ autoComplete autoFocus required/>
                                <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                                <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                            </div>

                            <span className="form-input-error">El nombre solo puede contener<br/> letras.</span>
                        </fieldset>

                        <fieldset className="form-group">
                            <label className="form-label" htmlFor={`${id}-lastName`}>
                                <FontAwesomeIcon icon={faUser} className="form-icon"/>
                            </label>
                            <div className="form-input">
                                <input className="input-signup" id={`${id}-lastName`} name="lastName" placeholder="Apellidos" /* pattern="/^[a-zA-ZÀ-ÿ\s]{1,40}$/" */ autoComplete required/>
                                <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                                <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                            </div>

                            <span className="form-input-error">El apellido solo puede contener<br/> letras.</span>
                        </fieldset>

                        <fieldset className="form-group">
                            <label className="form-label" htmlFor={`${id}-age`}>
                                {/* Edad */}
                                <FontAwesomeIcon icon={faCalendar} className="form-icon"/>
                            </label>
                            <div className="form-input">
                                <input className="input-signup" id={`${id}-age`} name="age" placeholder="Edad" maxLength="2" /* pattern="/^\d{7,14}$/" */ required/>
                                <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                                <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                            </div>

                            <span className="form-input-error">La edad solo puede contener<br/> números.</span>
                        </fieldset>

                        {/* <input type="number" name="age" size="2" min="1" max="100" data-maxlength="2" pattern="[0-9]{1,100}" onInput={this.value=this.value.slice(0,this.dataset.maxlength);} onInvalid={e => e.target.setCustomValidity('Ingrese una edad valida')} required/> */}

                        <fieldset className="form-group">
                            <label className="form-label" htmlFor={`${id}-email`}>
                                {/* Correo electrónico */}
                                <FontAwesomeIcon icon={faEnvelope} className="form-icon"/>
                            </label>
                            <div className="form-input">
                                <input type="email" className="input-signup" id={`${id}-email`} name="email" placeholder="Correo electrónico" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" /* onInvalid={e => e.target.setCustomValidity('Ingrese un correo e')} */ autoComplete required/>
                                <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                                <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                            </div>

                            <span className="form-input-error">El correo institucional solo puede <br/>contener letras, números, puntos,<br/> guiones y guión bajo.</span>
                        </fieldset>

                        <fieldset className="form-group">
                            <label className="form-label" htmlFor={`${id}-phoneNumber`}>
                                {/* Número de teléfono */}
                                <FontAwesomeIcon icon={faPhone} className="form-icon"/>
                            </label>
                            <div className="form-input">
                                <input type="tel" className="input-signup" id={`${id}-phoneNumber`} name="phoneNumber" placeholder="Número de teléfono" maxLength="10" /* pattern="[0-9]{10}" */ onInvalid={e => e.target.setCustomValidity('Ingrese un número de teléfono válido')} autoComplete required/>
                                <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                                <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                            </div>

                            <span className="form-input-error">El número de teléfono <br/> solo puede contener números <br/> y máximo 10 digitos.</span>
                        </fieldset>

                        {/* Identity */}
                        <fieldset className="form-group">
                            <label className="form-label" htmlFor={`${id}-phoneNumber`}>
                                {/* Sexo*/}
                                <FontAwesomeIcon icon={faVenusMars} className="form-icon"/>
                            </label>
                            <select name="sex" required>
                                <option selected disabled hidden>Sexo</option>
                                <option value="m">Masculino</option>
                                <option value="f">Femenino</option>
                            </select>
                        </fieldset>
                        

                        <fieldset className="form-group" id={`${id}-formGroupPassword`}>
                            <label className="form-label" htmlFor={`${id}-password`}>
                                {/* Contraseña */}
                                <FontAwesomeIcon icon={faLock} className="form-icon"/>
                            </label>
                            <div className="form-input">
                                <input type="password" className="input-signup" id={`${id}-password`} name="password" placeholder="Contraseña" /* pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" */ onInvalid={e => e.target.setCustomValidity('Ingrese una contraseña valida')} onPaste={(e) => {e.preventDefault(); return false;}} onCopy={(e) => {e.preventDefault(); return false;}} /* onSelectStart={(e) => {e.preventDefault(); return false;}} */ autoComplete required/>
                                <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                                <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                            </div>

                            <span className="form-input-error">La contraseña tiene que ser de<br/> 4 a 12 dígitos.</span>
                        </fieldset>
                        
                        <fieldset className="form-group">
                            <label className="form-label" htmlFor={`${id}-passwordConfirm`}>
                                {/* Confirmar contraseña */}
                                <FontAwesomeIcon icon={faLock} className="form-icon"/>
                            </label>
                            <div className="form-input">
                                <input type="password" className="input-signup" id={`${id}-passwordConfirm`} name="passwordConfirm" placeholder="Confirmar contraseña" /* pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" */ onInvalid={e => e.target.setCustomValidity('Confirme correctamente su contraseña valida')} onPaste={(e) => {e.preventDefault(); return false;}} onKeyUp={inputPasswordValidation} autoComplete required/>
                                <FontAwesomeIcon className="form-validation-status-success" icon={faCircleCheck} />
                                <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                            </div>
                            {
                                showInvalidInputPassword && <span className="form-input-error-useState">Las contraseñas no coinciden.</span>
                            }
                        </fieldset>

                        {/* <hr/> */}

                        <fieldset className="form-group terms-and-conditions-and-privacy-policy">
                            <div>
                                    <label className="terms-and-conditions-and-privacy-policy-label">
                                        <input type="checkbox" name="termsAndConditions" required/>Acepto los <a href="#">términos y condiciones</a>.
                                    </label>
                                    {/* <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                                    <span className="form-input-error">Debe aceptar los términos y condiciones.</span> */}
                                </div>

                                <div>
                                    <label className="terms-and-conditions-and-privacy-policy-label">
                                        <input type="checkbox" name="privacyPolicy" required/>Acepto la <a href="#">política de privacidad</a>.
                                    </label>
                                    {/* <FontAwesomeIcon className="form-validation-status-error" icon={faTimesCircle} />
                                    <span className="form-input-error">Debe aceptar la política de privacidad.</span> */}
                                </div>
                        </fieldset>
                    </div>

                    <footer className="form-footer">
                        <div className="form-invalid-submit-message" id={`${id}-formInvalidSubmitMessage`}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <span> <b>Error:</b> Por favor, revise los campos marcados en rojo.</span>
                        </div>

                        <button className="form-btn-submit" type="submit">Continuar</button>
                    </footer>                
                </form>
            </div>

            <PortalModal onShow={showModalCreatedUserSuccess} onClose={() => setShowModalCreatedUserSuccess(false)} title="¡Cuenta creada exitosamente!" > 
                <p><b>¡Ya casi!</b>, ahora solamente <u>inicia sesión</u> con tu <b>cuenta nueva.</b></p>
            </PortalModal>

            <PortalModal onShow={showModalCreatedUserEmailTakenError} label="Error" onClose={() => setShowModalCreatedUserEmailTakenError(false)} title="¡Usuario ya registrado!" >
                <p><b>¡Lo sentimos!</b>, el correo eléctronico ya está <u>registrado</u>, por favor <b>usa otro correo</b> e intenta de nuevo.</p>
            </PortalModal>

            <PortalModal onShow={showModalUnknownError} label="Error" onClose={() => setShowModalUnknownError(false)} title="¡Ups, no se pudo crear tu cuenta!" >
                <p><b>¡Lo sentimos!</b>, ha ocurrido un error al momento de <u>registarte</u>, por favor, <b>intenta de nuevo</b>.</p>
            </PortalModal>

            <PortalModal onShow={showModalInvalidPassword} label="Error" onClose={() => setShowModalInvalidPassword(false)} title="¡Las contraseñas no coinciden!" > 
                <p>Por favor, <b>verifiqué</b> que sus <u>contraseñas</u> <b>coincidan</b> e intenta de nuevo.</p>
            </PortalModal>


        </>
    );
}

export default SignUp;
