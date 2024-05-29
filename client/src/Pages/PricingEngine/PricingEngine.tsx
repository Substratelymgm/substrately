import React, { useState } from 'react';

interface Parameters {
  area: string;
  cropType: string;
  riskLevel: string;
}

const PricingEngine: React.FC = () => {
  const [parameters, setParameters] = useState<Parameters>({
    area: '',
    cropType: '',
    riskLevel: ''
  });
  const [premium, setPremium] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParameters((prevParams) => ({
      ...prevParams,
      [name]: value
    }));
  };

  const calculatePremium = () => {
    // Simulate premium calculation based on parameters
    const calculatedPremium = (parseInt(parameters.area) * 10) + (parseInt(parameters.riskLevel) * 20);
    setPremium(calculatedPremium);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Pricing Engine</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Area (hectares)</label>
          <input
            type="number"
            name="area"
            value={parameters.area}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Crop Type</label>
          <input
            type="text"
            name="cropType"
            value={parameters.cropType}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Risk Level</label>
          <input
            type="number"
            name="riskLevel"
            value={parameters.riskLevel}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button onClick={calculatePremium} className="bg-blue-600 text-white py-2 px-4 rounded">
          Calculate Premium
        </button>
        {premium !== null && (
          <div className="mt-4">
            <h3 className="text-xl">Calculated Premium:</h3>
            <p>${premium}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingEngine;
