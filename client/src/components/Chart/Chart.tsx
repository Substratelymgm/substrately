import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


const labels = ['Jan','Feb','Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep','Oct', 'Nov', 'Dec']


const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10000,20000,15000,12000,14000,8000, 90000, 5000,20000, 90000,5000, 70000],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};


const options  = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      display: false, 
      position: 'top' as 'top'
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart'
    }
  }
};





const Chart = () => (
  <div>
    <Line data={data} options={options} />
  </div>
);

export default Chart;
