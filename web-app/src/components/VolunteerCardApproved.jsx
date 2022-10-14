import { useState, useId } from 'react';
import '../styles/VolunteerCardApproved.css';
import url from '../config/API';
import PortalModal from '../components/PortalModal';

const VolunteerCard = ({ volunteer }) => {
	const [active, setActive] = useState(true);
    const [visible, setVisible]= useState("visible")
	const id = useId();

    const [showModalActive, setShowModalActive] = useState(false);
	const [showModalDisable, setShowModalDisable] = useState(false);

    const handleStatus = () => {
		setActive(!active);
		if (active) {
            setShowModalActive(true);
            changeStatus();
            setVisible("hidden");
		} else {
            setShowModalDisable(true);
			changeStatus();
            setVisible("visible");
		}
	};

    const changeStatus = async (e) => {
    
        const response = await fetch(url+`changeActiveStatus/${volunteer.idUser}`,{method: 'PUT',
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
                        <div className="status">
								<input type="checkbox" id={`${id}-switch`} className="toggle-status" checked onChange={handleStatus}/>
								<label className="toggle-status" htmlFor={`${id}-switch`}></label>
						</div>
                    </div>
            </div>

            <PortalModal onShow={showModalActive} onClose={() => setShowModalActive(false)} title="¡Voluntario desactivado exitosamente!">
				<p>El <u>voluntario</u> fue <b>desactivado</b> exitosamente.</p>
			</PortalModal>

			<PortalModal onShow={showModalDisable} onClose={() => setShowModalDisable(false)} title="¡Voluntario fue activado exitosamente!">
				<p>El <u>voluntario</u> fue <b>activado</b> exitosamente.</p>
			</PortalModal> 
        </div>
    );
}

export default VolunteerCard;
