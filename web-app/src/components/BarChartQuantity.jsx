import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import url from '../config/API';
import '../styles/ChartContainer.css'

function BarChartQuantity() {

  const defaultAnswer = ["3", "4", "5"]
  const defaultFreq = [1, 1, 1]

  const [value, setValue] = useState('a');

  const [chartOptions, setChartOptions] = useState ({
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
          },
          title: {
          display: true,
          text: 'Cantidad de consumo de alimentos (ml)'
          }
      }
  })

  const [chartData, setChartData] = useState({
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

  const handleChange = (event) => {
    setValue(event.target.value);
    //console.log(value);
    if(event.target.value === 'b'){
      setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
            display: true,
            text: 'Cantidad de consumo de alimentos (g)'
            }
        }
      });
      getDataQuantity(event.target.value);
    }
    else if(event.target.value === 'c'){
      setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
            display: true,
            text: 'Cantidad de consumo de alimentos (pieza)'
            }
        }
      });
      getDataQuantity(event.target.value);
    }
    else{
      setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
            display: true,
            text: 'Cantidad de consumo de alimentos (ml)'
            }
        }
      });
      getDataQuantity(event.target.value);
    }
  };

  const getDataQuantity = async (foodType) => {
        
    const response = await fetch(url+`getFoodQuantity/${foodType}`,{method: 'GET',
                            headers: {'x-access-token' : localStorage.getItem('token')} });
    const data = await response.json();

    let answer = [];
    if(foodType === 'b'){
      answer = ['Carne de res', 'Carne de cerdo', 'Arroz', 'Verduras crudas o cocidas', 'Frutas enteras', 'Frijol, lenteja o garbanzo', 'Nuez, cacahuate, pistaches'];
    }
    else if (foodType === 'c'){
      answer = ['Pollo', 'Atún', 'Huevo', 'Tortilla, pan, galletas', 'Verdura enlatada o en jugo', 'Frutas enlatadas o en jugo'];
    }
    else{
      answer = ['Leche', 'Refresco'];
    }

    let food = [];
    let quantity = [];
    for (const dataObj of data){
      if(food.indexOf(dataObj.food) < 0){
        food.push(dataObj.food);
        quantity.push(parseFloat(dataObj.quantity));
      }
      else{
        quantity[food.indexOf(dataObj.food)] +=  parseFloat(dataObj.quantity);
      }
    }
    
    let colors=[];
    for(let i=0;i<answer.length;i++){
        colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
    }

    setChartData({
        labels: answer,
        datasets: [
            {
                label: "Cantidad",
                data: quantity,
                backgroundColor: colors,
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    })
}

useEffect(() => {
  getDataQuantity('a');
}, []);

  return(
    <>
      <label>Elija el sistema métrico de los alimentos a visualizar:  </label>
        <select value={value} onChange={handleChange}>
          <option value="a">Mililitro</option>
          <option value="b">Gramo</option>
          <option value="c">Pieza</option>
        </select>
        <div className="containerChart">
          <div style={{ width: "80%" }}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
    
  );
  
}

export default BarChartQuantity;