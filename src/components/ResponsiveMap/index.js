import "./index.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import { React, useEffect, useState } from "react";

export function GetPosition(coordinates) {
  const map = useMap();
  const [position, setPosition] = useState([28.6448, 77.216721]);
  useEffect(() => {
    setPosition(coordinates.coordinates);
  }, [coordinates.coordinates]);
  map.flyTo(position, 12, { duration: 2 });

  // RainViewer API

  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export const ResponsiveMap = (props) => {
  const { coordinates, framedata } = props;
  const pos = [coordinates.lat, coordinates.lon];

  return (
    <div className="main-container">
      <MapContainer center={pos} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <TileLayer
          url={`${framedata.host}${framedata.radar.nowcast[0].path}/4096/{z}/{x}/{y}/${pos.lat}/${pos.lon}/2/0_0.png`}
        /> */}
        <GetPosition coordinates={pos} />
      </MapContainer>
    </div>
  );
};
