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
    
    const getDataQuestion2 = async (e) => {
        
        const response = await fetch(url+`getAllAnswers/${2}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let freq = [0,0,0,0,0]
        console.log(data);
        let control = 0;
        for (const dataObj of data){
            let ans = dataObj.answer;
            while(control < ans.length){
                console.log('kiti');
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
        console.log(freq);

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

    useEffect(() => {
        getDataQuestion1();
      }, []);

    useEffect(() => {
        getDataQuestion2();
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
        </>
    );
}

export default Charts;
