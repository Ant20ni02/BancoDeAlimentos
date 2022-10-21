import termsAndConditions from '../styles/TermsAndConditions.module.css';
import LinkButton from '../components/LinkButton';

function PrivacyPolicy () {
    return (
        <div className={termsAndConditions.grid}>
            <div className={termsAndConditions.flex}>
                <h1>Términos y condiciones</h1>
                    <p>Es requisito necesario para la adquisicion de productos que se ofrecen en este sitio, que lea y acepte los siguientes  términos y condiciones que a continuacion se redactaran. El uso de nuestro servicio implica que usted ha leido y aceptado los Terminos y Condiciones de Uso en el presente documento, la cuál dicta que: "La informacion de nuestros usuarios se deberan mantener discretos entre los trabajadores de la organizacion y nunca deberan ser expuesto al publico".</p>
            </div>
            <LinkButton path="/registro-de-cuenta" text="Regresar" />
        </div>
    );
}

export default PrivacyPolicy;
