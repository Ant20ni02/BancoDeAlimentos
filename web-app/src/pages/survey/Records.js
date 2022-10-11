import React, { useEffect, useState } from 'react'
import TextHeader from '../../components/TextHeader';
import Table from '../../components/Table';
import url from '../../config/API';
import '../../styles/Records.css';
import useMultiStep from '../../custom-hooks/MultiStep';

function Records() {
    const recordsPerPage = 10
    const [surveys, setSurveys] = useState({data: []});
    const {currentStepIndex, step, steps, isFirstStep, isLastStep, next, previous, reset, goTo, } = useMultiStep([
        <Table data={surveys} />,
        <Table data={surveys} />,
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
                {!isFirstStep && <button onClick={previous}>Anterior</button>}
                {/* <button onClick={previous} disabled={currentStepIndex === 0}>Previous</button> */}

                {!isLastStep && <button onClick={next}>Siguiente</button>}
                {/* <button onClick={next} disabled={currentStepIndex === steps.length - 1}>Next</button> */}

                {!isFirstStep && <button onClick={reset}>Reset</button>}
                {/* <button onClick={reset}>Reset</button> */}

                <button onClick={() => goTo(1)}>Go to step 2</button>
            </div>
        </>
    );
}

export default Records;
