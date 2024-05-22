import { useState } from 'react';

const ClusterAssociation = () => {
  const [coordinates, setCoordinates] = useState('');
  const [cluster, setCluster] = useState('');

  const handleAssociate = () => {
    // Handle the association logic here
    console.log(`Associated coordinates: ${coordinates} with cluster: ${cluster}`);
    setCoordinates('');
    setCluster('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Cluster Association Tool</h2>
      <input
        value={coordinates}
        onChange={(e) => setCoordinates(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter GPS coordinates"
      />
      <input
        value={cluster}
        onChange={(e) => setCluster(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter cluster name"
      />
      <button 
        onClick={handleAssociate}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Associate Cluster
      </button>
    </div>
  );
};

export default ClusterAssociation;
