import React,{useState,useEffect} from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List.jsx";
import Map from "./components/Map/Map.jsx";
import Footer from "./components/footer/Footer.jsx";
// import {getPlacesData} from './api/index'
// import {getPlaceName} from './api/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BeatLoader from 'react-spinners/BeatLoader'
import'./App.css'
function App() {
 
const [coordinates,setCoordinates]=useState({lat:1.5937 ,lng:78.9629});
// const [loader, setloader] = useState(false)
  // useEffect(()=>{
  // navigator.geolocation.getCurrentPosition(({ coords:{latitude,longitude}})=>{
  //   setCoordinates({lat:latitude,lng:longitude});
    
  // })
  // },[]);


 

  // useEffect(()=>{
  //   getPlaceName(coordinates.lat,coordinates.lng)
   
  // },[coordinates])
    useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({ coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude});
      
    })
    },[setCoordinates]);
  
  return (
   <>
    <BrowserRouter>
    
    <Header coordinates={coordinates} />   
    <div className="main_body">
    {/* {loader?(<BeatLoader className='rotateloader'color={'#3189'}loading={loader} >{console.log(loader,"Loader")}</BeatLoader>):( */}
    <Routes>
            <Route
              exact
              path="/"
              element={
                <List coordinates={coordinates}  key='restaurant'catagory='Foods & Hotels' /> }/>
                
            <Route
              exact
              path="/attractions"
              
              element={
                
                <List coordinates={coordinates} key="attractions" catagory='Attractions' /> }
                />


</Routes>
{/* )} */}
      
      <Map  coordinates={coordinates}/> 
       
    </div>
<Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
