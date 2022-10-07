import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import Start from '../pages/Start';
import Survey from '../pages/survey/Survey';
import Records from '../pages/survey/Records';
import Charts from '../pages/survey/Charts';
import PageNotFound from '../pages/PageNotFound';
import ProtectedRoute from '../components/ProtectedRoute'

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Start />} />
                    <Route path="/registro-de-cuenta" element={<SignUp />} />
                    <Route path="/inicio-de-sesion" element={<LogIn />} />

                    <Route path="/pagina-principal" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
                    <Route path="/perfil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

                    <Route path="/encuestas" element={<ProtectedRoute><Survey /></ProtectedRoute>} />
                        <Route /* path="/encuestas/registros" */ path="/registros" element={<ProtectedRoute><Records /></ProtectedRoute>} />
                        <Route /* path="/encuestas/graficas" */ path="/graficas" element={<ProtectedRoute><Charts /></ProtectedRoute>} />
                    {/* </Route> */}

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;
