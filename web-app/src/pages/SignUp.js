import React, { useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

const options = [
    'Masculino', 'Femenino'
  ];

function SignUp() {
    const form = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const firstName = form.current.firstName.value;
        const lastName = form.current.lastName.value;
        const email = form.current.email.value;
        const phoneNumber = form.current.phoneNumber.value;
        const sex = form.current.sex.value;
        const password = form.current.password.value;
        const passwordConfirm = form.current.passwordConfirm.value;

        if (password !== passwordConfirm) {
            alert('Las contraseñas no coinciden');
        } else {
            if (password === passwordConfirm) {
                navigate('/home', { replace: true });
                let formData = JSON.stringify({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, sex: sex, email: email, password_: password });
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
                else{
                    alert('Error al registrarse');
                }
            } else {
                
                alert('Error al registrarse');
            }
        }
    }
    return (
        <>
            <h1 className="form">Registrarse</h1>
            <form ref={form} onSubmit={handleSubmit}>
                <input name="firstName" placeholder="Nombres" required/>
                <input name="lastName" placeholder="Apellidos" required/>
                <input type="email" name="email" placeholder="Correo electrónico" required/>
                <input name="phoneNumber" placeholder="Número de teléfono" pattern="[0-9]" required/>
                <select name="sex">
                    <option value="m">Masculino</option>
                    <option value="f">Femenino</option>
                </select>
                <input type="password" name="password" placeholder="Contraseña" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" required/>
                <input type="password" name="passwordConfirm" placeholder="Confirmar contraseña" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" required/>
                <button type="submit">Continuar</button>
            </form>
        </>
    );
}

export default SignUp;
