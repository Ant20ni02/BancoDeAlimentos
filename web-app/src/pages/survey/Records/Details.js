import TextQuestion from "../../../components/Records/TextQuestion";
import CheckboxQuestion from "../../../components/Records/CheckboxQuestion";
import LinkButton from "../../../components/LinkButton";
import '../../../styles/Details.css';
import {Link} from "react-router-dom";
import QuestionsText from "../../../data/Questions-text";
import QuestionsCheckbox from "../../../data/Questions-checkbox";

function Details() {
    return (
        <div className="Details">
            <div className="Question-header">
                <h1 className="title">Encuesta: FSANCHEZ-IDF2-E3</h1>      
                <h3 className="date">Fecha: 13/09/2022</h3>
                <h3 className="location">Ubicación: 18.805649, -99.221640</h3>
            </div>

            {/* <LinkButton to="/bamx/encuestas/registros" text="Regresar" /> */}

            <Link to="/bamx/encuestas/registros">Regresar</Link>

            {
                QuestionsText.map((question) => (
                    <TextQuestion question={question} />
                ))
            }

            {
                QuestionsCheckbox.map((question) => (
                    <CheckboxQuestion question={question} />
                ))
            }

        </div>
    );
}

export default Details;
