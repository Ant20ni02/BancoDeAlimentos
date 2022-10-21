import '../styles/TextHeader.css';
import PortalModal from '../components/PortalModal';
import React, { useRef, useId, useState } from 'react';
import icon from '../images/icons/icon.png';
import signup from '../styles/SignUp.module.css';
import url from '../config/API';
import { faUser, faEnvelope, faPhone, faLock, faCircleCheck, faTimesCircle, faExclamationTriangle,  faVenusMars, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useTabTitle from '../custom-hooks/useTabTitle';

function SignUp() {
    useTabTitle('BAMX - Registro');
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
                setTimeout(() => {
                    navigate('/inicio-de-sesion', { replace: true });
                }, 4000);
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

    /* const [name, setName] = useState('');
 
    const validName = e => {
        const { value } = e.target;
        const regex = /^[A-Z][a-z]*\s?[A-Z]*[a-z]*$/;
        if (value === "" || regex.test(value)) {
            setName(value);
        }
    } */

    /* const [age, setAge] = useState('');
 
    const validAge = (e) => {
        const { value } = e.target;
        const regex = /^[0-9]+$/;
        if (value === "" || regex.test(value)) {
            setAge(value);
        }
    } */

    return (
        <>
            <div className={signup.grid}>

                <header className={signup.formHeader}>
                    <h1>Regístrate</h1>
                </header>

                <div className={signup.iconContainerSignup}>
                    <Link to="/"><img className={signup.iconSignup} src={icon} alt="Icon"/></Link>
                </div>
                
                <form className={signup.form} ref={form} onSubmit={handleSubmit}>
                    <fieldset className={signup.formGroup}>
                        <label className={signup.formLabel} htmlFor={`${id}-firstName`}>
                            <FontAwesomeIcon icon={faUser} />
                        </label>
                        <div className={signup.formInput}>
                            <input className={signup.inputSignup} id={`${id}-firstName`} name="firstName" placeholder="Nombres" title='Ingrese su nombre.' /* value={name}
        onChange={validName} */ pattern="^[A-Z][a-z]+(\s[A-Z][a-z]+)?$" onInvalid={e => e.target.setCustomValidity('Por favor, ingrese aquí el o los nombres suyos que sean válidos.')} /* size={16} */ minLength={3} maxLength={16} autoComplete autoFocus required/>
                            <FontAwesomeIcon className={signup.formValidationStatusSuccess} icon={faCircleCheck} />
                            <FontAwesomeIcon className={signup.formValidationStatusError} icon={faTimesCircle} />
                        </div>

                        <span className={signup.formInputError}>El o los nombres solo pueden <b>contener letras</b>, deben tener la <b>primera letra en mayúscula</b> y estar <b>separados por un espacio en blanco</b> entre ellos{/* , tener por lo menos 3 letras de longitud y máximo 16 */}.</span>
                    </fieldset>

                    <fieldset className={signup.formGroup}>
                        <label className={signup.formLabel} htmlFor={`${id}-lastName`}>
                            <FontAwesomeIcon icon={faUser} />
                        </label>
                        <div className={signup.formInput}>
                            <input className={signup.inputSignup} id={`${id}-lastName`} name="lastName" placeholder="Apellidos" title='Ingrese sus apellidos.' onInvalid={e => e.target.setCustomValidity('Por favor, ingrese aquí sus apellidos válidos.')} pattern="^[A-Z][a-z]+(\s[A-Z][a-z]+)?$" /* size={32} */ minLength={3} maxLength={32} autoComplete required/>
                            <FontAwesomeIcon className={signup.formValidationStatusSuccess} icon={faCircleCheck} />
                            <FontAwesomeIcon className={signup.formValidationStatusError} icon={faTimesCircle} />
                        </div>

                        <span className={signup.formInputError}>El o los apellidos solo pueden <b>contener letras</b>, deben tener la <b>primera letra en mayúscula</b> y estar <b>separados por un espacio en blanco</b> entre ellos{/* , tener por lo menos 3 letras de longitud y máximo 16 */}.</span>
                    </fieldset>

                    <fieldset className={signup.formGroup}>
                        <label className={signup.formLabel} htmlFor={`${id}-age`}>
                            {/* Edad */}
                            <FontAwesomeIcon icon={faCalendar} />
                        </label>
                        <div className={signup.formInput}>
                            <input className={signup.inputSignup} id={`${id}-age`} name="age" placeholder="Edad" title='Ingrese su edad.' /* value={age}
        onInput={validAge} */ onInvalid={e => e.target.setCustomValidity('Por favor, ingrese aquí su edad que sea válida.')} minLength={1} maxLength="2" pattern="^(1[89]|[2-9][0-9])$" required/>
                            <FontAwesomeIcon className={signup.formValidationStatusSuccess} icon={faCircleCheck} />
                            <FontAwesomeIcon className={signup.formValidationStatusError} icon={faTimesCircle} />
                        </div>

                        <span className={signup.formInputError}>La edad solo puede <b>contener números positivos</b> y debe estar entre los 18 y 99 años.</span>
                    </fieldset>

                    {/* <input type="number" name="age" size="2" min="1" max="100" data-maxlength="2" pattern="[0-9]{1,100}" onInput={this.value=this.value.slice(0,this.dataset.maxlength);} onInvalid={e => e.target.setCustomValidity('Ingrese una edad valida')} required/> */}

                    <fieldset className={signup.formGroup}>
                        <label className={signup.formLabel} htmlFor={`${id}-email`}>
                            {/* Correo electrónico */}
                            <FontAwesomeIcon icon={faEnvelope} />
                        </label>
                        <div className={signup.formInput}>
                            <input type="email" className={signup.inputSignup} id={`${id}-email`} name="email" placeholder="Correo electrónico" title='Ingrese su correo electrónico institucional.' onInvalid={e => e.target.setCustomValidity('Por favor, ingrese aquí un correo electrónico institucional suyo válido.')} pattern="^[a-z0-9._-]+@bamorelos.org$" autoComplete required/>
                            <FontAwesomeIcon className={signup.formValidationStatusSuccess} icon={faCircleCheck} />
                            <FontAwesomeIcon className={signup.formValidationStatusError} icon={faTimesCircle} />
                        </div>

                        <span className={signup.formInputError}>El correo electrónico institucional solo puede <b>contener letras, números, puntos, guiones, guión bajo</b> y debe terminar en el dominio <b>'@bamorelos.org'</b>.</span>
                    </fieldset>

                    <fieldset className={signup.formGroup}>
                        <label className={signup.formLabel} htmlFor={`${id}-phoneNumber`}>
                            {/* Número de teléfono */}
                            <FontAwesomeIcon icon={faPhone} />
                        </label>
                        <div className={signup.formInput}>
                            <input type="tel" className={signup.inputSignup} id={`${id}-phoneNumber`} name="phoneNumber" placeholder="Número de teléfono" title='Ingrese su número de teléfono.' minLength={10} maxLength={10} pattern='^[0-9]+$' onInvalid={e => e.target.setCustomValidity('Por favor, ingrese aquí un número de teléfono suyo válido.')} autoComplete required/>
                            <FontAwesomeIcon className={signup.formValidationStatusSuccess} icon={faCircleCheck} />
                            <FontAwesomeIcon className={signup.formValidationStatusError} icon={faTimesCircle} />
                        </div>

                        <span className={signup.formInputError}>El número de teléfono solo puede <b>contener números</b> y debe ser de <b>10 digitos</b>.</span>
                    </fieldset>

                    <fieldset className={signup.formGroup}>
                        <label className={signup.formLabel} htmlFor={`${id}-phoneNumber`}>
                            {/* Sexo*/}
                            <FontAwesomeIcon icon={faVenusMars} />
                        </label>
                        <select className={signup.sex} name="sex" title='Seleccione su sexo.' onInvalid={e => e.target.setCustomValidity('Por favor, seleccione aquí su sexo.')} required>
                            <option selected disabled hidden>Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </fieldset>
                        

                    <fieldset className={signup.formGroup} id={`${id}-formGroupPassword`}>
                        <label className={signup.formLabel} htmlFor={`${id}-password`}>
                            {/* Contraseña */}
                            <FontAwesomeIcon icon={faLock} />
                        </label>
                        <div className={signup.formInput}>
                            <input type="password" className={signup.inputSignup} id={`${id}-password`} name="password" placeholder="Contraseña" title='Ingrese su contraseña.' minLength={8} maxLength={16} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" onInvalid={e => e.target.setCustomValidity('Por favor, ingrese aquí una contraseña valida')} onPaste={(e) => {e.preventDefault(); return false;}} onCopy={(e) => {e.preventDefault(); return false;}} /* onSelectStart={(e) => {e.preventDefault(); return false;}} */ autoComplete required/>
                            <FontAwesomeIcon className={signup.formValidationStatusSuccess} icon={faCircleCheck} />
                            <FontAwesomeIcon className={signup.formValidationStatusError} icon={faTimesCircle} />
                        </div>

                        <span className={signup.formInputError}>La contraseña tiene que ser de entre <b>8 a 16 dígitos</b>, debe contener <b>Mayúsculas, minisculas, simbolos y números</b>.</span>
                    </fieldset>
                        
                    <fieldset className={signup.formGroup}>
                        <label className={signup.formLabel} htmlFor={`${id}-passwordConfirm`}>
                            {/* Confirmar contraseña */}
                            <FontAwesomeIcon icon={faLock} />
                        </label>
                        <div className={signup.formInput}>
                            <input type="password" className={signup.inputSignup} id={`${id}-passwordConfirm`} name="passwordConfirm" placeholder="Confirmar contraseña" title='Ingrese la confirmación de su contraseña.' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" onInvalid={e => e.target.setCustomValidity('Por favor, confirme aquí correctamente su contraseña valida.')} onPaste={(e) => {e.preventDefault(); return false;}} onInput={inputPasswordValidation} autoComplete required/>
                            <FontAwesomeIcon className={signup.formValidationStatusSuccess} icon={faCircleCheck} />
                            <FontAwesomeIcon className={signup.formValidationStatusError} icon={faTimesCircle} />
                        </div>
                        {
                            showInvalidInputPassword &&
                            <span className={signup.formInputErrorUseState}>Las contraseñas no coinciden.</span>
                        }
                    </fieldset>

                    <fieldset className={signup.termsAndConditionsAndPrivacyPolicyFormGroup}>
                        <div>
                            <label className={signup.termsAndConditionsAndPrivacyPolicyLabel}>
                                <input type="checkbox" name="termsAndConditions" /* onInvalid={e => e.target.setCustomValidity('Por favor, acepte los términos y condiciones.')} */ required/> Acepto los <Link to='/terminos-y-condiciones'>términos y condiciones ↗</Link>.
                            </label>
                            {/* <FontAwesomeIcon className={signup.formValidationStatusError} icon={faTimesCircle} />
                            <span className={signup.formInputError}>Debe aceptar los términos y condiciones.</span> */}
                        </div>

                        <div>
                            <label className={signup.termsAndConditionsAndPrivacyPolicyLabel}>
                                <input type="checkbox" name="privacyPolicy" /* onInvalid={e => e.target.setCustomValidity('Por favor, acepete la poítica de privacidad.')} */ required/>  Acepto la <Link to='/politica-de-privacidad'>política de privacidad ↗</Link>.
                            </label>
                            {/* <FontAwesomeIcon className={signup.formValidationStatusError} icon={faTimesCircle} />
                            <span className={signup.formInputError}>Debe aceptar la política de privacidad.</span> */}
                        </div>
                    </fieldset>

                    <span className={signup.oldAccount}>Ya tienes cuenta?, inicia sesión <br/> <Link to="/inicio-de-sesion">aquí &gt;</Link>.</span>

                    <footer className={signup.formFooter}>
                        <div className={signup.formInvalidSubmitMessage} id={`${id}-formInvalidSubmitMessage`}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <span> <b>Error:</b> Por favor, revise los campos marcados en rojo.</span>
                        </div>

                        <button className={signup.formBtnSubmit} type="submit">Continuar</button>
                    </footer>                
                </form>
            </div>

            <PortalModal onShow={showModalCreatedUserSuccess} onClose={() => setShowModalCreatedUserSuccess(false)} title="¡Cuenta creada exitosamente!" > 
                <p><b>¡Ya casi!</b>, a continuación serás redirigiado para que <u>inicies sesión</u> con tu <b>cuenta nueva.</b></p>
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
