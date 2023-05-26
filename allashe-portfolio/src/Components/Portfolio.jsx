import React from 'react'
import './Portfolio.css'
import image1 from '../images/image1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h1>Portfolio</h1>

      <div className="portfolio-container">
        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>the coast</h3>
          <a href="https://github.com" className='btn' target='blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>simple web</h3>
          <a href="https://github.com" className='btn' target='blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>blogs</h3>
          <a href="https://github.com" className='btn' target='blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>snake game</h3>
          <a href="https://github.com" className='btn' target='blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>solar system</h3>
          <a href="https://github.com" className='btn' target='blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>E-Commerce</h3>
          <a href="https://github.com" className='btn' target='blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio