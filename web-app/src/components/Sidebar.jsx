import '../styles/Sidebar.css';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark, faHouse, faUser, faLayerGroup, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (show) => {
    return (
        <>
            <nav className="Sidebar">
                <ul className="Sidebar-container">
                    {/* <li className="nav-item">
                        <div className="nav-link" onClick={show}><FontAwesomeIcon icon={faXmark} className="nav-icon"/><span className="link-text">Cerrar</span></div>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="/bamx/pagina-principal" className="nav-link"><FontAwesomeIcon icon={faHouse} className="nav-icon"/><span className="link-text">Principal</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/bamx/perfil" className="nav-link"><FontAwesomeIcon icon={faUser} className="nav-icon"/><span className="link-text">Perfil</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/bamx/encuestas" className="nav-link"><FontAwesomeIcon icon={faLayerGroup} className="nav-icon"/><span className="link-text">Encuestas</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/bamx/voluntarios" className="nav-link"><FontAwesomeIcon icon={faHandshakeAngle} className="nav-icon"/><span className="link-text">Voluntarios</span></NavLink>
                        {/* <div onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} className="form-icon"/><span>Salir</span></div>  */}
                    </li>
                </ul>               
            </nav>
        </>
    );
}

export default Sidebar;
