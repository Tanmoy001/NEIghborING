import React,{useState ,useEffect} from "react";
import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import Map from "./components/Map/Map.jsx";
import {getPlacesData} from './api/index'


import'./App.css'
function App() {
  const [places ,setPlaces] =useState([]);
const [coordinates,setCoordinates]=useState({lat:23.5259613 ,lng:87.3341144 });
const [bounds,setBounds]=useState(null);
  useEffect(()=>{
  navigator.geolocation.getCurrentPosition(({ coords:{latitude,longitude}})=>{
    setCoordinates({lat:latitude,lng:longitude});
  })
  },[]);

  useEffect(()=>{
    console.log(coordinates,bounds);
    getPlacesData(coordinates.lat,coordinates.lng)
    .then((data)=>{
      setPlaces(data)
    })
  },[coordinates,bounds])
  
  return (
   <>
   <Header/>
    <div className="main_body">
      <List places={places}/> 
      <Map
      setCoordinates={setCoordinates}
      setBounds={setBounds}
      coordinates={coordinates}
      /> 
    </div>

   
   </>
  );
}

export default App;
