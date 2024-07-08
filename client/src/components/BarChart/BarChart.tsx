import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { ChartData, ChartOptions } from 'chart.js';

interface BarChartProps {
  chartData: ChartData<'bar', Chart.ChartDataSets[], unknown>; 
  options?: ChartOptions; 
}

const BarChart: React.FC<BarChartProps> = ({ chartData }) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.chartInstance?.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const options: ChartOptions<'bar'> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    // responsive: true,
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
  };

  return (
    <div className="w-full rounded-md">
      <Bar ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
