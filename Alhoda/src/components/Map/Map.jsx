import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";  // Import Leaflet to set custom icons
import "leaflet/dist/leaflet.css";
import "./map.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const position = [24.5422, 46.7596];

function LeafletMap() {
  return (
    <div className="responsive-map" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "500px" }}>
      <MapContainer center={position} zoom={10} style={{ height: "400px", width: "80%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>We are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
