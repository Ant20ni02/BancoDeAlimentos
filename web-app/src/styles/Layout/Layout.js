import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
/* import NavbarSidebar from '../../components/NavbarSidebar'; */

const Layout = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const toggleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    };
    
    return (
        <main>
            
            <Navbar toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} />
            { 
                isOpenSidebar &&
                <Sidebar toggleSidebar={toggleSidebar} />
            }
            
            <section>
                <Outlet />
            </section> 
        </main>
    );
}

export default Layout;
