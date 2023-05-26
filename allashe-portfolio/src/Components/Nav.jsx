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
      <div className="links">
        <a id='l1' href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiTwotoneHome style={{ height: '30px', width: '30px', color: '#00001b' }} />
          <small className='tooltip1'>Home</small>
        </a>
      
        <a id='l2' href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><FaUserTie style={{ height: '30px', width: '30px', color: '#00001b' }} />
        <small className="tooltip2">about</small>
        </a>
      
        <a id='l3' href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><SiMdbook style={{ height: '30px', width: '30px', color: '#00001b' }} />
        <small className="tooltip3">experience</small>
        </a>
      
        <a id='l4' href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiServiceFill style={{ height: '30px', width: '30px', color: '#00001b' }} />
        <small className="tooltip4">services</small>
        </a>
      
        <a id='l5' href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><AiFillContacts style={{ height: '30px', width: '30px', color: '#00001b' }} />
          <small className="tooltip5">contact</small>
        </a>
        </div>
      </nav>
  )
}

export default Nav