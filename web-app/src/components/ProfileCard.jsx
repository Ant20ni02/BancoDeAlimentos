import React, { useEffect, useState } from 'react'
import url from '../config/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock, faVenusMars, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProfileCard.css';
import Profile from '../images/profile.jpg';

const ProfileCard = () => {

    const [user, setUser] = useState({
        age: 0,
        email: "No hay datos",
        firstName: "No hay datos",
        idUser: 0,
        isActive: 0,
        lastName: "No hay datos",
        password_: "No hay datos",
        phoneNumber: "No hay datos",
        sex: "f",
    });

    useEffect(()=>{
        getUser();
    }, []);

    const getUser = async (e) => {

        const idUser = localStorage.getItem('idUser');
    
        const response = await fetch(url+`getUsersData/${idUser}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setUser(data);
    }

    return (
        <div className="Profile-card">
            <header>
                <img src={Profile} alt={user.name} />
                <h2>{user.firstName} {user.lastName}</h2>
            </header>

            <div className='Profile-card__main'>
                <div className='Profile-card__item'>
                    <FontAwesomeIcon icon={faEnvelope} className="profile-card-icon"/>
                    <span>{user.email}</span>
                </div>

                <div className='Profile-card__item'>
                    <FontAwesomeIcon icon={faCalendar} className="profile-card-icon"/>
                    <span>{user.age}</span>
                </div>

                <div className='Profile-card__item'>
                    <FontAwesomeIcon icon={faVenusMars} className="profile-card-icon"/>
                    <span>{user.sex}</span>
                </div>

                <div className='Profile-card__item'>
                    <FontAwesomeIcon icon={faPhone} className="profile-card-icon"/>
                    <span>{user.phoneNumber}</span>
                </div>
            </div>

            <footer>
                <span>Admin</span>
            </footer>
        </div>
    );
}

export default ProfileCard;
