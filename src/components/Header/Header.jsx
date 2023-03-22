import React, { useEffect ,useState} from 'react'
import './Header.css'
import { TiWeatherPartlySunny } from 'react-icons/ti';
import{getTempsData} from '../../api/weather'
import BeatLoader from 'react-spinners/BeatLoader'
import {
  Link
} from "react-router-dom";


function Header({coordinates,}) {
  const [temp,setTemp]=useState([])
  const [timezone,settimezone]=useState([])
  const [condition,setcondition]=useState([])
  const [loader, setLoader] = useState(false)
  useEffect(()=>{
    setLoader(true)
    if(coordinates.lat!==1.5937){
    
    getTempsData(coordinates.lat,coordinates.lng)
    .then((data)=>{
    
      setcondition(data.currentConditions.conditions)
      settimezone(data.timezone);
      setTemp(data.currentConditions.temp);
      setLoader(false)
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
            {loader?(<BeatLoader className='rotateloader'color={'#3189'}loading={loader} />):(
          <div className='weather'>
            <div className='temp'>
              <TiWeatherPartlySunny className='logo'/>
              <p>{temp}°F</p>
              </div>  

              <p className='condition'>{condition}</p>
              <p className='area'>{timezone}</p>
              </div>  
            )}
        </div>
        </div>
    </div>
  )
}

export default Header