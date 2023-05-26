import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <p className='footer-logo'>ALLANITY</p>

      <ul className="link">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://Instagram.com"><FaInstagramSquare/></a>
        <a href="https://Twitter.com"><BsTwitter/></a>
      </div>
      <div className="copy">
        <small>&copy; @allanoallasheDev.com, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer