import React from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai';
function Header() {
  return (
    <div className='container Header_container'>
        <div className='header_position'>
   
            <h3>Travel Helper</h3>
            <h4>Explore new places</h4>
        
        <div className='container search_bar'>
            <div className='search_icon'>
            <AiOutlineSearch/>
            </div>
            <div className="col">
                <div className="inputBox textarea">
                    <input type="text" className='search_text' placeholder='Search...'/>
                    <span className="line"></span>
                    
                </div>
            </div>
         
        </div>
        </div>
    </div>
  )
}

export default Header