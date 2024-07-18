import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { ChartData } from 'chart.js';
import { ChartOptions } from 'chart.js';

// Register chart.js components
Chart.register(...registerables);

interface LineChartProps {
    chartData: ChartData<'line', Chart.ChartDataSets[], unknown>; 
    options?: ChartOptions; 
}


function deepMerge(target:any, source:any) {
  for (const key in source) {
      if (source[key] instanceof Object && key in target) {
          Object.assign(source[key], deepMerge(target[key], source[key]));
      }
  }
  Object.assign(target || {}, source);
  return target;
}

const LineChart: React.FC<LineChartProps> = ({ chartData, options }) => {

  // Ensure options are provided, or use defaults
  const chartOptions: ChartOptions<'line'> =  {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true 
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false 
        }
      },
      y: {
        display: true,
        grid: {
          display: false 
        },
        
      }
    },
    elements: {
      point: {
        radius: 0 
      },
      line: {
        borderWidth: 2,
        tension: 0,
        backgroundColor: 'rgba(75,2,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      }
    }
  };

  const mergedOptions = deepMerge({ ...chartOptions }, options);

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={mergedOptions} />
    </div>
  );
};

export default LineChart;
