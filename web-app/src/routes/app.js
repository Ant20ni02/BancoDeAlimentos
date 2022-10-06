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

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Start />} />
                    <Route path="/registro-de-cuenta" element={<SignUp />} />
                    <Route path="/inicio-de-sesion" element={<LogIn />} />

                    <Route path="/pagina-principal" element={<Home />}/>
                    <Route path="/perfil" element={<Profile />} />

                    <Route path="/encuestas" element={<Survey />} />
                        <Route /* path="/encuestas/registros" */ path="/registros" element={<Records />} />
                        <Route /* path="/encuestas/graficas" */ path="/graficas" element={<Charts />} />
                    {/* </Route> */}

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;
