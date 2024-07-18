import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);

interface BarChartProps {
  chartData: ChartData<'bar', number[], string>; 
  options?: ChartOptions<'bar'>; 
}

const BarChart: React.FC<BarChartProps> = ({ chartData, options }) => {
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

  // Update the chart options to include hover settings
  const updatedOptions: ChartOptions<'bar'> = {
    ...options,
    plugins: {
      legend: {
        display: false,
      },
      ...options?.plugins,
    },
    maintainAspectRatio: false,
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
    onHover: (event, chartElement) => {
      if (event.native && event.native.target) {
        const target = event.native.target as HTMLElement;
        target.style.cursor = chartElement.length ? 'pointer' : 'default';
      }
    },
  };

  // Add hoverBackgroundColor to each dataset
  const updatedChartData: ChartData<'bar', number[], string> = {
    ...chartData,
    datasets: chartData.datasets.map(dataset => ({
      ...dataset,
      hoverBackgroundColor: dataset.hoverBackgroundColor || '#3B8F85'
    })),
  };

  return (
    <div className="w-full h-full rounded-md">
      <Bar ref={chartRef} data={updatedChartData} options={updatedOptions} />
    </div>
  );
};

export default BarChart;
