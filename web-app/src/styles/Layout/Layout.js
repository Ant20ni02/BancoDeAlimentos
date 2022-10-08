import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from '../../components/Sidebar'

const Layout = () => {
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar);
    
    return (
        <main>
            <Sidebar />
            
            <section>
                <Outlet />
            </section> 
        </main>
    );
}

export default Layout;
