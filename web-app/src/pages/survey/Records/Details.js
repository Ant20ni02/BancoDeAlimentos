import { useState, useEffect } from 'react';
import TextQuestion from "../../../components/Records/TextQuestion";
import CheckboxQuestion from "../../../components/Records/CheckboxQuestion";
import {Link, useParams} from "react-router-dom";
//import LinkButton from "../../../components/LinkButton";
import '../../../styles/Details.css';
import url from '../../../config/API';
import QuestionsText from "../../../data/Questions-text";
import QuestionsCheckbox from "../../../data/Questions-checkbox";

function Details() {
    const {idSurvey} = useParams();
    const [surveyData, setSurveyData] = useState({
        idFamily: "No hay datos",
        idSurvey: 0,
        latitude: 0,
        longitude: 0,
        familyLastName: "No hay datos",
        date_: "00-00-0000"
    });

    const getSurveyData = async (e) => {
    
        const response = await fetch(url+`getFamilyById/${idSurvey}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setSurveyData(data);
    }

    useEffect(() => {
        getSurveyData();
      }, []);

    return (
        <div className="Details">
            <div className="Question-header">
                <h1 className="title">Encuesta: {surveyData.familyLastName + '-' + surveyData.idFamily + '-' + surveyData.idSurvey}</h1>      
                <h3 className="date">Fecha: {surveyData.date_}</h3>
                <h3 className="location">Ubicación: {surveyData.latitude+ ", " + surveyData.longitude}</h3>
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
