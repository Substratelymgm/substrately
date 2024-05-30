import  { useState } from 'react';

const CropInspectionReports = () => {
  const [reports, _] = useState([
    { id: 1, field: 'Field A', status: 'Inspected', details: 'Minor damage reported', date: '2023-05-20' },
    { id: 2, field: 'Field B', status: 'Inspected', details: 'No damage', date: '2023-05-21' }
  ]);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Crop Inspection Reports</h2>
      <ul>
        {reports.map(report => (
          <li key={report.id} className="mb-2 p-2 border rounded">
            <p>Field: {report.field}</p>
            <p>Status: {report.status}</p>
            <p>Details: {report.details}</p>
            <span className="text-gray-500 text-sm">{report.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CropInspectionReports;
