import React, { useEffect, useState } from "react";
import TextHeader from '../../components/TextHeader';
import PieChart from "../../components/PieChart";
import url from '../../config/API';

const defaultAnswer = ["3", "4"]
const defaultFreq = [3, 5]

function Charts() {
    const [chartData1, setChartData1] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Número de integrantes en la familia",
                data: defaultFreq,
                backgroundColor: ["rgba(75,192,192,1)"],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });
    
    /*const [questionAnswer1, setQuestionAnswer1] = useState([]);
    const [questionFreq1, setQuestionFreq1] = useState([]);*/

    const getDataQuestion1 = async (e) => {
        
        const response = await fetch(url+`getFrequency/${1}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        let answer = [];
        let freq = [];
        for (const dataObj of data){
            answer.push(dataObj.answer);
            freq.push(dataObj.freq)
        }
        console.log(answer);
        console.log(freq)
        setChartData1({
            labels: answer,
            datasets: [
                {
                    label: "Número de integrantes en la familia",
                    data: freq,
                    backgroundColor: ["rgba(75,192,192,1)"],
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }

    useEffect(() => {
        getDataQuestion1();
      }, []);

    return (
        <>
            <TextHeader text="Gráficas" />
            <div style={{ width: 400 }}>
                <PieChart chartData={chartData1} />
            </div>
            
        </>
    );
}

export default Charts;
