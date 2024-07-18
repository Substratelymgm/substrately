import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WeatherMap: React.FC = () => {
  const center: LatLngExpression = [51.505, -0.09];

  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="text-2xl mb-5">Rain and Mean Sea Level Pressure</h2>
      <MapContainer center={center} zoom={13} className="h-96 w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            A marker for testing.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
