import React, { useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

function SignUp() {
    const form = useRef();
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
                <input name="firstName" placeholder="Nombres" required/>
                <input name="lastName" placeholder="Apellidos" required/>
                <input name="age" placeholder="Edad" required/>

                {/* <input type="number" name="age" size="2" min="1" max="100" data-maxlength="2" pattern="[0-9]{1,100}" onInput="this.value=this.value.slice(0,this.dataset.maxlength);" required/> */}

                <input type="email" name="email" placeholder="Correo electrónico" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required/>
                <input name="phoneNumber" placeholder="Número de teléfono" required/>
                <select name="sex">
                    <option value="m">Masculino</option>
                    <option value="f">Femenino</option>
                    <option value="o">No especificar</option>
                </select>
                <input type="password" name="password" placeholder="Contraseña" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" required/>
                <input type="password" name="passwordConfirm" placeholder="Confirmar contraseña" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" required/>
                <button className="form-btn" type="submit">Continuar</button>
            </form>
        </>
    );
}

export default SignUp;
