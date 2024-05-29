import React, { useState } from 'react';

interface Assessment {
  cropType: string;
  areaAffected: string;
  estimatedLoss: string;
}

const CropLossAssessment: React.FC = () => {
  const [assessment, setAssessment] = useState<Assessment | null>(null);

  const assessCropLoss = () => {
    // Simulate crop loss assessment
    setAssessment({
      cropType: 'Corn',
      areaAffected: '50 hectares',
      estimatedLoss: '30%'
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Crop Loss Assessment</h2>
      <button onClick={assessCropLoss} className="bg-blue-600 text-white py-2 px-4 rounded">
        Assess Crop Loss
      </button>
      {assessment && (
        <div className="mt-4">
          <h3 className="text-xl">Assessment Result:</h3>
          <p>Crop Type: {assessment.cropType}</p>
          <p>Area Affected: {assessment.areaAffected}</p>
          <p>Estimated Loss: {assessment.estimatedLoss}</p>
        </div>
      )}
    </div>
  );
};

export default CropLossAssessment;
