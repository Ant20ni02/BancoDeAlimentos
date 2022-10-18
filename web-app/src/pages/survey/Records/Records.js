import "../../../styles/Records.css";
import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";
import TextHeader from "../../../components/TextHeader";
import styles from "../../../styles/Tooltip.module.css";
import url from "../../../config/API";
import useMultiStep from "../../../custom-hooks/MultiPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

function Records() {
	const recordsPerPage = 5;
	const [surveys, setSurveys] = useState({ data: [] });
	const { maxPage, page, isFirstStep, isLastStep, next, previous, reset, goTo, pageValues } = useMultiStep({
		values: surveys.data,
		pageSize: recordsPerPage,
	});
	
	useEffect(() => {
		getSurveys();
	}, []);
	
	const getSurveys = async (e) => {
		const response = await fetch(url + "getFamilyTables", {
			method: "GET",
			headers: { "x-access-token": localStorage.getItem("token") },
		});
		const data = await response.json();
		setSurveys({ data });
	};
	
	return (
		<>
			<TextHeader text="Registros" />
      		<div className="Records">
        		<Table data={pageValues} />
			</div>
			
			<div className="steps">
				{page + 1} / {maxPage}
      		</div>
			
			<div className="buttons">
				{ !isFirstStep &&
					<button onClick={previous} className={styles.stepBtn} data-tooltip="Anterior">
						<FontAwesomeIcon /* className="table-icon" */ icon={faArrowLeft} />
					</button>
				}

				{ !isLastStep &&
					<button onClick={next} className={styles.stepBtn} data-tooltip="Siguiente">
						<FontAwesomeIcon /* className="table-icon" */ icon={faArrowRight} />
					</button>		
				}

				{ !isFirstStep &&
					<button onClick={reset} className={styles.stepBtn} data-tooltip="Reiniciar">
						<FontAwesomeIcon /* className="table-icon" */ icon={faRotateLeft} />
					</button>
				}
				
				<input type="number" min="1" max={maxPage} value={page + 1} onChange={(e) => goTo(e.target.value - 1)}/>
			</div>
		</>
	);
}

export default Records;
