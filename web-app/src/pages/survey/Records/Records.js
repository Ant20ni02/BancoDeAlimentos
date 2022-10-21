import "../../../styles/Records.css";
import EmptyPage from '../../../components/EmptyPage';
import FamilyIcon from '../../../images/icons/family.png';
import MultiPageButtonsPagination from "../../../components/MultiPageButtonsPagination";
import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';
import Table from "../../../components/Table";
import TextHeader from "../../../components/TextHeader";
import url from "../../../config/API";
import useMultiPage from "../../../custom-hooks/useMultiPage";
import useTabTitle from "../../../custom-hooks/useTabTitle";

function Records() {
	const navigate = useNavigate();
	useTabTitle("BAMX - Registros");
	const recordsPerPage = 5;
	const [surveys, setSurveys] = useState({ data: [] });
	const { maxPage, page, isDataGreaterThanZero, isDataGreaterThanPageSize, isFirstStep, isLastStep, next, previous, reset, goTo, pageValues } = useMultiPage({
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
		if(data.mensaje !== undefined && data.mensaje === "Token inválido"){
			localStorage.removeItem("token");
        	localStorage.removeItem("idUser");
        	navigate("/inicio-de-sesion", { replace: true });
		}
		setSurveys({ data });
	};
	
	return (
		<>
			<TextHeader text="Registros" />

			{
				isDataGreaterThanZero ? (
					<>
						<div className="Records">
							<Table data={pageValues} />
						</div>

						<MultiPageButtonsPagination maxPage={maxPage} page={page} isDataGreaterThanPageSize={isDataGreaterThanPageSize} isFirstStep={isFirstStep} isLastStep={isLastStep} next={next} previous={previous} reset={reset} goTo={goTo} />
					</>
				) : (
					<EmptyPage header="No hay familias ni encuestas registras" image={FamilyIcon} />
				)
			}
		</>
	);
}

export default Records;
