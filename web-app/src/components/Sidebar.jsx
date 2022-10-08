import '../styles/Sidebar.css';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faLayerGroup, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/inicio-de-sesion", { replace: true });
    }

    return (
        <>
            <nav className="Sidebar">
                <ul className="Sidebar-container">
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
                        <NavLink to="/inicio-de-sesion" className="nav-link" onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} className="nav-icon"/><span className="link-text">Salir</span></NavLink>
                        {/* <div onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} className="form-icon"/><span>Salir</span></div>  */}
                    </li>
                </ul>               
            </nav>
        </>
    );
}

export default Sidebar;
