import React,{useState,useEffect} from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import './List.css'
import {getPlacesData} from '../../api/index'
import {getAttractionssData} from '../../api/attractions'
function List({coordinates,catagory}) {

  const [places ,setPlaces] =useState([]);
  const [rating,setRating]=useState('All')
  console.log(catagory,'catagory list')
  useEffect(()=>{
    if(coordinates.lat!==1.5937){
      if(catagory==='Foods & Hotels'){
        getPlacesData(coordinates.lat,coordinates.lng)
        .then((data)=>{
          console.log(data)
          setPlaces(data)
        })
        }
      // if(catagory==='hotel'){
        if(catagory==='Attractions'){
      getAttractionssData(coordinates.lat,coordinates.lng)
        .then((data)=>{
          console.log(data)
           setPlaces(data)
        })
      }
        // }    
    }
},[coordinates,catagory]);  
  return (
    <div className='container List_content'>
    <h3 className='slideInLeft'>{catagory} around you</h3>
    <div className='types'>
    <form className='rating'>
             <h4>Rating</h4>
            <select value={rating} onChange={(e)=>setRating(e.target.value)} >
              <option value={0}>All</option>
              <option value={3}>Above 3.0</option>
              <option value={4}>Above 4.0</option>
              <option value={4.5}>Above 4.5</option>
            </select>
            <span className="line"></span>
    </form>
    </div>
    <div className='container place_details'>
      {places?.map((place,i)=>(
        <div key={i}>
          <PlaceDetails place={place} catagory={catagory}/>
         
          </div>
      ))}
    </div>
    
</div>
  )
}

export default List