import '../styles/Navbar.css';
import { useState, useEffect, useRef, useId } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faPalette, faCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
                        {/* <div className='menu-hamburger'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> */}
                        <FontAwesomeIcon icon={faBars} className="Navbar-icon-menu-hamburger"/>
                    </li>
                    <li className="Navbar-item">
                        <NavLink to="/bamx/pagina-principal">
                            <img src={logo} alt="logo" className="Navbar-logo"/>
                        </NavLink>
                    </li>
                    <li className="Navbar-item">
                        <span>{user.firstName} {user.lastName}</span>
                    </li>
                    <li className="Navbar-item">
                        <div className="Navbar-item-circle" onClick={() => setShowMenu(!showMenu)}><FontAwesomeIcon icon={faCaretDown} className="Navbar-icon"/></div>
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
    const id = useId();
    /* let theme = localStorage.getItem('theme');
    const auto = useRef();
    const light = useRef();
    const dark = useRef();

    const changeTheme = (e) => {
        if(e.target === auto.current){
            localStorage.setItem('theme', 'auto');
            theme = 'auto';
        }else if(e.target === light.current){
            localStorage.setItem('theme', 'light');
            console.log(localStorage.getItem('theme'));
            theme = 'light';
        }else if(e.target === dark.current){
            localStorage.setItem('theme', 'dark');
            theme = 'dark';
        }
    } */

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("idUser");
        navigate("/inicio-de-sesion", { replace: true });
    }
    
    return (
        <ul className="Navbar-dropdown">
            {/* <li className="Navbar-dropdown-item">
                <div className="Navbar-dropdown-item-legend">
                    <span>Apariencia </span><FontAwesomeIcon icon={faPalette} className="Navbar-dropdown-item-icon"/>
                </div>
                <div className="Navbar-dropdown-item-checkboxs">
                    <input type="radio" ref={auto} id={`${id}-auto`} name="theme" value="auto" checked/>
                    <label htmlFor={`${id}-auto`}>Automático</label>
                    <input type="radio" ref={light} id={`${id}-light`} name="theme" value="light" onClick={changeTheme}/>
                    <label htmlFor={`${id}-light`}>Claro</label>
                    <input type="radio" ref={dark} id={`${id}-dark`} name="theme" value="dark"/>
                    <label htmlFor={`${id}-dark`}>Oscuro</label>
                </div>
            </li> */}
            <li className="Navbar-dropdown-item">
                <div className="Navbar-dropdown-item-legend">
                    <span>Tema </span><FontAwesomeIcon icon={faPalette} className="Navbar-dropdown-item-icon"/>
                </div>
                <div className="Navbar-dropdown-item-checkboxes">
                    <input type="radio" className='theme-yellow' id={`${id}-yellow`} name="theme" value="yellow"/>

                    <input type="radio" className='theme-green' id={`${id}-green`} name="theme" value="green"/>

                    <input type="radio" className='theme-red' id={`${id}-red`} name="theme" value="red"/>
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
