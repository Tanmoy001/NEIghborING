import React,{useState,useEffect} from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import './List.css'
import {getPlacesData} from '../../api/index'
import {getAttractionssData} from '../../api/attractions'
import BeatLoader from 'react-spinners/BeatLoader'
function List({coordinates,catagory}) {
  const [loader, setLoader] = useState(true)
  const [places ,setPlaces] =useState([]);
  const [rating,setRating]=useState('All')
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  

  useEffect(()=>{
    setLoader(true);
    if(coordinates.lat!==1.5937){
      if(catagory==='Foods & Hotels'){
        
        getPlacesData(coordinates.lat,coordinates.lng)
        .then((data)=>{
       
          setPlaces(data)
          setLoader(false)
        })
        
        }
      // if(catagory==='hotel'){
        if(catagory==='Attractions'){
          
      getAttractionssData(coordinates.lat,coordinates.lng)
        .then((data)=>{
        
           setPlaces(data)
           setLoader(false)
        })
    
      }
        // }    
        
        
      }
},[coordinates,catagory,setLoader]);  
useEffect(() => {
  const filtered = places.filter((place) => Number(place.rating) > rating);

  setFilteredPlaces(filtered);
}, [rating,places]);


  return (
    <div className='container List_content'>
    <h3 className='slideInLeft'>{catagory} around you</h3>
      {loader?(<BeatLoader style={{height:'85vh'}}className='rotateloader'color={'#3189'}loading={loader} />):(
        <>
    <div className='types'>
    <form className='rating'>
             <h4>Rating</h4>
            <select value={rating} onChange={(e)=>setRating(e.target.value)} >
              <option value="">All</option>
              <option value="3">Above 3.0</option>
              <option value="4">Above 4.0</option>
              <option value="4.5">Above 4.5</option>
            </select>
            <span className="line"></span>
    </form>
    </div>
  
    <div className='container place_details'>
    {
    filteredPlaces.length ? 
    (filteredPlaces?.map((place,i)=>(
      <div key={i}>
        <PlaceDetails place={place} catagory={catagory}/>
       
        </div>
    )))
    : 
      (places?.map((place,i)=>(
        <div key={i}>
          <PlaceDetails place={place} catagory={catagory}/>
         
          </div>
      )))
      }
    </div>
    </>
    )}
</div>
  )
}

export default List