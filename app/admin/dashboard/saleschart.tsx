import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const SalesChart = () => {
  const data = {
    labels: ['Branch 1', 'Branch 2'],
    datasets: [
      {
        label: 'Sales (₱)',
        data: [15000, 20000],
        backgroundColor: '#59b5ff',
        borderColor: '#2a91ff',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100000,
        ticks: {
          stepSize: 10000,
          font: {
            size: 12, // Default size, can be adjusted via CSS
          },
        },
        title: {
          display: true,
          text: 'Sales (₱)',
          font: {
            size: 16,
          },
          padding: {
            top: 10,
            bottom: 10,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 12, // Default size, can be adjusted via CSS
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14, // Default size, can be adjusted via CSS
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[350px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesChart;
