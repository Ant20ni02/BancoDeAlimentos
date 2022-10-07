import React, { useEffect, useState } from 'react'
import TextHeader from '../components/TextHeader';
import DisplayText from '../components/DisplayText';
import url from '../config/API';
import '../styles/Profile.css';

function Profile() {
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
        //e.preventDefault();

        const idUser = localStorage.getItem('idUser');
    
        const response = await fetch(url+`getUsersData/${idUser}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setUser(data[0]);
    }

    return (
        <>
            <TextHeader text="Profile" />
            <div className="Profile">
                <DisplayText text={user.firstName} />
                <DisplayText text={user.lastName} />
                <DisplayText text={user.email} />
                <DisplayText text={user.phoneNumber} />
                
                {/* //TODO: Feature 'Update profile' */}
            </div>
        </>
    );
}

export default Profile;