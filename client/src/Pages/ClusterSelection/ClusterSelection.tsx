import { useState, ChangeEvent } from 'react';

const ClusterSelection = () => {
  const [selectedCluster, setSelectedCluster] = useState<string>('');
  const clusters: string[] = ['Cluster A', 'Cluster B', 'Cluster C']; // Replace with dynamic data

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCluster(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Cluster Selection Dropdown</h2>
      <select 
        value={selectedCluster} 
        onChange={handleSelect}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="" disabled>Select a cluster</option>
        {clusters.map((cluster, index) => (
          <option key={index} value={cluster}>
            {cluster}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClusterSelection;
