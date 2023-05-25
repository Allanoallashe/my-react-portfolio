import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target='blank'><BsLinkedin style={{width:'40px', height:'40px', color:'blue'}}  /></a>
      <a href="https://github.com" target='blank'><BsGithub style={{width:'40px', height:'40px', color:'#00001b'}} /></a>
      <a href="https://whatsapp.com" target='blank'><IoLogoWhatsapp style={{width:'40px', height:'40px', color:'#11c411'}} /></a>
    </div>
  )
}

export default HeaderSocials