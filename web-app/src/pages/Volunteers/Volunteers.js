import TextHeader from '../../components/TextHeader';
import { useEffect, useState } from "react";
import '../../styles/Volunteers.css';
import ContainerVolunteersView from './ContainerVolunteersView';
import url from '../../config/API';

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
					{/* <option selected disabled hidden>Filtrar</option> */}
					<option value="approved">Aceptados</option>
					<option value="request">Solicitudes</option>
				</select>
			</div>

			<ContainerVolunteersView value={value} user={user}/>
    	</>
  	);
}

export default Volunteers;
