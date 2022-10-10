import React, { useEffect, useState } from "react";
import TextHeader from '../../components/TextHeader';
import PieChart from "../../components/PieChart";
import url from '../../config/API';

const defaultAnswer = ["3", "4", "5"]
const defaultFreq = [1, 1, 1]

function Charts() {
    const [chartData1, setChartData1] = useState({
        labels: defaultAnswer,
        datasets: [
            {
                label: "Número de integrantes en la familia",
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
            answer.push(dataObj.answer);
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
                    label: "Número de integrantes en la familia",
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
