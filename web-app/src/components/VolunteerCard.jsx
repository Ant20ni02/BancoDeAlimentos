import '../styles/VolunteerCard.css';
import url from '../config/API';

const VolunteerCard = ({ volunteer, children }) => {
    return (
        <div className="volunteer-card">
            {/* <img src={volunteer.image} alt={volunteer.name} /> */}
                <div className="volunteer-card-info">
                    <h2>Maria Perez Sanchez{/* {volunteer.firstName} {volunteer.lastName} */}</h2>
                    <span>mariaperezsanchez@email.com{/* {volunteer.email} */}</span>
                    <span>22{/* {volunteer.age} */}</span>
                    <span>Femenina{/* {volunteer.sex} */}</span>
                    <span>7773856463{/* {volunteer.phoneNumber} */}</span>
                    {children}
                </div>
        </div>
    );
}

export default VolunteerCard;
