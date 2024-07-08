import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { ChartData } from 'chart.js';
import { ChartOptions } from 'chart.js';

interface LineChartProps {
    chartData: ChartData<'line', Chart.ChartDataSets[], unknown>; 
    options?: ChartOptions; 
}

const LineChart: React.FC<LineChartProps> = ({ chartData }) => {


  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        x: {
          type: 'category',
          grid: {
            display: false,
          },
          ticks: {
            color: '#626E99',
          },
          offset: false,
        },
        y: {
          type: 'linear',
          grid: {
            display: false,
          },
          ticks: {
            color: '#626E99',
          },
          offset: false,
        },
      },
  } as const;

  return (
    <div className="w-full">
      <Line  data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
