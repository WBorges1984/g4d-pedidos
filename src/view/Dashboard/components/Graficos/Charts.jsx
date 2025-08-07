import React, { useEffect, useRef } from 'react';
import * as Chart from 'chart.js';

// Registrar os componentes necessários do Chart.js
Chart.Chart.register(
  Chart.CategoryScale,
  Chart.LinearScale,
  Chart.BarElement,
  Chart.Title,
  Chart.Tooltip,
  Chart.Legend
);

export const AnnualSalesChart = ({ 
  data = [25, 30, 21, 45, 75, 42],
  labels = ['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago',],
  backgroundColor = '#49B173',
  width = '300',
  height = 200
}) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    // Destruir gráfico anterior se existir
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Criar novo gráfico
    const ctx = canvasRef.current.getContext('2d');
    chartRef.current = new Chart.Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Vendas',
          data: data,
          backgroundColor: backgroundColor,
          borderRadius: 8,
          barPercentage: 0.6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `Vendas: ${context.raw}`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: {
              color: '#A9AEC9'
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#A9AEC9'
            }
          }
        }
      }
    });

    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, labels, backgroundColor]);

  return (
    <div style={{ width, height, position: 'relative' }}>
      <canvas ref={canvasRef} />
    </div>
  );
};