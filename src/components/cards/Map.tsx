"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Fix default marker icon issue in Next.js with Leaflet
import "leaflet/dist/leaflet.css";

// Custom marker icon with your base color (#008080)
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Center coordinates for SUST campus
const center: [number, number] = [24.922159, 91.82748];

// This component lets you programmatically set map view (optional)
interface MapViewProps {
  center: [number, number];
  zoom: number;
}
const SetView: React.FC<MapViewProps> = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map: React.FC = () => {
  return (
    <div className="w-full h-80 md:h-[400px] lg:h-[450px] xl:h-[600px] rounded-lg shadow-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <SetView center={center} zoom={16} />
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={markerIcon}>
          <Popup>
            Edu Heritage Campus
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
