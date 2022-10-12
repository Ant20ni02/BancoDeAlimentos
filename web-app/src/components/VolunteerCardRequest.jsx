import { useState } from 'react';
import '../styles/VolunteerCardRequest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import PortalModal from '../components/PortalModal';

const VolunteerCardRequest = ({ volunteer}) => {
	const [request, setRequest] = useState(true);

    const [showModalDecline, setShowModalDecline] = useState(false);
	const [showModalApprove, setShowModalApprove] = useState(false);
    
    /** @note remove request */
    const handleDecline = () => {
		setShowModalDecline(true);
    }

    const handleApprove = () => {
		setShowModalApprove(true);
    }

    return (
        <>
            <div className="volunteer-card">
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
        </>
    );
}

export default VolunteerCardRequest;
