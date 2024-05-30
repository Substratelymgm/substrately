import React, { useState } from 'react';

interface Parameters {
  rainfall: string;
  temperature: string;
  soilMoisture: string;
}

const ParameterSaving: React.FC = () => {
  const [parameters, setParameters] = useState<Parameters>({
    rainfall: '',
    temperature: '',
    soilMoisture: ''
  });
  const [savedParameters, setSavedParameters] = useState<Parameters[]>([]);

  const handleSave = () => {
    setSavedParameters([...savedParameters, parameters]);
    setParameters({ rainfall: '', temperature: '', soilMoisture: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParameters({
      ...parameters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Parameter Saving Feature</h2>
      <input
        name="rainfall"
        value={parameters.rainfall}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter rainfall parameter"
      />
      <input
        name="temperature"
        value={parameters.temperature}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter temperature parameter"
      />
      <input
        name="soilMoisture"
        value={parameters.soilMoisture}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter soil moisture parameter"
      />
      <button 
        onClick={handleSave}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Save Parameters
      </button>
      <ul className="mt-4">
        {savedParameters.map((params, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <p>Rainfall: {params.rainfall}</p>
            <p>Temperature: {params.temperature}</p>
            <p>Soil Moisture: {params.soilMoisture}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParameterSaving;
