

// export default Home
// import React, { useEffect ,useState} from 'react'
// import './Header.css'
// import { TiWeatherPartlySunny } from 'react-icons/ti';
// import{getTempsData} from '../../api/weather'
// import BeatLoader from 'react-spinners/BeatLoader'
// import {
//   Link
// } from "react-router-dom";


// function Header({coordinates,}) {
//   const [temp,setTemp]=useState([])
//   const [timezone,settimezone]=useState([])
//   const [condition,setcondition]=useState([])
//   const [loader, setLoader] = useState(false)
//   useEffect(()=>{
//     setLoader(true)
//     if(coordinates.lat!==1.5937){
    
//     getTempsData(coordinates.lat,coordinates.lng)
//     .then((data)=>{
    
//       setcondition(data.currentConditions.conditions)
//       settimezone(data.timezone);
//       setTemp(data.currentConditions.temp);
//       setLoader(false)
//     })
//   }
//   },[coordinates]);     
   
//   return (
//     <div className='container Header_container'>
//         <div className='header_position'>
//             <div className='title'>
//             <h3>NEIghborING</h3>
//             </div>
//           <div className='container options'>
//             <div className='option'>
//               <Link className="nav-link" to="/">Home</Link>
//               <Link className="nav-link" to="/">Foods</Link>
//               <Link className="nav-link" to="/attractions">Attractions</Link>
//             </div>
//             {loader?(<BeatLoader className='rotateloader'color={'#3189'}loading={loader} />):(
//           <div className='weather'>
//             <div className='temp'>
//               <TiWeatherPartlySunny className='logo'/>
//               <p>{temp}°F</p>
//               </div>  

//               <p className='condition'>{condition}</p>
//               <p className='area'>{timezone}</p>
//               </div>  
//             )}
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Header

import { AiOutlineCloud } from 'react-icons/ai';
import { CiTempHigh } from 'react-icons/ci';
import { IoIosWater } from 'react-icons/io';
import { GiWindHole } from 'react-icons/gi';

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import './home.css'

 import React, { useEffect ,useState} from 'react'
import { getTempsData } from '../../api/weather';

function Home({coordinates}) {

  const [temp,setTemp]=useState([])
     const [timezone,settimezone]=useState([])
     const [condition,setcondition]=useState([])
     const [humidity,sethumidity]=useState([])
     const [windspeed,setwindspeed]=useState([])
     const [loader, setLoader] = useState(false)
     useEffect(()=>{
       setLoader(true)
       if(coordinates.lat!==1.5937){
      
       getTempsData(coordinates.lat,coordinates.lng)
       .then((data)=>{
      console.log(data);
      setwindspeed(data.currentConditions.windspeed)
         sethumidity(data.currentConditions.humidity)
         setcondition(data.currentConditions.conditions)
         settimezone(data.timezone);
         setTemp(data.currentConditions.temp);
         setLoader(false)
       })
     }
     },[coordinates]);     
  return (
    <>
    {loader?(<ClimbingBoxLoader style={{height:'85vh',position:"relative"}} className='rotateloader'color={'#3189'}loading={loader}  />):(
    <div className='home_container'>
      <div className='heading'>
      <h3 className='slideInLeft'>Weather forecast near you </h3>
      </div>
      <div className='home_section_one'>
        <div className='cloud_icon'>
          <AiOutlineCloud/>
        </div>
        <div className='loaction'>
          <h2>{condition}</h2>
          <span>In {timezone}</span>
        </div>
      </div>
      <div className='home_section_two'>
        <div className='icon'>
          <CiTempHigh/>
        </div>
        <div className='temperature'>
          <h1>{temp}</h1>
          </div>
      </div>
      <div className='home_section_three'>
        <div className='part_one contents'>
          <div className='icon'>
            <GiWindHole/>
          </div>
          <div className='content'>
            <h5>{windspeed}Km/h</h5>
          </div>
        </div>
        <div className='part_two contents'>
          <div className='icon'>
            <IoIosWater/>
          </div>
          <div className='content'>
            <h5>{humidity}%</h5>
          </div>
        </div>
      </div>
     
    </div>
    )}
    </>
  )
}

export default Home
