import privacyPolicy from '../styles/PrivacyPolicy.module.css';
import LinkButton from '../components/LinkButton';

function PrivacyPolicy () {
    return (
        <div className={privacyPolicy.grid}>
            <div className={privacyPolicy.flex}>
                <h1>Política de privacidad</h1>
                    <p>El administrador tendrá acceso a la información de todos los usuarios de la aplicación móvil y es por eso que este debe aceptar las condiciones qué dictan que usted deberá actuar de forma honrada para mantener la confianza de los usuarios con el Banco de Alimentos de México. El administrador tiene prohibido hablar de sus usuarios fuera de la organización o con miembros ajenos a esta misma, por lo qué cabe recalcar que no podrá criticar, juzgar ni exponer la presente información al exterior, de lo contrario se tomarán medidas y se aplicarán las correctas sanciones. La aplicación web sirve para conocer mas de los usuarios de la aplicación móvil, conocer su estado y estilo vida y conocer los alimentos que requieren, esta prohibido darle otro uso a la aplicación web aparte del uso que tiene establecido.</p>
            </div>
            <LinkButton path="/registro-de-cuenta" text="Regresar" />
        </div>
    );
}

export default PrivacyPolicy;
