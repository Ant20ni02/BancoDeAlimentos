import { useState } from 'react';
import '../styles/VolunteerCardRequest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import PortalModal from '../components/PortalModal';
import url from '../config/API';

const VolunteerCardRequest = ({ volunteer}) => {
    const [visible, setVisible]= useState("visible");

    const [showModalDecline, setShowModalDecline] = useState(false);
	const [showModalApprove, setShowModalApprove] = useState(false);
    
    /** @note remove request */
    const handleDecline = () => {
		setShowModalDecline(true);
        deleteUser();
        setVisible("hidden");
    }

    const handleApprove = () => {
        setShowModalApprove(true);
        changeStatus();
        setVisible("hidden");
    }

    const changeStatus = async (e) => {
    
        const response = await fetch(url+`changeActiveStatus/${volunteer.idUser}`,{method: 'PUT',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        console.log(data.mensaje);
    }

    const deleteUser = async (e) => {
    
        const response = await fetch(url+`deleteUser/${volunteer.idUser}`,{method: 'DELETE',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        console.log(data.mensaje);
    }

    return (
        <div>
            <div style={{visibility: visible}} className="volunteer-card">
                {/* <img src={volunteer.image} alt={volunteer.name} /> */}
                    <div className="volunteer-card-info">
                        <h2>{volunteer.firstName} {volunteer.lastName}</h2>
                        <span>{volunteer.email}</span>
                        <span>{volunteer.age}</span>
                        <span>{volunteer.sex}</span>
                        <span>{volunteer.phoneNumber}</span>
                        <span className='status'><FontAwesomeIcon className="status-decline" icon={faTimesCircle} onClick={handleDecline} /><FontAwesomeIcon className="status-accept" icon={faCircleCheck} onClick={handleApprove} /></span>
                    </div>
            </div>

            <PortalModal onShow={showModalDecline} onClose={() => setShowModalDecline(false)} title="¡Solicitud rechazada exitosamente!">
				<p>La solicitud del <u>voluntario</u> fue <b>rechazada</b> exitosamente.</p>
			</PortalModal>

			<PortalModal onShow={showModalApprove} onClose={() => setShowModalApprove(false)} title="¡Solicitud aceptada exitosamente!">
				<p>La solicitud del <u>voluntario</u> fue <b>aceptada</b> exitosamente.</p>
			</PortalModal>
        </div>
    );
}

export default VolunteerCardRequest;
