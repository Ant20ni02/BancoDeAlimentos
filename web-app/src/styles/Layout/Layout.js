import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
/* import NavbarSidebar from '../../components/NavbarSidebar'; */

const Layout = () => {
    return (
        <main>
            <Navbar />
            {/* <Sidebar /> */}
            
            <section>
                <Outlet />
            </section> 
        </main>
    );
}

export default Layout;
