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
import Home from "./components/Home/Home";
function App() {
 
const [coordinates,setCoordinates]=useState({lat:1.5937 ,lng:78.9629});
const [locationPermission, setLocationPermission] = useState("null");
    useEffect(()=>{ 
       navigator.permissions.query({name:"geolocation"}).then((result)=>{
         setLocationPermission(result.state);
       })
      if(locationPermission==='granted'){
    navigator.geolocation.getCurrentPosition(({ coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude});
      
    })
    }
    else{
      setCoordinates({lat:20.5937,lng:78.9629});
    }
    console.log(locationPermission)
    },[setCoordinates,locationPermission]);
  
  return (
   <>
    <BrowserRouter>
    <div className="moving-text-container">
    <a  href="https://drive.google.com/file/d/1ztU_nGDg_Sz3Spvy0v7adjOm7chHM4kM/view?usp=sharing" target={'_blank'}rel="noreferrer"  className='moving-text btn'>Your NEIghborING is now available on app .Click here to DOWNLOAD it now .</a>
        {/* <div className="moving-text">Your NEIghborING is now available on app . Download it now .</div> */}
      </div>
    
    <Header setCoordinates={setCoordinates} />   
    <div className="main_body">
    {/* {loader?(<BeatLoader className='rotateloader'color={'#3189'}loading={loader} >{console.log(loader,"Loader")}</BeatLoader>):( */}
    <Routes>
    <Route
              exact
              path="/"
              element={
                <Home  coordinates={coordinates}  key='home'/>}/>
            <Route
              exact
              path="/foods"
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
