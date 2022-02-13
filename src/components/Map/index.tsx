import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{
      height: '100%',
      width: '100%',
    }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[0, 0]}>
      <Popup>map popup</Popup>
    </Marker>
  </MapContainer>
);

export default Map;