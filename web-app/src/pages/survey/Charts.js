import React, { useEffect, useState } from "react";
import TextHeader from '../../components/TextHeader';
import PieChart from "../../components/PieChart";
import url from '../../config/API';

//Configuration and default data----------
const defaultAnswer = ["3", "4", "5"]
const defaultFreq = [1, 1, 1]

const chartOptions1 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Número de integrantes en las familias'
        }
    }
}
  
const chartOptions2 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Rangos de edades en los integrantes de las familias'
        }
    }
}

const chartOptions3 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Enfermedades presente en las familias'
        }
    }
}

const chartOptions4 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Embarazo en las familias'
        }
    }
}

const chartOptions5 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Consumo de suplemento alimenticio'
        }
    }
}

const chartOptions6 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: '¿Algún integrante de la famila se encuentra dando lactancia materna?'
        }
    }
}

const chartOptions7 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Comidas al día'
        }
    }
}

const chartOptions8 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: '¿Se añade sal a las comidas ya preparadas?'
        }
    }
}

const chartOptions9 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Ingreso familiar mensual'
        }
    }
}

const chartOptions10 = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Porcentaje del ingreso mensual destinado a la alimentación'
        }
    }
}

//-----------------------

function Charts() {

    const [chartData1, setChartData1] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const [chartData2, setChartData2] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const [chartData3, setChartData3] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const [chartData4, setChartData4] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const [chartData5, setChartData5] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const [chartData6, setChartData6] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const [chartData7, setChartData7] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const [chartData8, setChartData8] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const [chartData9, setChartData9] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const [chartData10, setChartData10] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Cargando",
                data: defaultFreq,
                backgroundColor: ["rgba(237, 26, 59, 1)", "rgba(254, 146, 29, 1)", "rgba(13, 177, 75, 1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    const getDataQuestion1 = async (e) => {
        
        const response = await fetch(url+`getFrequency/${1}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            answer.push(dataObj.answer + " integrantes");
            freq.push(dataObj.freq)
        }

        let colors=[];
        for(let i=0;i<answer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData1({
            labels: answer,
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }
    
    const getDataQuestion2 = async (e) => {
        
        const response = await fetch(url+`getAllAnswers/${2}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let freq = [0,0,0,0,0]
        let control = 0;
        for (const dataObj of data){
            let ans = dataObj.answer;
            while(control < ans.length){
                if(ans[control] === 'a'){
                    freq[0] += parseInt(ans[control+1] + ans[control+2]);
                    control += 4;
                }
                else if(ans[control] === 'b'){
                    freq[1] += parseInt(ans[control+1] + ans[control+2]);
                    control += 4;
                }
                else if(ans[control] === 'c'){
                    freq[2] += parseInt(ans[control+1] + ans[control+2]);
                    control += 4;
                }
                else if(ans[control] === 'd'){
                    freq[3] += parseInt(ans[control+1] + ans[control+2]);
                    control += 4;
                }
                else{
                    freq[4] += parseInt(ans[control+1] + ans[control+2]);
                    control += 4;
                }
            }
            control = 0;
        }

        let colors=[];
        for(let i=0;i<freq.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData2({
            labels: ["Infancia (0-5 años)","Niñez (6-12 años)", "Adolscencia (12-18 años)", "Adultez (18-60 años)", "Adulto mayor (+65 años)"],
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    const getDataQuestion3 = async (e) => {
        
        const response = await fetch(url+'getEnfermedades',{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            answer.push(dataObj.medicalConditionName);
            freq.push(dataObj.medicalConditionTotalNumber);
        }

        let colors=[];
        for(let i=0;i<answer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData3({
            labels: answer,
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    const getDataQuestion4 = async (e) => {
        
        const response = await fetch(url+'getPregnancy',{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')}});
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            if(dataObj.pregnancy === 0 ){
                answer.push("Menos de 1 mes de embarazo");
            }
            else if(dataObj.pregnancy === 13){
                answer.push("Sin ningún embarazo");
            }
            else{
                answer.push(dataObj.pregnancy + " meses de embarazo");
            }
            freq.push(dataObj.freq);
        }

        let colors=[];
        for(let i=0;i<answer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData4({
            labels: answer,
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    const getDataQuestion5 = async (e) => {
        
        const response = await fetch(url+`getFrequency/${5}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            answer.push(dataObj.answer);
            freq.push(dataObj.freq)
        }

        let colors=[];
        for(let i=0;i<answer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData5({
            labels: answer,
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    const getDataQuestion6 = async (e) => {
        
        const response = await fetch(url+`getFrequency/${6}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            answer.push(dataObj.answer);
            freq.push(dataObj.freq)
        }

        let colors=[];
        for(let i=0;i<answer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData6({
            labels: answer,
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    const getDataQuestion7 = async (e) => {
        
        const response = await fetch(url+`getFrequency/${7}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            answer.push(dataObj.answer);
            freq.push(dataObj.freq)
        }

        let colors=[];
        for(let i=0;i<answer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData7({
            labels: answer,
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    const getDataQuestion8 = async (e) => {
        
        const response = await fetch(url+`getFrequency/${8}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            answer.push(dataObj.answer);
            freq.push(dataObj.freq)
        }

        let colors=[];
        for(let i=0;i<answer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData8({
            labels: answer,
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    const getDataQuestion9 = async (e) => {
        
        const response = await fetch(url+`getFrequency/${9}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            answer.push(dataObj.answer);
            freq.push(dataObj.freq)
        }

        let colors=[];
        for(let i=0;i<answer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData9({
            labels: answer,
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    const getDataQuestion10 = async (e) => {
        
        const response = await fetch(url+`getFrequency/${10}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            answer.push(dataObj.answer);
            freq.push(dataObj.freq)
        }

        let colors=[];
        for(let i=0;i<answer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }

        setChartData10({
            labels: answer,
            datasets: [
                {
                    label: "Integrantes",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    useEffect(() => {
        getDataQuestion1();
      }, []);

    useEffect(() => {
        getDataQuestion2();
    }, []);

    useEffect(() => {
        getDataQuestion3();
    }, []);

    useEffect(() => {
        getDataQuestion4();
    }, []);

    useEffect(() => {
        getDataQuestion5();
    }, []);

    useEffect(() => {
        getDataQuestion6();
    }, []);

    useEffect(() => {
        getDataQuestion7();
    }, []);

    useEffect(() => {
        getDataQuestion8();
    }, []);

    useEffect(() => {
        getDataQuestion9();
    }, []);

    useEffect(() => {
        getDataQuestion10();
    }, []);

    return (
        <>
            <TextHeader text="Gráficas" />
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData1} chartOptions={chartOptions1}/>
            </div>
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData2} chartOptions={chartOptions2}/>
            </div>
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData3} chartOptions={chartOptions3}/>
            </div>
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData4} chartOptions={chartOptions4}/>
            </div>
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData5} chartOptions={chartOptions5}/>
            </div>
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData6} chartOptions={chartOptions6}/>
            </div>
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData7} chartOptions={chartOptions7}/>
            </div>
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData8} chartOptions={chartOptions8}/>
            </div>
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData9} chartOptions={chartOptions9}/>
            </div>
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData10} chartOptions={chartOptions10}/>
            </div>
        </>
    );
}

export default Charts;
