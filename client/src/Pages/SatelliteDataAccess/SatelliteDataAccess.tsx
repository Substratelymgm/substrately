import React, { useState } from 'react';

interface WeatherData {
  temperature: number;
  humidity: number;
}

interface VegetationData {
  NDVI: number;
  biomass: number;
}

const SatelliteDataAccess: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [vegetationData, setVegetationData] = useState<VegetationData | null>(null);

  const fetchWeatherData = () => {
    // Simulate fetching weather data
    setWeatherData({ temperature: 25, humidity: 60 });
  };

  const fetchVegetationData = () => {
    // Simulate fetching vegetation data
    setVegetationData({ NDVI: 0.8, biomass: 1200 });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Satellite Data Access</h2>
      <button onClick={fetchWeatherData} className="bg-blue-600 text-white py-2 px-4 rounded mr-4">
        Fetch Weather Data
      </button>
      <button onClick={fetchVegetationData} className="bg-green-600 text-white py-2 px-4 rounded">
        Fetch Vegetation Data
      </button>
      {weatherData && (
        <div className="mt-4">
          <h3 className="text-xl">Weather Data:</h3>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
        </div>
      )}
      {vegetationData && (
        <div className="mt-4">
          <h3 className="text-xl">Vegetation Data:</h3>
          <p>NDVI: {vegetationData.NDVI}</p>
          <p>Biomass: {vegetationData.biomass}</p>
        </div>
      )}
    </div>
  );
};

export default SatelliteDataAccess;
