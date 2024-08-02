import React, { useRef } from "react";
import { MapContainer, TileLayer,Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import marker_icon from '../../../assets/images/marker-icon.png'
import chitwan from '../../../assets/images/chitwan.jpg'
import './Map.css'

export const Map = () => {
 
  const mapRef = useRef(null);
  const latitude = 27.9272;
  const longitude = 85.3240;

const myIcon = L.icon({
  iconUrl: marker_icon,
  iconSize: [40, 40],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

  return ( 
    // Make sure you set the height and width of the map container otherwise the map won't show
    <>
      <MapContainer center={[latitude, longitude]} zoom={9} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Additional map layers or components can be added here */}
        <Marker position={[latitude, longitude]} icon={myIcon}> 
          <Popup>
             <div className="popup">
                <img src={chitwan} alt="" />
                <h1>Chitwan</h1>
             </div>
          </Popup>
      </Marker>
        
       
      </MapContainer>
  </>
  );
    
}
