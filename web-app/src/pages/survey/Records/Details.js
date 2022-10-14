import { useState, useEffect } from 'react';
import TextQuestion from "../../../components/Records/TextQuestion";
import CheckboxQuestion from "../../../components/Records/CheckboxQuestion";
import {Link, useParams} from "react-router-dom";
//import LinkButton from "../../../components/LinkButton";
import '../../../styles/Details.css';
import url from '../../../config/API';

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

    const [question1, setQuestion1] = useState({
        id: 1,
        question: "Pregunta 1: ¿Cuántos integrantes son en su familia (incluyéndolo)?",
        answer: "No hay datos"
    })

    const [question2, setQuestion2] = useState({
        id: 2,
        question: "¿En qué rango de edad se encuentra cada uno de ellos y cuántos son?",
        options: [],
    });

    

    /*----------------------------------------------------------------------------------------------------------*/ 

    const getSurveyData = async (e) => {
    
        const response = await fetch(url+`getFamilyById/${idSurvey}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setSurveyData(data);
    }

    const getQuestion1 = async (e) => {
    
        const response = await fetch(url+`getAnswerByIdQuestion/${idSurvey}/${1}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setQuestion1({
            id: 1,
            question: "Pregunta 1: ¿Cuántos integrantes son en su familia (incluyéndolo)?",
            answer: data[0].answer
        });
    };

    const getQuestion2 = async (e) => {
    
        const response = await fetch(url+`getAnswerByIdQuestion/${idSurvey}/${2}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        const ans = data[0].answer;
        console.log(ans);
        let value = [false, false, false, false, false];
        let input = ["","","","",""];
        let control = 0;

        while(control < ans.length){
            if(ans[control] === 'a'){
                value[0] = true;
                input[0] = parseInt(ans[control+1] + ans[control+2]).toString()
                control += 4;
            }
            else if(ans[control] === 'b'){
                value[1] = true;
                input[1] = parseInt(ans[control+1] + ans[control+2]).toString()
                control += 4;
            }
            else if(ans[control] === 'c'){
                value[2] = true;
                input[2] = parseInt(ans[control+1] + ans[control+2]).toString()
                control += 4;
            }
            else if(ans[control] === 'd'){
                value[3] = true;
                input[3] = parseInt(ans[control+1] + ans[control+2]).toString().toString()
                control += 4;
            }
            else{
                value[4] = true;
                input[4] = parseInt(ans[control+1] + ans[control+2]).toString()
                control += 4;
            }
        }

        setQuestion2({
            id: 2,
            question: "¿En qué rango de edad se encuentra cada uno de ellos y cuántos son?",
            options: [
                {
                    id: 1,
                    option: "Infancia (0-5 años)",
                    value: value[0],
                    label: "Infancia (0-5 años)",
                    input: input[0]
                },
                {
                    id: 2,
                    option: "Niñez (6-12 años)",
                    value: value[1],
                    label: "Niñez (6-12 años)",
                    input: input[1]
                },
                {
                    id: 3,
                    option: "Adolscencia (12-18 años)",
                    value: value[2],
                    label: "Adolscencia (12-18 años)",
                    input: input[2]
                },
                {
                    id: 4,
                    option: "Adultez (18-60 años)",
                    value: value[3],
                    label: "Adultez (18-60 años)",
                    input: input[3]
                },
                {
                    id: 5,
                    option: "Adulto mayor (+65 años)",
                    value: value[4],
                    label: "Adulto mayor (+65 años)",
                    input: input[4]
                },
            ],
    });
    };

    /*----------------------------------------------------------------------------------------------------------*/ 

    useEffect(() => {
        getSurveyData();
      }, []);

    useEffect(() => {
    getQuestion1();
    }, []);
    
    useEffect(() => {
    getQuestion2();
    }, []);

    /*----------------------------------------------------------------------------------------------------------*/ 

    return (
        <div className="Details">
            <div className="Question-header">
                <h1 className="title">Encuesta: {surveyData.familyLastName + '-' + surveyData.idFamily + '-' + surveyData.idSurvey}</h1>      
                <h3 className="date">Fecha: {surveyData.date_}</h3>
                <h3 className="location">Ubicación: {surveyData.latitude+ ", " + surveyData.longitude}</h3>
            </div>

            {/* <LinkButton to="/bamx/encuestas/registros" text="Regresar" /> */}

            <Link to="/bamx/encuestas/registros">Regresar</Link>

            <TextQuestion question={question1}/>
            <CheckboxQuestion question={question2} />


        </div>
    );
}

export default Details;
