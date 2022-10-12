import TextHeader from '../components/TextHeader';
import '../styles/Volunteers.css';
import VolunteerCardRequest from '../components/VolunteerCardRequest';
import VolunteerCardApproved from '../components/VolunteerCardApproved';
import volunteersRequest from '../data/volunteers-request';
import volunteersApproved from '../data/volunteers-approved';

function Volunteers() {
	/* const [user, setUser] = useState({
        idUser: 0,
		firstName: "",
		lastName: "",
		"email": "cool@gmail.zom",
		age: 0,
		sex: "",
		phoneNumber: "",
		isActive: 0
    });

    useEffect(()=>{
        getVolunteers();
    }, []);

    const getVolunteers = async (e) => {
    
        const response = await fetch(url+'getVolunteers',{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setSurveys(data);
    } */

	/* const displayApproved = () => {
		setActive(true);
	}; */

	/* const displayRequest = () => {
		setRequest(true); */
		/* if (!active) {
			
		}   */
	/* }; */

	return (
    	<>
      		<TextHeader text="Voluntarios" />
			<div className='Filter'>
				<select className='Sort'>
					<option selected disabled hidden>Filtrar</option>
					<option value="approved" /* onClick={displayApproved} */>Aceptados</option>
					<option value="request" /* onClick={displayRequest} */>Solicitudes</option>
				</select>
			</div>
      		<div className="Volunteers">
				{
					volunteersRequest.map((volunteer) => (
						<VolunteerCardRequest volunteer={volunteer} />
					))
				}

				{
					volunteersApproved.map((volunteer) => (
						<VolunteerCardApproved volunteer={volunteer} />
					))
				}
      		</div>
    	</>
  	);
}

export default Volunteers;
