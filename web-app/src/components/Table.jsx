const Table = ({ data }) => {
    return (
        <table>

            <caption>Tabla de registros</caption>

            <thead>
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Familia</th>
                    <th scope="col">Identidicador</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Ubicación</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Encuesta</th>
                </tr>
            </thead>

            <tbody>
                {data.map(item => (
                    <tr>
                        <th scope="row">{item.position}</th>
                        <td>{item.family}</td>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.location}</td>
                        <td>{item.phone}</td>
                        <td>{item.survey}</td>
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
