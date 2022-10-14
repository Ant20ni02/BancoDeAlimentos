import '../../styles/ContainerVolunteersView.css';

import VolunteerCardRequest from '../../components/VolunteerCardRequest';
import VolunteerCardApproved from '../../components/VolunteerCardApproved';

import volunteersRequest from '../../data/volunteers-request';
import volunteersApproved from '../../data/volunteers-approved';

import useMultiStep from '../../custom-hooks/MultiStep';

function ContainerVolunteersView() {
    /* const { data, loading, error } = useQuery(GET_VOLUNTEERS);

    if (loading) return <Loading />;
    if (error) return <Error />; */

    return (
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
    );
}

export default ContainerVolunteersView;
