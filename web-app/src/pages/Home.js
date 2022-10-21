import TextHeader from '../components/TextHeader';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import useTabTitle from '../custom-hooks/useTabTitle';

function Home() {
    useTabTitle("BAMX - Inicio");

    return (
        <>
            <TextHeader text="Página principal" />
            <div>
                <h1>¡Bienvenido a BAMX!</h1>
                
            </div>
        </>
    );
}

export default Home;
