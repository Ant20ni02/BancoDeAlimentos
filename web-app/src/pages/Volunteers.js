import EmptyPage from '../components/EmptyPage';
import TextHeader from '../components/TextHeader';
import VolunteerCardApproved from '../components/VolunteerCardApproved';
import VolunteerCardRequest from '../components/VolunteerCardRequest';
import MultiPageButtonsPagination from '../components/MultiPageButtonsPagination';
import url from '../config/API';
import useMultiPage from "../custom-hooks/useMultiPage";
import volunteers from '../styles/Volunteers.module.css';
import volunteersIcon from '../images/icons/volunteers.png';
import { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';
import useTabTitle from '../custom-hooks/useTabTitle';

function Volunteers() {
	const navigate = useNavigate();
	useTabTitle('BAMX - Voluntarios');
	const volunteersPerPage = 8;
	
	const [value, setValue] = useState('approved');
	/*const [user, setUser] = useState({
        age: 0,
        email: "No hay datos",
        firstName: "No hay datos",
        idUser: 0,
        isActive: 0,
        lastName: "No hay datos",
        password_: "No hay datos",
        phoneNumber: "No hay datos",
        sex: "N/A",
    });*/

	const [user, setUser] = useState({
		data: [{
			age: 0,
			email: "No hay datos",
			firstName: "No hay datos",
			idUser: 0,
			isActive: 0,
			lastName: "No hay datos",
			password_: "No hay datos",
			phoneNumber: "No hay datos",
			sex: "N/A",
		},],
	})

	const { maxPage, page, isDataGreaterThanZero, isDataGreaterThanPageSize, isFirstStep, isLastStep, next, previous, reset, goTo, pageValues } = useMultiPage({
        values: user.data,
        pageSize: volunteersPerPage,
    });

	const handleChange = (event) => {
		setValue(event.target.value);

		if(event.target.value === 'approved'){
			getActive();
		}
		else{
			getInactive();
		}
		console.log(user);
	};

	const getActive = async (e) => {
    
        const response = await fetch(url+`getActiveVolunteers`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
		if(data.mensaje !== undefined && data.mensaje === "Token inválido"){
			localStorage.removeItem("token");
        	localStorage.removeItem("idUser");
        	navigate("/inicio-de-sesion", { replace: true });
		}
        setUser({data});
		console.log(data);
    }

	const getInactive = async (e) => {
    
        const response = await fetch(url+`getInactiveVolunteers`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
		if(data.mensaje !== undefined && data.mensaje === "Token inválido"){
			localStorage.removeItem("token");
        	localStorage.removeItem("idUser");
        	navigate("/inicio-de-sesion", { replace: true });
		}
        setUser({data});
		console.log(data);
    }

	useEffect(() => {
		getActive();
	}, []);

	return (
    	<>
      		<TextHeader text="Voluntarios" />
			<div className={volunteers.filter}>
				<select value={value} onChange={handleChange} className={volunteers.sort}>
					{/* <option selected disabled hidden>Filtrar</option> */}
					<option value="approved">Aceptados</option>
					<option value="request">Solicitudes</option>
				</select>
			</div>

			{
				isDataGreaterThanZero ? (
					<>
						<div className={volunteers.volunteers}>
							{value === "approved" && Object.entries(pageValues).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
								<VolunteerCardApproved volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
							))}
							{value === "request" && Object.entries(pageValues).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
								<VolunteerCardRequest volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
							))}
						</div>
						<MultiPageButtonsPagination maxPage={maxPage} page={page} isDataGreaterThanPageSize={isDataGreaterThanPageSize} isFirstStep={isFirstStep} isLastStep={isLastStep} next={next} previous={previous} reset={reset} goTo={goTo} />
					</>
				) : (
					<EmptyPage header="No hay voluntarios registrados" image={volunteersIcon} />
				)
			}
    	</>
  	);
}

export default Volunteers;
