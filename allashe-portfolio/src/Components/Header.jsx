import React from 'react'
import './Header.css'
import CTA from './CTA'
import image2 from '../images/image2.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Allan Lenny</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CTA />
        <div className="me">
          <img src={image2} alt="profile" />
        </div>
      </div>
    </header>
  )
}

export default Header