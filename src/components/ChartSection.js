import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartSection = ({ repos }) => {
  const chartData = {
    labels: repos.slice(0, 10).map(repo => repo.name),
    datasets: [
      {
        label: 'Stars',
        data: repos.slice(0, 10).map(repo => repo.stargazers_count),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgb(156, 163, 175)',
        },
      },
      title: {
        display: true,
        text: 'Top 10 Repositories by Stars',
        color: 'rgb(229, 231, 235)',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
        ticks: {
          color: 'rgb(156, 163, 175)',
        },
      },
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
        ticks: {
          color: 'rgb(156, 163, 175)',
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };

  return (
    <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartSection; 