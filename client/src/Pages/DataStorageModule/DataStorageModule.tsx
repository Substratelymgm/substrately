import React, { useState } from 'react';

const DataStorageModule: React.FC = () => {
  const [data, setData] = useState<string>('');
  const [storedData, setStoredData] = useState<string[]>([]);

  const handleStoreData = () => {
    if (data) {
      setStoredData([...storedData, data]);
      setData('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Data Storage Module</h2>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter data to store"
      ></textarea>
      <button 
        onClick={handleStoreData}
        className="mb-4 bg-blue-500 text-white p-2 rounded"
      >
        Store Data
      </button>
      <ul>
        {storedData.map((storedDatum, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            {storedDatum}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataStorageModule;
