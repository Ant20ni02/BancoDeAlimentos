import React, { useEffect, useState } from 'react'
import TextHeader from '../../../components/TextHeader';
import Table from '../../../components/Table';
import url from '../../../config/API';
import '../../../styles/Records.css';
import styles from '../../../styles/Tooltip.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import useMultiStep from '../../../custom-hooks/MultiStep';

function Records() {
    const recordsPerPage = 10
    const [surveys, setSurveys] = useState({data: []});
    const {currentStepIndex, step, steps, isFirstStep, isLastStep, next, previous, reset, goTo, } = useMultiStep([
        <Table data={surveys} />,
        <Table data={surveys} />,
        <Table data={surveys} />
    ]);
    {/* <Table surveys={surveys} />,
    <TextHeader text="Step 2" /> */}
    /*surveys.slice((currentStepIndex+1) * recordsPerPage - recordsPerPage, (currentStepIndex+1) * recordsPerPage - 1)*/
    useEffect(()=>{
        getSurveys();
        }, []);

    const getSurveys = async (e) => {
    
        const response = await fetch(url+'getFamilyTables',{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setSurveys(data);
    }
    return (
        <>
            <TextHeader text="Registros" />
            <div className='Records'>
                { !(surveys.length === undefined) ?
                React.cloneElement(step, {newSurveys: surveys.slice((currentStepIndex+1)*5-5, (currentStepIndex+1)*5)}):[]}
            </div>
            <div className='steps'> {currentStepIndex + 1} / {steps.length} </div>
            <div className='buttons'>
                {!isFirstStep && <button onClick={previous} className={styles.stepBtn} data-tooltip="Anterior"><FontAwesomeIcon /* className="table-icon" */ icon={faArrowLeft} />{/* Anterior */}</button>}
                {/* <button onClick={previous} disabled={currentStepIndex === 0}>Previous</button> */}

                {!isLastStep && <button onClick={next} className={styles.stepBtn} data-tooltip="Siguiente"><FontAwesomeIcon /* className="table-icon" */ icon={faArrowRight} />{/* Siguiente */}</button>}
                {/* <button onClick={next} disabled={currentStepIndex === steps.length - 1}>Next</button> */}
                
                {!isFirstStep && <button onClick={reset} className={styles.stepBtn} data-tooltip="Reiniciar"><FontAwesomeIcon /* className="table-icon" */ icon={faRotateLeft} />{/* Volver al principio */}</button>}
                {/* <button onClick={reset}>Reset</button> */}

                {/* <button onClick={() => goTo(1)}>Ir a</button> */}
                <input type="number" min="1" max={steps.length} value={currentStepIndex + 1} onChange={e => goTo(e.target.value - 1)} />
            </div>
        </>
    );
}

export default Records;
