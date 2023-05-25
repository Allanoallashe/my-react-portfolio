import React from 'react';
import './About.css';
import Me from '../images/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about_container">
        <div className="about_content">
          <div className="about_cards">
            <div className="about_me">
              <img src={Me} alt="" onMouseLeave={() => {document.querySelector('.about_me img').style.transition='0.6s ease'}} />
            </div>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>50+ Clients</small>
            </article>
            <article className='about_card'>
              <AiFillFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>20+ cCompleted</small>
            </article>
          </div>

          <p>I am Allan, a fullstack web developer. I love programming and I am readily available for work.</p>
          <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;