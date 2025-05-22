"use client";

import React, { useEffect, useState } from "react";

const center: [number, number] = [24.922159, 91.82748];

const Map: React.FC = () => {
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [MapContainer, setMapContainer] = useState<any>(null);
  const [TileLayer, setTileLayer] = useState<any>(null);
  const [Marker, setMarker] = useState<any>(null);
  const [Popup, setPopup] = useState<any>(null);
  const [useMap, setUseMap] = useState<any>(null);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    // Dynamically import leaflet and react-leaflet only on client
    Promise.all([
      import("leaflet"),
      import("react-leaflet"),
      import("leaflet/dist/leaflet.css"),
    ]).then(([leafletModule, reactLeafletModule]) => {
      setL(leafletModule.default);
      setMapContainer(() => reactLeafletModule.MapContainer);
      setTileLayer(() => reactLeafletModule.TileLayer);
      setMarker(() => reactLeafletModule.Marker);
      setPopup(() => reactLeafletModule.Popup);
      setUseMap(() => reactLeafletModule.useMap);
      setLeafletLoaded(true);
    });
  }, []);

  if (!leafletLoaded || !MapContainer) {
    return <div>Loading map...</div>;
  }

  // Fix default marker icon issue in Next.js with Leaflet
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

  // SetView component that uses useMap hook
  const SetView: React.FC<{ center: [number, number]; zoom: number }> = ({
    center,
    zoom,
  }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

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
          <Popup>Edu Heritage Campus</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
