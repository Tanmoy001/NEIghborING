import React from 'react'
import './footer.css'
import { FiFacebook } from 'react-icons/fi';

import { AiOutlineInstagram } from 'react-icons/ai';

import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='/' className='footer_logo'>NEIghborING</a>
      <p>by Tanmoy Chowdhury</p>
      <div className='footer_socials'>
        <a href='https://www.facebook.com/itzave.chowdhury/'target={'_blank'} rel="noreferrer"><FiFacebook style={{border:'none'}} className='icon'/></a>
        <a href='https://www.instagram.com/ig_chowdhury/?hl=en'target={'_blank'} rel="noreferrer"><AiOutlineInstagram style={{border:'none'}} className='icon'/></a>
        <a href='https://github.com/Tanmoy001'target={'_blank'} rel="noreferrer"><BsGithub style={{border:'none'}} className='icon'/></a>
      </div>
      <div className='fotter_copyright'>
        <small>&copy;All rights are reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
