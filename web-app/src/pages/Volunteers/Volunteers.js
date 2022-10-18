import TextHeader from '../../components/TextHeader';
import { useEffect, useState } from "react";
import '../../styles/Volunteers.css';
import url from '../../config/API';
import styles from '../../styles/Tooltip.module.css';
import useMultiStep from "../../custom-hooks/MultiPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import VolunteerCardApproved from '../../components/VolunteerCardApproved';
import VolunteerCardRequest from '../../components/VolunteerCardRequest';

function Volunteers() {
	const volunteersPerPage = 5;
	
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

	const { maxPage, page, isFirstStep, isLastStep, next, previous, reset, goTo, pageValues } = useMultiStep({
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
        setUser({data});
		console.log(data);
    }

	const getInactive = async (e) => {
    
        const response = await fetch(url+`getInactiveVolunteers`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setUser({data});
		console.log(data);
    }

	useEffect(() => {
		getActive();
	}, []);

	return (
    	<>
      		<TextHeader text="Voluntarios" />
			<div className='Filter'>
				<select value={value} onChange={handleChange} className='Sort'>
					{/* <option selected disabled hidden>Filtrar</option> */}
					<option value="approved">Aceptados</option>
					<option value="request">Solicitudes</option>
				</select>
			</div>

			<div className="Volunteers">
				{value === "approved" && Object.entries(pageValues).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
                    <VolunteerCardApproved volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
                ))}
                {value === "request" && Object.entries(pageValues).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
                    <VolunteerCardRequest volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
                ))}
			</div>

			{/* {value === 'approved' ? (
				<div className='Volunteers'>
					{pageValues.map((volunteer) => (
						<VolunteerCardApproved volunteer={volunteer} />
					))}
				</div>
			) : (
				<div className='Volunteers'>
					{pageValues.map((volunteer) => (
						<VolunteerCardRequest volunteer={volunteer} />
					))}
				</div>
			)} */}

			{
				/* if array is less than zero don't appear buttons  */
				user.data.length > 0 && (
					<div className='buttons'>
						{ !isFirstStep  && 
							<button onClick={previous} className={styles.stepBtn} data-tooltip="Anterior"><FontAwesomeIcon icon={faArrowLeft} /></button>
						}

						{ !isLastStep  && 
							<button onClick={next} className={styles.stepBtn} data-tooltip="Siguiente"><FontAwesomeIcon icon={faArrowRight} /></button>
						}

						{ !isFirstStep  && 
							<button onClick={reset} className={styles.stepBtn} data-tooltip="Reiniciar"><FontAwesomeIcon icon={faRotateLeft} /></button>
						}

						<input type="number" min="1" max={maxPage} value={page + 1} onChange={e => goTo(e.target.value - 1)} />
					</div>
				)
			}
			
    	</>
  	);
}

export default Volunteers;
