import React,{useState} from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import './List.css'
function List({places}) {
const [type,setType]=useState('restaurants')
const [rating,setRating]=useState('All')

  return (
    <div className='container List_content'>
    <h3 className='slideInLeft'>Food and Dinner around you</h3>
    <div className='types'>
    <form>
       <h4>Type</h4>
         <select value={type} onChange={(e)=>setType(e.target.value)}>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
         </select>
         <span className="line"></span>
    </form>
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
      {places?.map((places,i)=>(
        <div key={i}>
          <PlaceDetails places={places}/> {/* props*/}
          </div>
      ))}
    </div>
    
</div>
  )
}

export default List