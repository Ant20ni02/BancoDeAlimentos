import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import TextHeader from '../../components/TextHeader';
import Card from '../../components/Card';
import '../../styles/Survey.css';
import { faChartPie, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';

function Survey() {
    return (
        <>
            <TextHeader text="Survey" />
            <div className="Survey">
                <Link to="/bamx/encuestas/registros">
                    <Card icon={faSquarePollHorizontal} title="Registros" />
                </Link>
                <Link to="/bamx/encuestas/graficas">
                    <Card icon={faChartPie} title="Gráficas" />
                </Link>

            </div>

            {/* <section>
                <Outlet/>
            </section> */}
        </>
    );
}

export default Survey;
