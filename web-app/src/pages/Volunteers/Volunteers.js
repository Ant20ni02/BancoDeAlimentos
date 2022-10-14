import React, { useEffect, useState } from "react";
import TextHeader from '../../components/TextHeader';
import '../../styles/Volunteers.css'
import url from '../../config/API';
import VolunteerCardRequest from '../../components/VolunteerCardRequest';
import VolunteerCardApproved from '../../components/VolunteerCardApproved';

function Volunteers() {
	const [value, setValue] = useState('approved');
	const [user, setUser] = useState({
        age: 0,
        email: "No hay datos",
        firstName: "No hay datos",
        idUser: 0,
        isActive: 0,
        lastName: "No hay datos",
        password_: "No hay datos",
        phoneNumber: "No hay datos",
        sex: "N/A",
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
        setUser(data);
		console.log(data);
    }

	const getInactive = async (e) => {
    
        const response = await fetch(url+`getInactiveVolunteers`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setUser(data);
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
					<option value="approved">Aceptados</option>
					<option value="request">Solicitudes</option>
				</select>
			</div>
      		<div className="Volunteers">
			  	{value === "approved" && Object.entries(user).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
					<VolunteerCardApproved volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
				))}
				{value === "request" && Object.entries(user).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
					<VolunteerCardRequest volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
				))}
      		</div>
    	</>
  	);
}

export default Volunteers;
