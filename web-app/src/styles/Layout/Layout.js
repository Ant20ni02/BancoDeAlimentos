import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const Layout = () => {
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar);
    
    return (
        <main>
            <Navbar toggleSidebar={toggleSidebar} />
            {/* <Sidebar /> */}
            
            <section>
                <Outlet />
            </section> 
        </main>
    );
}

export default Layout;
