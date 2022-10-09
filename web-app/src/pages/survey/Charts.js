import React, { useEffect, useState } from "react";
import TextHeader from '../../components/TextHeader';
import PieChart from "../../components/PieChart";
import url from '../../config/API';


const DefaultData = [
    {
        answer: 3,
        frequency: 2
    },
    {
        answer: 4,
        frequency: 2
    },
    {
        answer: 5,
        frequency: 1,
    },
];



function Charts() {
    const [dataQuestion2, setDataQuestion2] = useState({
        labels: DefaultData.map((data) => data.answer),
        datasets: [
            {
              label: "Número de miembros de la familia",
              data: DefaultData.map((data) => data.frequency),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
    });

    useEffect(()=>{
        getDataQuestion2();
        }, []);

    const getDataQuestion2 = async (e) => {  
        const response = await fetch(url+`getAllAnswers/${1}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();

        var finalData = [{}]
        for(var i in data){
            var answer = data[i].answer;

        }
        setDataQuestion2(data);
    }

    return (
        <>
            <TextHeader text="Gráficas" />
            <div style={{ width: 400 }}>
                <PieChart chartData={dataQuestion2} />
            </div>
            
        </>
    );
}

export default Charts;
