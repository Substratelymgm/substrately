import React, { useState, ChangeEvent } from 'react';

const ParameterAdjustment: React.FC = () => {
  const [parameters, setParameters] = useState({
    rainfall: '',
    temperature: '',
    soilMoisture: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParameters(prevParameters => ({
      ...prevParameters,
      [name]: value
    }));
  };

  const handleAdjust = () => {
    // Handle the adjustment logic here
    console.log('Adjusted parameters:', parameters);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Parameter Adjustment Tool</h2>
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
        onClick={handleAdjust}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Adjust Parameters
      </button>
    </div>
  );
};

export default ParameterAdjustment;
