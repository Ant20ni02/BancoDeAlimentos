import React, { useRef} from 'react';
import '../styles/form.css';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const form = useRef();
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
            <form className="form" ref={form} onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Correo electrónico"  required/>
                <input type="password" name="password" placeholder="Contraseña"  required/>
                <button className="form-btn" type="submit">Continuar</button>
            </form>
        </>
    );
}

export default LogIn;
