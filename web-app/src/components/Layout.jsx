import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar);
        
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="dashboard">Dashboard</Link>
                {/* {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="login">Login</Link>
                )} */}
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;
