import { Link } from 'react-router-dom';
import '../styles/Table.css';

const Table = ({ data }) => {

    return (
        <table className="Table">
            <caption className="Caption">Tabla de registros</caption>

            <thead>
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Familia</th>
                    <th scope="col">Identidicador</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Latitud</th>
                    <th scope="col">Longitud</th>
                    <th scope="col">Encuesta</th>
                </tr>
            </thead>

            <tbody>
                {Object.entries(data).map(([key, { familyLastName, idFamily, date_, latitude, longitude, idSurvey}]) => (
                    <tr key = {key}>
                        <th className="counterCell"></th>
                        <td><Link to={`/bamx/encuestas/registros/detalles/${idSurvey}`}>{idFamily}{familyLastName}</Link></td>
                        <td><Link to={`/bamx/encuestas/registros/detalles/${idSurvey}`}>{idFamily}</Link></td>
                        <td><Link to={`/bamx/encuestas/registros/detalles/${idSurvey}`}>{date_}</Link></td>
                        <td><Link to={`/bamx/encuestas/registros/detalles/${idSurvey}`}>{latitude}</Link></td>
                        <td><Link to={`/bamx/encuestas/registros/detalles/${idSurvey}`}>{longitude}</Link></td>
                        <td><Link to={`/bamx/encuestas/registros/detalles/${idSurvey}`}>{idSurvey}</Link></td>
                    </tr>
                ))}
            </tbody>

            <tfoot>
                <tr>
                    <th scope="row" colSpan="7">Total: {data.length}</th>
                </tr>
            </tfoot>
        </table>
    );
}

export default Table;
