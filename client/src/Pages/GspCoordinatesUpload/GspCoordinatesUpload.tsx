import React, { useState } from 'react';

const GPSCoordinatesUpload: React.FC = () => {
  const [coordinates, setCoordinates] = useState<string>('');

  const handleUpload = () => {
    // Handle the upload logic here
    console.log('Uploaded coordinates:', coordinates);
    setCoordinates('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">GPS Coordinates Upload</h2>
      <textarea
        value={coordinates}
        onChange={(e) => setCoordinates(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter GPS coordinates"
      ></textarea>
      <button 
        onClick={handleUpload}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Upload Coordinates
      </button>
    </div>
  );
};

export default GPSCoordinatesUpload;
