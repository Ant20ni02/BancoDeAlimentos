import TextHeader from '../../components/TextHeader';
import Table from '../../components/Table';
import SurveysData from '../../data/surveys';

function Records() {
    let surveys = SurveysData();
    return (
        <>
            <TextHeader text="Registros" />
            <Table data={surveys} />
        </>
    );
}

export default Records;
