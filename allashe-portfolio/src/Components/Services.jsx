import React from 'react'
import './Services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='Services'>
      <h4>What I Offer</h4>
      <h2>Services</h2>

      <div className="services-container">
        <article className="service">
          <div className="service-head1">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Usability
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Compatibility
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Wireframing
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Userfriendly
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Intuitive UI
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Visual Design
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head2">
            <h3>Web Development</h3>
          </div>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Target Audience
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Trust
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> User Experience
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> SEO friendly
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Quality
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Layout
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Graphic Design
            </li>
          </ul>
        </article>
        
        <article className="service">
          <div className="service-head3">
            <h3>Content Creation</h3>
          </div>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Story Telling
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Editorial Direction
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Headlines
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Articla Length Variation
            </li>
          </ul>
          <ul className='service-list'>
            <li><FiCheck className='SL-icon'/> Constant Practice
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services