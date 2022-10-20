import TextHeader from '../components/TextHeader';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import useTabTitle from '../custom-hooks/useTabTitle';

function Home() {
    useTabTitle("BAMX - Inicio");

    /* const useTheme = () => {
        const initialTheme = auto;
        const [theme, setTheme] = useState(initialTheme);
        useEffect(() => {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => e.matches && setTheme(darkTheme));
            window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => e.matches && setTheme(lightTheme));
        }, []);
        return theme;
    }; */

    return (
        <>
            <TextHeader text="Página principal" />
        </>
    );
}

export default Home;
