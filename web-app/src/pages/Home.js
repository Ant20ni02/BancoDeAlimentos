import TextHeader from '../components/TextHeader';
import useTabTitle from '../custom-hooks/useTabTitle';
import DasboardCard from '../components/DashboardCard';
import family from '../images/icons/family.png';
import volunteers from '../images/icons/volunteers.png';
import home from '../styles/Home.module.css';

function Home() {
    useTabTitle("BAMX - Inicio");

    return (
        <>
            <TextHeader text="Página principal" />
            <div className={home.container}>
                <h1>¡Bienvenido a BAMX!</h1>
                <DasboardCard img={volunteers} title="Voluntarios" count="1" text="Este es el número actual de voluntarios" />

                <DasboardCard img={family} title="Familia" count="1" text="Este es el número actual de familias" />
            </div>
        </>
    );
}

export default Home;
