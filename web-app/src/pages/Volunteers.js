import { useState, useId } from 'react';
import TextHeader from '../components/TextHeader';
import VolunteerCard from '../components/VolunteerCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Volunteers.css';
import PortalModal from '../components/PortalModal';

function Volunteers() {
	const id = useId();
	const [request, setRequest] = useState(true);
	const [active, setActive] = useState(false);

	const [showModalDecline, setShowModalDecline] = useState(false);
	const [showModalApprove, setShowModalApprove] = useState(false);

	const [showModalActive, setShowModalActive] = useState(false);
	const [showModalDisable, setShowModalDisable] = useState(false);
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

	const displayApproved = () => {
		setActive(true);
	};

	const displayRequest = () => {
		setRequest(true);
		/* if (!active) {
			
		}   */
	};

	/** @note remove request */
    const handleDecline = () => {
		setRequest(false);
		setShowModalDecline(true);
    }

    const handleApprove = () => {
		setActive(true);
		setShowModalApprove(true);
    }

	const handleStatus = () => {
		setActive(!active);
		if (active) {
			setShowModalActive(true);
		} else {
			setShowModalDisable(true);
		}
	};

	return (
    	<>
      		<TextHeader text="Voluntarios" />
			<div className='Filter'>
				<select className='Sort'>
					<option selected disabled hidden>Filtrar</option>
					<option value="approved" onClick={displayApproved}>Aceptados</option>
					<option value="request" onClick={displayRequest}>Solicitudes</option>
				</select>
			</div>
      		<div className="Volunteers">
				{
					request &&
					<VolunteerCard>
						<span className='status'><FontAwesomeIcon className="status-decline" icon={faTimesCircle} onClick={handleDecline} /><FontAwesomeIcon className="status-accept" icon={faCircleCheck} onClick={handleApprove} /></span>
					</VolunteerCard>
				}

				{/* {
					active && */}
					<VolunteerCard>
						<div className="status">
							<input type="checkbox" id={`${id}-switch`} className="toggle-status" /* checked */ onChange={handleStatus}/>
							<label className="toggle-status" htmlFor={`${id}-switch`}></label>
						</div>
					</VolunteerCard>
				{/* } */}

				<PortalModal onShow={showModalDecline} onClose={() => setShowModalDecline(false)} title="¡Solicitud rechazada exitosamente!">
					<p>La solicitud del <u>voluntario</u> fue <b>rechazada</b> exitosamente.</p>
				</PortalModal>

				<PortalModal onShow={showModalApprove} onClose={() => setShowModalApprove(false)} title="¡Solicitud aceptada exitosamente!">
					<p>La solicitud del <u>voluntario</u> fue <b>aceptada</b> exitosamente.</p>
				</PortalModal>

				<PortalModal onShow={showModalActive} onClose={() => setShowModalActive(false)} title="¡Voluntario desactivado exitosamente!">
					<p>El <u>voluntario</u> fue <b>desactivado</b> exitosamente.</p>
				</PortalModal>

				<PortalModal onShow={showModalDisable} onClose={() => setShowModalDisable(false)} title="¡Voluntario fue activado exitosamente!">
					<p>El <u>voluntario</u> fue <b>activado</b> exitosamente.</p>
				</PortalModal> 
      		</div>
    	</>
  	);
}

export default Volunteers;
