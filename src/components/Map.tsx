import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { User } from '../types';

interface MapProps {
  users: User[];
}

export default function Map({ users }: MapProps) {
  return (
    <MapContainer
      center={[12.9716, 77.5946]}
      zoom={13}
      className="h-full w-full rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {users.map((user) => (
        user.location && (
          <Marker key={user.id} position={user.location.coordinates}>
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.location.city}, {user.location.country}</p>
              </div>
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
}