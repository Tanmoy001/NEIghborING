import React, { useEffect ,useState} from 'react'
import './Header.css'
import { TiWeatherPartlySunny } from 'react-icons/ti';
import{getTempsData} from '../../api/weather'

import {
  Link
} from "react-router-dom";


function Header({coordinates}) {
  const [temp,setTemp]=useState([])
  const [timezone,settimezone]=useState([])
  const [condition,setcondition]=useState([])
  useEffect(()=>{
    if(coordinates.lat!==1.5937){
    console.log(coordinates,'from header')
    getTempsData(coordinates.lat,coordinates.lng)
    .then((data)=>{
      console.log(data)
      setcondition(data.currentConditions.conditions)
      settimezone(data.timezone);
      setTemp(data.currentConditions.temp);
     
    })
  }
  },[coordinates]);     
   
  return (
    <div className='container Header_container'>
        <div className='header_position'>
            <div className='title'>
            <h3>NEIghborING</h3>
            </div>
          <div className='container options'>
            <div className='option'>
              <Link className="nav-link" to="/">Foods</Link>
              <Link className="nav-link" to="/attractions">Attractions</Link>
            </div>
          <div className='weather'>
            <div className='temp'>
              <TiWeatherPartlySunny className='logo'/>
              <p>{temp}°F</p>
              </div>  

              <p>{condition}</p>
              <p>{timezone}</p>
              </div>  
        </div>
        </div>
    </div>
  )
}

export default Header