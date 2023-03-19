
import React, { useEffect } from 'react'
import './PlaceDetails.css'
import { CiLocationOn } from 'react-icons/ci';

import { CiLocationOff } from 'react-icons/ci';
import { MdWebStories } from 'react-icons/md'
import { useState } from 'react';


const PlaceDetails = ({ place,i,catagory}) => {

  // console.log(catagory,'catagory from placedetails')
  const [url, setUrl] = useState({})
  useEffect(()=>{
    if(catagory==='Attractions'){
      setUrl('https://www.holidify.com/images/bgImages/HYDERABAD.jpg');
    }
    else{
      setUrl('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
    }
  },[catagory])
  return (
    <div  className='placeDetails'>
        <div className="card" >
          <img className="card-img-top" style={{height:300}} src={place.photo ? place.photo.images.large.url:url} alt="...."/>
          <div className="card-body">
            <h5 className="card-title">{place.name}</h5>


              <div className='card-content'>
                <p style={{marginRight: "15px"}}>Rating</p>
                <p className='ranking'>
                {place.ranking?place.ranking:
                ( <div className='not_aval'>
                <p>Not Available</p>
                </div>
                )
                }
                </p>
              </div>


      <div className='card-content'>
          {place.cuisine?place.cuisine.map(({name})=>(
          <p className='card_tag'> {name} </p> 
          ))
        :
       ( <div className='not_aval'>
        <p>Not Available</p>
        </div>)
        }
      </div>
      <div className='card-content'>
        {place.address?
        (<div className='address'>
        <CiLocationOn className='locationicon'/>
        {place.address}
        </div>)
        :
        (<div className='address'>
        <CiLocationOff className='locationicon'/>
          <div className='not_aval'>
          </div>
        </div>  )
        }
      </div>

      <div className='card-content websites'>
      <div style={{display:'flex'}} onClick={()=> window.open(place.web_url,'_blank')}>
      <MdWebStories className='locationicon'/>
      <p>Trip advisor</p>
      </div>
      {place.website?(
      <div style={{display:'flex'}} onClick={()=> window.open(place.website,'_blank')}>
      <MdWebStories className='locationicon'/>
      <p>Website</p>
      </div>)
      :
      "Not Abailable"
      }
    
    </div>
  </div>
</div>
</div>
  );
  
}
export default PlaceDetails;