import React, { useState } from 'react';

interface Report {
  id: number;
  date: string;
  content: string;
}

const PortfolioReportsGenerator: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  const generateReport = () => {
    const newReport: Report = {
      id: reports.length + 1,
      date: new Date().toLocaleString(),
      content: 'Sample report content...'
    };
    setReports([...reports, newReport]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Portfolio Reports Generator</h2>
      <button 
        onClick={generateReport}
        className="mb-4 bg-blue-500 text-white p-2 rounded"
      >
        Generate Report
      </button>
      <ul>
        {reports.map(report => (
          <li key={report.id} className="mb-2 p-2 border rounded">
            <p>{report.content}</p>
            <span className="text-gray-500 text-sm">{report.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioReportsGenerator;
