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
        text: 'Enfermedades en las familias'
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
        text: 'Embarazo en la familia'
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
        </>
    );
}

export default Charts;
