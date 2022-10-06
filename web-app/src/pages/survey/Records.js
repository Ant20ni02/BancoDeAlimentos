import TextHeader from '../../components/TextHeader';
import Table from '../../components/Table';
import surveys from '../../data/surveys';

function Records() {
    return (
        <>
            <TextHeader text="Registros" />
            <Table data={surveys} />
        </>
    );
}

export default Records;
