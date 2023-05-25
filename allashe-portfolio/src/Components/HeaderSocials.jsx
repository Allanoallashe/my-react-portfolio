import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target='blank'><BsLinkedin /></a>
      <a href="https://github.com" target='blank'><BsGithub/></a>
      <a href="https://whatsapp.com" target='blank'><IoLogoWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials