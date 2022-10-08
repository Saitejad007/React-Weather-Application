import "./index.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import React from "react";

export const ResponsiveMap = (props) => {
  const { weatherObject } = props;
  return (
    <div className="main-container">
      <MapContainer
        center={[weatherObject.lat, weatherObject.lon]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
