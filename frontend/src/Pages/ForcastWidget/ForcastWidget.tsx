import React, { useState } from 'react';

interface ForecastData {
  date: string;
  weather: string;
  temperature: number;
  precipitation: number;
}

const ForecastWidget: React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  const fetchForecastData = () => {
    // Simulate fetching forecast data
    setForecastData({
      date: '2024-05-21',
      weather: 'Sunny',
      temperature: 28,
      precipitation: 0
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Forecast</h2>
      <button onClick={fetchForecastData} className="bg-blue-600 text-white py-2 px-4 rounded">
        Fetch Forecast
      </button>
      {forecastData && (
        <div className="mt-4">
          <h3 className="text-xl">Forecast Data:</h3>
          <p>Date: {forecastData.date}</p>
          <p>Weather: {forecastData.weather}</p>
          <p>Temperature: {forecastData.temperature}°C</p>
          <p>Precipitation: {forecastData.precipitation}mm</p>
        </div>
      )}
    </div>
  );
};

export default ForecastWidget;
