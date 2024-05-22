import { useState } from 'react';

const ClaimsProcessingTracker = () => {
  const [claims, _] = useState([
    { id: 1, claimId: 'C001', status: 'Under Review', details: 'Reviewing documents', date: '2023-05-20' },
    { id: 2, claimId: 'C002', status: 'Processed', details: 'Claim approved', date: '2023-05-21' }
  ]);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Claims Processing Tracker</h2>
      <ul>
        {claims.map(claim => (
          <li key={claim.id} className="mb-2 p-2 border rounded">
            <p>Claim ID: {claim.claimId}</p>
            <p>Status: {claim.status}</p>
            <p>Details: {claim.details}</p>
            <span className="text-gray-500 text-sm">{claim.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimsProcessingTracker;
