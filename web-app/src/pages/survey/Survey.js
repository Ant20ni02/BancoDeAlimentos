import React from 'react';
import { Link } from 'react-router-dom';
import TextHeader from '../../components/TextHeader';
import Card from '../../components/Card';
import '../../styles/Survey.css';
import { faChartPie, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';

function Survey() {
    return (
        <>
            <TextHeader text="Survey" />
            <div className="Survey">
                <Link to="/registros">
                    <Card icon={faSquarePollHorizontal} title="Registros" />
                </Link>
                <Link to="/graficas">
                    <Card icon={faChartPie} title="Gráficas" />
                </Link>
            </div>
        </>
    );
}

export default Survey;
