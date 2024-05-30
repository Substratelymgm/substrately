import { Bar } from 'react-chartjs-2';

const DataVisualizationTools = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Customer Data',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Data Visualization Tools</h2>
      <div className="w-full">
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    </div>
  );
};

export default DataVisualizationTools;
