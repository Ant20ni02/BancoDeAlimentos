const MultiStepButtons = ({ step, setStep, steps }) => {
    return (
        <div className='buttons'>
            {!isFirstStep && <button onClick={previous}><FontAwesomeIcon /* className="table-icon" */ icon={faArrowLeft} />{/* Anterior */}</button>}
            {/* <button onClick={previous} disabled={currentStepIndex === 0}>Previous</button> */}

            {!isLastStep && <button onClick={next}><FontAwesomeIcon /* className="table-icon" */ icon={faArrowRight} />{/* Siguiente */}</button>}
            {/* <button onClick={next} disabled={currentStepIndex === steps.length - 1}>Next</button> */}
                
            {!isFirstStep && <button onClick={reset}><FontAwesomeIcon /* className="table-icon" */ icon={faRotateLeft} />{/* Volver al principio */}</button>}
            {/* <button onClick={reset}>Reset</button> */}

            {/* <button onClick={() => goTo(1)}>Ir a</button> */}
            <input type="number" min="1" max={steps.length} value={currentStepIndex + 1} onChange={e => goTo(e.target.value - 1)} />
        </div>
    );
}

export default MultiStepButtons;
