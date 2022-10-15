import "./index.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import { React, useEffect, useState } from "react";

export function GetPosition(details) {
  const coordinates = details.details[0];
  const temperature = details.details[1];
  const map = useMap();
  const [position, setPosition] = useState([28.6448, 77.216721]);
  useEffect(() => {
    setPosition(coordinates);
  }, [coordinates]);
  map.flyTo(position, 12, { duration: 2 });

  // RainViewer API

  return (
    <Marker position={position}>
      <Popup>
        <h1>Current Temperature: {temperature}°c</h1>
      </Popup>
    </Marker>
  );
}

export const ResponsiveMap = (props) => {
  const { coordinates, temperature } = props;

  const pos = [coordinates.lat, coordinates.lon];
  const details = [pos, temperature];

  return (
    <div className="main-container">
      <MapContainer center={pos} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GetPosition details={details} />
      </MapContainer>
    </div>
  );
};
