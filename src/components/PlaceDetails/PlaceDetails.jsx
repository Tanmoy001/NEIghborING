import React from 'react'
import './PlaceDetails.css'
function PlaceDetails({places})/*Receiving props */ {
  return (
    <div className='PlaceDetails'>
      <div className='card'>
        <div className='card_image'>
          -------------------------
        </div>
      </div>
       <p> {places.name} </p>
    </div>
  )
}

export default PlaceDetails