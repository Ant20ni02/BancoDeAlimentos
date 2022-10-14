/* import { Link } from react-DOMRectList; */
import '../styles/Table.css';

const Table = ({ data, newSurveys }) => {

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
                {Object.entries(newSurveys).map(([key, { familyLastName, idFamily, date_, latitude, longitude, idSurvey}]) => (
                    <tr key = {key}>
                        <th className="counterCell"></th>
                        <td>{/* <Link> */}{familyLastName}{/* </Link> */}</td>
                        <td>{idFamily}</td>
                        <td>{date_}</td>
                        <td>{latitude}</td>
                        <td>{longitude}</td>
                        <td>{/* <Link to={`/detalles?:${idSurvey}`}> */}{idSurvey}{/* </Link> */}</td>
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
