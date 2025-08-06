import React from 'react';
// Importa os elementos necessários do chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler, // Importe o Filler para a cor de fundo (fill: true)
  Legend,
} from 'chart.js';
// Importa o componente de Gráfico de Linha do react-chartjs-2
import { Line } from 'react-chartjs-2';

// Registra os elementos que o gráfico vai usar
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const SalesValueChart = () => {
  // O objeto 'options' do código original vai aqui
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,

      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#A9AEC9',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#A9AEC9',
        },
      },
    },
  };

  // O objeto 'data' do código original vai aqui
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Vendas em R$',
        data: [520, 400, 840, 200, 997, 1270],
        borderColor: '#1DD5B8',
        backgroundColor: 'rgba(29, 213, 184, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default SalesValueChart;