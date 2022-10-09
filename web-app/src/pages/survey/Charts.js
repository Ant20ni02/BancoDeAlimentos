import React, { useEffect, useState } from "react";
import TextHeader from '../../components/TextHeader';
import axios from "axios";
//import PieChart from "../../components/PieChart";
import { Pie } from "react-chartjs-2";
import url from '../../config/API';

function Charts() {
    const [chartData1, setChartData1] = useState({});
    /*const [questionAnswer1, setQuestionAnswer1] = useState([]);
    const [questionFreq1, setQuestionFreq1] = useState([]);*/

    const getDataQuestion1 = () => {  
        /*const response = await fetch(url+`getFrequency/${1}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();*/
        let answer = [];
        let freq = [];
        axios.get(url+`getFrequency/${1}`,{headers: {'x-access-token' : localStorage.getItem('token')}})
        .then(res => {
            console.log(res);
            console.log(res.data);
            for (const dataObj of res.data){
                answer.push(dataObj.answer);
                freq.push(dataObj.freq)
            }
            console.log(answer);
            console.log(freq);
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
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getDataQuestion1();
      }, []);

    return (
        <>
            <TextHeader text="Gráficas" />
            <div style={{ width: 400 }}>
                <Pie data={chartData1} />
            </div>
            
        </>
    );
}

export default Charts;
