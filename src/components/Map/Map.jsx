import React from 'react'
import'./Map.css'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { GoLocation } from 'react-icons/go';
import { Icon } from 'leaflet';
function Map({coordinates}) {
  const customIcon = new Icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/512/819/819814.png",
    iconSize:[38,38]
  })
  return (
<MapContainer

center={coordinates}
zoom={1.5}
style={{width:'auto',height:'88vh'}}



>
  <TileLayer 
  
  url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=6abgpz58ZzfjVk7QC4Ye"
  />

<Marker position={coordinates} icon={customIcon}>
  <GoLocation/>
      <Popup className='popup'>
       You
      </Popup>
      {console.log("Map done")}
    </Marker>


</MapContainer>
    )
}

export default Map