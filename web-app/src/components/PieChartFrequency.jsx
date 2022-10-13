import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData, chartOptions}) {

    let chartOptionsQuantity = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Frecuencia del consumo de Alimentos'
            }
        }
    }

    return <Pie data={chartData} options={chartOptions} />;
}

export default PieChart;