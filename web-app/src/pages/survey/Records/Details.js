import { useState, useEffect } from 'react';
import TextQuestion from "../../../components/Records/TextQuestion";
import CheckboxQuestion from "../../../components/Records/CheckboxQuestion";
import CheckboxQuestionSpecial from "../../../components/Records/CheckboxQuestionSpecial";
import {Link, useParams} from "react-router-dom";
//import LinkButton from "../../../components/LinkButton";
import '../../../styles/Details.css';
import url from '../../../config/API';

function Details() {
    const {idSurvey} = useParams();

    const [value, setValue] = useState('1');

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
        question: "Pregunta 2: ¿En qué rango de edad se encuentra cada uno de ellos y cuántos son?",
        options: [],
    });

    const [question3, setQuestion3] = useState({
        id: 3,
        question: "Pregunta 3: ¿En su familia alguien presenta alguna de las siguientes enfermedades? Seleccionar cuál(es)?",
        options: [],
    });

    const [question4, setQuestion4] = useState({
        id: 4,
        question: "Pregunta 4: ¿Usted o alguien de su familia está actualmente embarazada? Si su respuesta fue sí, especificar en meses",
        options: [],
    });

    const [question5, setQuestion5] = useState({
        id: 5,
        question: "Pregunta 5: ¿Usted o alguien de su familia está tomando algún suplemento alimenticio? Especificar cuál",
        options: [],
    });

    const [question6, setQuestion6] = useState({
        id: 6,
        question: "Pregunta 6: ¿Usted o alguien de su familia está dando lactancia materna?",
        options: [],
    });

    const [question7, setQuestion7] = useState({
        id: 7,
        question: "Pregunta 7: ¿Cuántas comidas hace al día?",
        options: [],
    });

    const [question8, setQuestion8] = useState({
        id: 8,
        question: "Pregunta 8: ¿Se añade sal a las comidas ya preparadas?",
        options: [],
    });

    const [question9, setQuestion9] = useState({
        id: 9,
        question: "Pregunta 9: ¿Cuál es el ingreso familiar mensual?",
        options: [],
    });

    const [question10, setQuestion10] = useState({
        id: 10,
        question: "Pregunta 10: ¿Qué porcentaje es destinado a la alimentación?",
        options: [],
    });

    const [question11, setQuestion11] = useState({
        id: 11,
        question: "Pregunta 11: Frecuencia de consumo",
        options: [],
    });


    const handleChange = (event) => {
        setValue(event.target.value);
        getQuestion11(event.target.value);
    };

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
            question: "Pregunta 2: ¿En qué rango de edad se encuentra cada uno de ellos y cuántos son?",
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

    const getQuestion3 = async (e) => {
    
        const response = await fetch(url+`getEnfermedadesById/${idSurvey}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let value = [false, false, false, false];
        let input = ["","","",""];
        let newMedicalCondition = 'Otro'
        for (const dataObj of data){
            let ans = dataObj.medicalConditionName;
            if(ans === 'Diabetes'){
                value[0] = true;
                input[0] = dataObj.medicalConditionNumber.toString()
            }
            else if(ans === 'Hipertensión'){
                value[1] = true;
                input[1] = dataObj.medicalConditionNumber.toString()
            }
            else if(ans === 'Obesidad'){
                value[2] = true;
                input[2] = dataObj.medicalConditionNumber.toString()
            }
            else{
                newMedicalCondition = ans;
                value[3] = true;
                input[3] = dataObj.medicalConditionNumber.toString()
            }
        }

        setQuestion3({
            id: 3,
            question: "Pregunta 3: ¿En su familia alguien presenta alguna de las siguientes enfermedades? Seleccionar cuál(es)?",
            options: [
                {
                    id: 1,
                    option: "Diabetes",
                    value: value[0],
                    label: "Diabetes",
                    input: input[0]
                },
                {
                    id: 2,
                    option: "Hipertensión",
                    value: value[1],
                    label: "Hipertensión",
                    input: input[1]
                },
                {
                    id: 3,
                    option: "Obesidad",
                    value: value[2],
                    label: "Obesidad",
                    input: input[2]
                },
                {
                    id: 4,
                    option: newMedicalCondition,
                    value: value[3],
                    label: newMedicalCondition,
                    input: input[3]
                },
            ],
        });
    };

    const getQuestion4 = async (e) => {
    
        const response = await fetch(url+`getPregnancyById/${idSurvey}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let value = [false, false];
        let input = ["",""];
        if(data.pregnancy !== 13){
            value[1] = true;
            input[1] = data.pregnancy
        }
        else{
            value[0] = true;
        }

        

        setQuestion4({
            id: 4,
            question: "Pregunta 4: ¿Usted o alguien de su familia está actualmente embarazada? Si su respuesta fue sí, especificar en meses",
            options: [
                {
                    id: 1,
                    option: "No",
                    value: value[0],
                    label: "No",
                    input: input[0]
                },
                {
                    id: 2,
                    option: "Sí",
                    value: value[1],
                    label: "Sí",
                    input: input[1]
                },
            ],
        });
    };

    const getQuestion5 = async (e) => {
    
        const response = await fetch(url+`getAnswerByIdQuestion/${idSurvey}/${5}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        const answer = data[0].answer;
        let value = [false, false];
        let input = ["",""];
        if(answer === 'Ninguno'){
            value[0] = true;
        }
        else{
            value[1] = true;
            input[1] = answer;
        }


        setQuestion5({
            id: 5,
            question: "Pregunta 5: ¿Usted o alguien de su familia está tomando algún suplemento alimenticio? Especificar cuál",
            options: [
                {
                    id: 1,
                    option: "No",
                    value: value[0],
                    label: "No",
                    input: input[0]
                },
                {
                    id: 2,
                    option: "Sí",
                    value: value[1],
                    label: "Sí (Especificar)",
                    input: input[1]
                },
            ],
        });
    };

    const getQuestion6 = async (e) => {
    
        const response = await fetch(url+`getAnswerByIdQuestion/${idSurvey}/${6}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        const answer = data[0].answer;
        let value = [false, false];
        if(answer === 'Sí'){
            value[0] = true;
        }
        else{
            value[1] = true;
        }

        setQuestion6({
            id: 6,
            question: "Pregunta 6: ¿Usted o alguien de su familia está dando lactancia materna?",
            options: [
                {
                    id: 1,
                    option: "Sí",
                    value: value[0],
                    label: "Sí",
                    input: ""
                },
                {
                    id: 2,
                    option: "No",
                    value: value[1],
                    label: "No",
                    input: ""
                },
            ],
        });
    };

    const getQuestion7 = async (e) => {
    
        const response = await fetch(url+`getAnswerByIdQuestion/${idSurvey}/${7}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        const answer = data[0].answer;
        let value = [false, false];
        if(answer === 'De 1 a 2 comidas'){
            value[0] = true;
        }
        else{
            value[1] = true;
        }

        setQuestion7({
            id: 7,
            question: "Pregunta 7: ¿Cuántas comidas hace al día?",
            options: [
                {
                    id: 1,
                    option: "De 1 a 2 comidas",
                    value: value[0],
                    label: "De 1 a 2 comidas",
                    input: ""
                },
                {
                    id: 2,
                    option: "De 3 a más comidas",
                    value: value[1],
                    label: "De 3 a más comidas",
                    input: ""
                },
            ],
        });
    };

    const getQuestion8 = async (e) => {
    
        const response = await fetch(url+`getAnswerByIdQuestion/${idSurvey}/${8}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        const answer = data[0].answer;
        let value = [false, false];
        if(answer === 'Sí'){
            value[0] = true;
        }
        else{
            value[1] = true;
        }

        setQuestion8({
            id: 8,
            question: "Pregunta 8: ¿Se añade sal a las comidas ya preparadas?",
            options: [
                {
                    id: 1,
                    option: "Sí",
                    value: value[0],
                    label: "Sí",
                    input: ""
                },
                {
                    id: 2,
                    option: "No",
                    value: value[1],
                    label: "No",
                    input: ""
                },
            ],
        });
    };

    const getQuestion9 = async (e) => {
    
        const response = await fetch(url+`getAnswerByIdQuestion/${idSurvey}/${9}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        const answer = data[0].answer;
        let value = [false, false];
        if(answer === 'Menos de $5,255 MXN'){
            value[0] = true;
        }
        else{
            value[1] = true;
        }

        setQuestion9({
            id: 9,
            question: "Pregunta 9: ¿Cuál es el ingreso familiar mensual?",
            options: [
                {
                    id: 1,
                    option: "Menos de $5,255 MXN",
                    value: value[0],
                    label: "Menos de $5,255 MXN",
                    input: ""
                },
                {
                    id: 2,
                    option: "Más de $5,255 MXN",
                    value: value[1],
                    label: "Más de $5,255 MXN",
                    input: ""
                },
            ],
        });
    };

    const getQuestion10 = async (e) => {
    
        const response = await fetch(url+`getAnswerByIdQuestion/${idSurvey}/${10}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        const answer = data[0].answer;
        let value = [false, false, false];
        if(answer === '20% aproximadamente'){
            value[0] = true;
        }
        else if(answer === '35% aproximadamente'){
            value[1] = true;
        }
        else{
            value[2] = true;
        }

        setQuestion10({
            id: 10,
            question: "Pregunta 10: ¿Qué porcentaje es destinado a la alimentación?",
            options: [
                {
                    id: 1,
                    option: "20% aproximadamente",
                    value: value[0],
                    label: "20% aproximadamente",
                    input: ""
                },
                {
                    id: 2,
                    option: "35% aproximadamente",
                    value: value[1],
                    label: "35% aproximadamente",
                    input: ""
                },
                {
                    id: 3,
                    option: "50% aproximadamente",
                    value: value[2],
                    label: "50% aproximadamente",
                    input: ""
                },
            ],
        });
    };

    const getQuestion11 = async (food) => {
    
        const response = await fetch(url+`getFrequencyQuantityById/${idSurvey}/${food}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let value = [false, false, false, false];
        let input = ["", "", "", ""];
        if(data.freq === 'a'){
            value[0] = true;
            input[0] = "Cantidad: " + data.quantity;
        }
        else if(data.freq === 'b'){
            value[1] = true;
            input[1] = "Cantidad: " + data.quantity;
        }
        else if(data.freq === 'c'){
            value[2] = true;
            input[2] = "Cantidad: " + data.quantity;
        }
        else{
            value[3] = true;
            input[3] = "Cantidad: " + data.quantity;
        }

        setQuestion11({
            id: 11,
            question: "Pregunta 11: Frecuencia de consumo",
            options: [
                {
                    id: 1,
                    option: "Diario",
                    value: value[0],
                    label: "Diario",
                    input: input[0]
                },
                {
                    id: 2,
                    option: "2-3 veces por semana",
                    value: value[1],
                    label: "2-3 veces por semana",
                    input: input[1]
                },
                {
                    id: 3,
                    option: "Casi nunca",
                    value: value[2],
                    label: "Casi nunca",
                    input: input[2]
                },
                {
                    id: 4,
                    option: "Nunca",
                    value: value[3],
                    label: "Nunca",
                    input: input[3]
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

    useEffect(() => {
        getQuestion3();
        }, []);
    
    useEffect(() => {
        getQuestion4();
        }, []);

    useEffect(() => {
        getQuestion5();
        }, []);

    useEffect(() => {
        getQuestion6();
        }, []);

    useEffect(() => {
        getQuestion7();
        }, []);
    
    useEffect(() => {
        getQuestion8();
        }, []);

    useEffect(() => {
        getQuestion9();
        }, []);

    useEffect(() => {
        getQuestion10();
        }, []);

    useEffect(() => {
        getQuestion11('1');
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
            <CheckboxQuestion question={question3} />
            <CheckboxQuestion question={question4} />
            <CheckboxQuestion question={question5} />
            <CheckboxQuestion question={question6} />
            <CheckboxQuestion question={question7} />
            <CheckboxQuestion question={question8} />
            <CheckboxQuestion question={question9} />
            <CheckboxQuestion question={question10} />
            <label>Elija el alimento:  </label>
            <select value={value} onChange={handleChange}>
                <option value="1" >Leche</option>
                <option value="2">Pollo</option>
                <option value="3">Atún</option>
                <option value="4" >Carne de res</option>
                <option value="5">Carne de cerdo</option>
                <option value="6">Huevo</option>
                <option value="7" >Arroz</option>
                <option value="8">Tortilla, pan, galletas</option>
                <option value="9">Verduras crudas o cocidas</option>
                <option value="10" >Verduras enlatadas o en jugo</option>
                <option value="11">Frutas enteras</option>
                <option value="12">Frutas enlatadas o en jugo</option>
                <option value="13">Frijol, lenteja o garbanzo</option>
                <option value="14">Nuez, cacahuate, pistaches</option>
                <option value="15">Refresco</option>
            </select>
            <CheckboxQuestionSpecial question={question11} />
        </div>
    );
}

export default Details;
