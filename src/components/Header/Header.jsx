import React, { useEffect,useCallback  } from 'react'
import './Header.css'
import {
  Link
} from "react-router-dom";

import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { getCordi } from '../../api/weather';
function Header({ setCoordinates }) {
  const [query, setQuery] = useState('');
  const getRandomCity = useCallback(() => {
    const cityNames = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco'];
    const randomIndex = Math.floor(Math.random() * cityNames.length);
    return cityNames[randomIndex];
  }, []);
  const gradientStyle = {
    backgroundColor: 'linear-gradient(to right, #ff0000, liteblue)',

  };
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    
   getCordi(query).then((data)=>{
    
    const lat = data.latitude;
    const lng = data.longitude;
    
    setCoordinates({lat:lat,lng:lng});
    setQuery('');
   })

  };
  const [placeholder, setPlaceholder] = useState(`"${getRandomCity()}"`);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholder(`"${getRandomCity()}"`);
    }, 10000); // Change every 5 seconds (5000 milliseconds)

    return () => clearInterval(intervalId);
  }, [getRandomCity]);
 

   
  return (
    <div className='container Header_container' >
        <div className='header_position'style={gradientStyle}>
            <div className='title'>
            <h3>NEIghborING</h3>
            </div>
          <div className='container options'>
            <div className='option'>
              <Link className="nav-link" to="/">Forecast</Link>
              <Link className="nav-link" to="/foods">Foods</Link>
              <Link className="nav-link" to="/attractions">Places</Link>
            </div>    
        </div>
        <div className='searchbar'>
        <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
 
    
      <button onClick={handleSearch}><AiOutlineSearch/></button>
    </div>
        </div>
    </div>
  )
}

export default Header