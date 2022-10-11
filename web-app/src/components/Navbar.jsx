import '../styles/Navbar.css';
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCaretDown, faPalette,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import url from '../config/API';
import logo from '../images/recurso-4.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
    });

    useEffect(() => {
        const getUser = async () => {
            const idUser = localStorage.getItem("idUser");
            const response = await fetch(url+`getUsersData/${idUser}`, {
                method: "GET",
                headers: {
                    'x-access-token' : localStorage.getItem('token')
                }
            });
            const data = await response.json();
            setUser(data);
        }
        getUser();
    }, []);

    return (
        <>
            <nav className="Navbar">
                <ul className="Navbar-container">
                    <li className="Navbar-item">
                        <NavLink to="/bamx/pagina-principal">
                            <img src={logo} alt="logo" className="Navbar-logo"/>
                        </NavLink>
                    </li>
                    <li className="Navbar-item">
                        <span>{user.firstName} {user.lastName}</span>
                    </li>
                    <li className="Navbar-item">
                        <NavLink to="/bamx/pagina-principal" className="Navbar-link" onClick={() => setShowMenu(!showMenu)}><FontAwesomeIcon icon={faCaretDown} className="Navbar-icon"/></NavLink>
                        {
                            showMenu && (
                                <DropdownMenu/>
                            )
                        }
                    </li>
                </ul>
            </nav>
        </>
    );
}

const DropdownMenu = () => {
    const navigate = useNavigate();
    let theme = localStorage.getItem('theme');

    const changeTheme = () => {
        if(theme === 'light'){
            localStorage.setItem('theme', 'dark');
            theme = 'dark';
        } else if (theme === 'dark'){
            localStorage.setItem('theme', 'light');
            theme = 'light';
        } else {
            localStorage.setItem('theme', 'default-auto');
            theme = 'default-auto';
        }
        window.location.reload();
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("idUser");
        navigate("/inicio-de-sesion", { replace: true });
    }
    
    return (
        <ul className="Navbar-dropdown">
            <li className="Navbar-dropdown-item">
                <div className="Navbar-dropdown-item-legend">
                    <span>Tema </span><FontAwesomeIcon icon={faPalette} className="Navbar-dropdown-item-icon"/>
                </div>
                <div className="Navbar-dropdown-item-checkboxs">
                    <input type="radio" id="default-auto" name="theme" value="default-auto"/>
                    <label htmlFor="default-auto">Automático</label>
                    <input type="radio" id="light" name="theme" value="light" onClick={changeTheme}/>
                    <label htmlFor="light">Claro</label>
                    <input type="radio" id='dark' name="theme" value="dark"/>
                    <label htmlFor="dark">Oscuro</label>
                </div>
            </li>
            <li className="Navbar-dropdown-item" onClick={handleLogout}>
                <div className="Navbar-dropdown-item-legend">
                    <span>Salir </span><FontAwesomeIcon icon={faRightFromBracket} className="Navbar-dropdown-item-icon"/>
                </div>
            </li>
        </ul>
    );
}

export default Navbar;
