import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import url from '../config/API';
import '../styles/ChartContainer.css'

function PieChart() {

    const defaultAnswer = ["3", "4", "5"]
    const defaultFreq = [1, 1, 1]

    const [value, setValue] = useState('1');

    const [chartOptions, setChartOptions] = useState ({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
            display: true,
            text: 'Leche'
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

        if(event.target.value === '2'){
          setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                display: true,
                text: 'Frecuencia de consumo de pollo'
                }
            }
          });
          getDataFrequency(event.target.value);
        }
        else if(event.target.value === '3'){
          setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                display: true,
                text: 'Frecuencia de consumo de atún'
                }
            }
          });
          getDataFrequency(event.target.value);
        }
        else if(event.target.value === '4'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de carne de res'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '5'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de carne de cerdo'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '6'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de huevo'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '7'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de arroz'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '8'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de tortilla, pan, galletas'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '9'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de verduras crudas o cocidas'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '10'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de verduras enlatadas o en jugo'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '11'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de frutas enteras'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '12'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de frutas enlatadas o en jugo'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '13'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de frijol, lenteja o garbanzo'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '14'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de nuez, cacahuate, pistaches'
                  }
              }
            });
            getDataFrequency(event.target.value);
          }
          else if(event.target.value === '15'){
            setChartOptions({
              responsive: true,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                  display: true,
                  text: 'Frecuencia de consumo de refresco'
                  }
              }
            });
            getDataFrequency(event.target.value);
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
                text: 'Frecuencia de consumo de Leche'
                }
            }
          });
          getDataFrequency(event.target.value);
        }
      };

      const getDataFrequency = async (food) => {
        
        const response = await fetch(url+`getFoodFrequency/${food}`,{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();

        let answer = [];
        let freq = [];

        for (const dataObj of data){
            answer.push(dataObj.answer);
            freq.push(dataObj.freq);
        }

        let finalAnswer = []
        for (var i = 0; i < answer.length; i++) {
            if(answer[i]==='a'){
                finalAnswer.push('Diario');
            }
            else if(answer[i]==='b'){
                finalAnswer.push('2-3 veces por semana');
            }
            else if(answer[i]==='c'){
                finalAnswer.push('Casi nunca');
            }
            else{
                finalAnswer.push('Nunca');
            }
            

        }
        
        let colors=[];
        for(let i=0;i<finalAnswer.length;i++){
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }
    
        setChartData({
            labels: finalAnswer,
            datasets: [
                {
                    label: "Frecuencia",
                    data: freq,
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 2,
                }
            ]
        })
    }
    
    useEffect(() => {
        getDataFrequency('1');
      }, []);

    return(
        <>
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
        <div className="containerChart">
          <div style={{ width: "40%" }}>
            <Pie data={chartData} options={chartOptions} />
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
    )
}

export default PieChart;