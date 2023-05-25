import React from 'react'
import './Nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {SiMdbook} from 'react-icons/si'
import {RiServiceFill} from 'react-icons/ri'
import { AiFillContacts } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiTwotoneHome style={{ height: '30px', width: '30px', color: '#00001b' }} /></a>
      
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><FaUserTie style={{ height: '30px', width: '30px', color: '#00001b' }} /></a>
      
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><SiMdbook style={{ height: '30px', width: '30px', color: '#00001b' }} /></a>
      
      <a href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiServiceFill style={{ height: '30px', width: '30px', color: '#00001b' }} /></a>
      
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><AiFillContacts style={{height:'30px', width:'30px', color:'#00001b'}}/></a>
      </nav>
  )
}

export default Nav