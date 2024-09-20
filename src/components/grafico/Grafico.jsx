
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Grafico.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Grafico({ titulo, data, options }) {
  return (
    <div>
      <p className="grafico-titulo">{titulo}</p> 
      <Line data={data} options={options} className="grafico"/>
    </div>
  );
}

export default Grafico;
