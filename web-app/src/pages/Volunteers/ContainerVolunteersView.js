import '../../styles/ContainerVolunteersView.css';

import VolunteerCardRequest from '../../components/VolunteerCardRequest';
import VolunteerCardApproved from '../../components/VolunteerCardApproved';

import useMultiStep from '../../custom-hooks/MultiStep';

function ContainerVolunteersView({value, user}) {
    /* const { data, loading, error } = useQuery(GET_VOLUNTEERS);

    if (loading) return <Loading />;
    if (error) return <Error />; */

    return (
        <div className="containerVolunteersView">
            {value === "approved" && Object.entries(user).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
                <VolunteerCardApproved volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
            ))}
            {value === "request" && Object.entries(user).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
                <VolunteerCardRequest volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
            ))}
      	</div>
    );
}

export default ContainerVolunteersView;
