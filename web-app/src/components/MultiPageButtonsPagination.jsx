import paginationButtons from "../styles/MultiPageButtonsPagination.module.css";
import tooltip from "../styles/Tooltip.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const MultiPageButtonsPagination = ({ maxPage, page, isDataGreaterThanPageSize, isFirstStep, isLastStep, next, previous, reset, goTo }) => {
    return (
        <footer>
            {isDataGreaterThanPageSize && (
                <div className={paginationButtons.pages}>
                    {page + 1} / {maxPage}
                </div>
            )}
            <div className={paginationButtons.paginationButtons}>
                {
                    !isFirstStep && (
                        <button onClick={previous} className={tooltip.stepBtn} data-tooltip="Anterior">
                            <FontAwesomeIcon /* className="table-icon" */ icon={faArrowLeft} />
                        </button>
                    )
                }

                {
                    !isLastStep && (
                        <button onClick={next} className={tooltip.stepBtn} data-tooltip="Siguiente">
                            <FontAwesomeIcon /* className="table-icon" */ icon={faArrowRight} />
                        </button>
                    )
                }

                {
                    !isFirstStep && (
                        <button onClick={reset} className={tooltip.stepBtn} data-tooltip="Reiniciar">
                            <FontAwesomeIcon /* className="table-icon" */ icon={faRotateLeft} />
                        </button>
                    )
                }

                {
                    isDataGreaterThanPageSize && (
                        <input type="number" min="1" max={maxPage} value={page + 1} onInput={(e) => goTo(e.target.value - 1)}/>
                    )
                }
            </div>
        </footer>
    );
};

export default MultiPageButtonsPagination;
