import '../../styles/ContainerVolunteersView.css';
import VolunteerCardApproved from '../../components/VolunteerCardApproved';
import VolunteerCardRequest from '../../components/VolunteerCardRequest';
import styles from '../../styles/Tooltip.module.css';
import useMultiStep from "../../custom-hooks/MultiPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

function ContainerVolunteersView({value, user}) {

    const volunteersPerPage = 5;
    const { maxPage, page, isFirstStep, isLastStep, next, previous, reset, goTo, pageValues } = useMultiStep({
        values: user,
        pageSize: volunteersPerPage,
    });

    /* const { data, loading, error } = useQuery(GET_VOLUNTEERS);

    if (loading) return <Loading />;
    if (error) return <Error />; */

    return (
        <>
            <div className="containerVolunteersView">
                {value === "approved" && Object.entries(user).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
                    <VolunteerCardApproved volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
                ))}
                {value === "request" && Object.entries(user).map(([key, { firstName, lastName, email, age, sex, phoneNumber, idUser}]) => (
                    <VolunteerCardRequest volunteer={{firstName: firstName, lastName: lastName, email: email, age: age, sex: sex, phoneNumber: phoneNumber, idUser: idUser}}/>
                ))}
            </div>

            <div className='buttons'>
                { !isFirstStep  && 
                    <button onClick={previous} className={styles.stepBtn} data-tooltip="Anterior"><FontAwesomeIcon icon={faArrowLeft} /></button>
                }

                { !isLastStep  && 
                    <button onClick={next} className={styles.stepBtn} data-tooltip="Siguiente"><FontAwesomeIcon icon={faArrowRight} /></button>
                }

                { !isFirstStep  && 
                    <button onClick={reset} className={styles.stepBtn} data-tooltip="Reiniciar"><FontAwesomeIcon icon={faRotateLeft} /></button>
                }

                <input type="number" min="1" max={maxPage} value={page + 1} onChange={e => goTo(e.target.value - 1)} />
            </div>
        </>
    );
}

export default ContainerVolunteersView;
