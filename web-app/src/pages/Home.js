import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import TextHeader from '../components/TextHeader';
import useTabTitle from '../custom-hooks/useTabTitle';
import DasboardCard from '../components/DashboardCard';
import family from '../images/icons/family.png';
import volunteers from '../images/icons/volunteers.png';
import surveys from '../images/icons/surveys.png';
import home from '../styles/Home.module.css';
import url from '../config/API';

function Home() {
    const navigate = useNavigate();
    useTabTitle("BAMX - Inicio");

    const [data, setData] = useState({
        surveysCount: 0,
        familiesCount: 0,
        volunteersCount: 0
    });

    useEffect(()=>{
        getData();
    }, []);

    const getData = async (e) => {
        const response = await fetch(url+`countVolunteersSurveys`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const finalData = await response.json();
        if(finalData.mensaje !== undefined && finalData.mensaje === "Token inválido"){
			localStorage.removeItem("token");
        	localStorage.removeItem("idUser");
        	navigate("/inicio-de-sesion", { replace: true });
		}
        setData(finalData);
    }


    return (
        <>
            <TextHeader text="Página principal" />
            <div className={home.container}>
                <h1 className={home.h1}>Actualizaciones</h1>

                <div className={home.grid}>
                    <DasboardCard img={volunteers} title="Voluntarios" count={data.volunteersCount} text="Este es el número actual de voluntarios" />

                    <DasboardCard img={family} title="Familias" count={data.familiesCount} />

                    <DasboardCard img={surveys} title="Encuestas" count={data.surveysCount} />
                </div>
            </div>
        </>
    );
}

export default Home;
