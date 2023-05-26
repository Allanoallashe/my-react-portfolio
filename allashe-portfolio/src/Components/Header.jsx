import React from 'react'
import './Header.css'
import CTA from './CTA'
import image3 from '../images/image3.jpeg'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header>
      <div className=" header-container">
        <div className='description'>
          <Typewriter
        options={{
            strings: [ ' I am Allan Lenny', 'I am  A Fullstack webdeveloper', 'I am  Lets Talk'],
            autoStart: true,
              loop: true,
              pauseFor: 5000,
             }}
              />
        </div>
        <CTA />
        <HeaderSocials/>

        <img src={image3} alt="profile" />
        
        <a href="#Contact" className='scroll_down'>
          <i class="fa-solid fa-arrow-down fa-beat"></i>
        </a>
      </div>
    </header>
  )
}

export default Header