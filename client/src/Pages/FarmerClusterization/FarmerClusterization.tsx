import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Farmer {
  id: number;
  name: string;
  position: [number, number];
}

const farmers: Farmer[] = [
  { id: 1, name: 'Farmer A', position: [51.505, -0.09] },
  { id: 2, name: 'Farmer B', position: [51.51, -0.1] },
  { id: 3, name: 'Farmer C', position: [51.49, -0.08] },
];

const FarmerClusterization: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Farmer Clusterization</h2>
      <MapContainer
      //  center={[51.505, -0.09]}
        // zoom={13} 
        className="h-96 w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {farmers.map((farmer) => (
          <Marker key={farmer.id} position={farmer.position}>
            <Popup>{farmer.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default FarmerClusterization;
