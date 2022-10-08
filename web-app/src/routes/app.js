import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Start from '../pages/Start';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import ProtectedRoute from '../components/ProtectedRoute'
import Layout from '../styles/Layout/Layout'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Survey from '../pages/survey/Survey';
import Records from '../pages/survey/Records';
import Charts from '../pages/survey/Charts';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Start />} />
                    <Route path="/registro-de-cuenta" element={<SignUp />} />
                    <Route path="/inicio-de-sesion" element={<LogIn />} />

                    <Route path="/bamx" element={<Layout />}>
                        <Route index path="pagina-principal" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
                        <Route path="perfil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                        <Route path="encuestas" element={<ProtectedRoute><Survey /></ProtectedRoute>} >
                           {/*  <Route path="registros" element={<ProtectedRoute><Records /></ProtectedRoute>} /> */}
                        </Route>
                        <Route path="encuestas/registros" element={<ProtectedRoute><Records /></ProtectedRoute>} />
                        <Route path="encuestas/graficas" element={<ProtectedRoute><Charts /></ProtectedRoute>} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;
