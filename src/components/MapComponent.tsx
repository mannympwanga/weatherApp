import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { Coordinates } from "../types/weather";
import styles from './mapComponent.module.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  center: Coordinates;
  onLocationSelect: (coords: Coordinates) => void;
  darkMode: boolean; // Add darkMode prop
}

const MapEvents = ({ onLocationSelect }: { onLocationSelect: (coords: Coordinates) => void }) => {
  useMapEvents({
    click: (e) => {
      onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
    }
  });
  return null;
};

export const MapComponent = ({ center, onLocationSelect, darkMode }: MapComponentProps) => {
  return (
    <div className={`${styles.mapContainer} ${darkMode ? styles.dark : ''}`}>
      <MapContainer 
        center={[center.lat, center.lng]} 
        zoom={13} 
        scrollWheelZoom={true}
        key={`${center.lat}-${center.lng}`}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url={darkMode ? 
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" : // Dark mode tiles
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Light mode tiles
          }
          attribution='&copy; OpenStreetMap contributors'
        />
        <MapEvents onLocationSelect={onLocationSelect} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;