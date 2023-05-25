import React from 'react'
import './Header.css'
import CTA from './CTA'
import profile from '../images/profile.jpg'
import image3 from '../images/image3.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className=" header-container">
        <div className='description'>
          <h5>Hello I'm</h5>
          <h1>Allan Lenny</h1>
          <h5 className="text-light">
            Fullstack Developer
          </h5>
        </div>
        <CTA />
        <HeaderSocials />

        <img src={image3} alt="profile" />
        
        <a href="#contact" className='scroll_down'>
          <i class="fa-solid fa-arrow-down fa-beat"></i>
        </a>
      </div>
    </header>
  )
}

export default Header