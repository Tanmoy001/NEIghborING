import React from 'react'
import { MapContainer,TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
function Map({setCoordinates,setBounds,coordinates}) {
  return (
<MapContainer
center={coordinates}
zoom={10}
style={{width:'auto',height:'88vh'}}
margin={[50,50,50,50]}
onChange={(e)=>{
  setCoordinates({lat:e.center.lat,lng:e.center.lng});
  setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
  
}}
>
  <TileLayer 
  url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=6abgpz58ZzfjVk7QC4Ye"
  />
</MapContainer>
    )
}

export default Map