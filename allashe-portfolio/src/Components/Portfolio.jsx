import React from 'react'
import './Portfolio.css'
import image1 from '../images/image1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>Recent Work</h4>
      <h1>Portfolio</h1>

      <div className="portfolio-container">
        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>The Coast</h3>
          <div className="btn-link">
            <div className="button"><a href="https://github.com" target='blank'>Github</a>
            </div>
            <div className="button"><a href="https://github.com" target='blank'>Live Demo</a>
            </div>
          </div>
            
        </article>
        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>Sample web</h3>
          <div className="btn-link">
           <div className="button"><a href="https://github.com" target='blank'>Github</a>
            </div>
            <div className="button"><a href="https://github.com" target='blank'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>Blogs</h3>
          <div className="btn-link">
           <div className="button"><a href="https://github.com" target='blank'>Github</a>
            </div>
            <div className="button"><a href="https://github.com" target='blank'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>Snake Game</h3>
          <div className="btn-link">
           <div className="button"><a href="https://github.com" target='blank'>Github</a>
            </div>
            <div className="button"><a href="https://github.com" target='blank'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>Solar System</h3>
          <div className="btn-link">
           <div className="button"><a href="https://github.com" target='blank'>Github</a>
            </div>
            <div className="button"><a href="https://github.com" target='blank'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="port-item-img"><img src={image1} alt="" /></div>
          <h3>E-Commerce</h3>
          <div className="btn-link">
           <div className="button"><a href="https://github.com" target='blank'>Github</a>
            </div>
            <div className="button"><a href="https://github.com" target='blank'>Live Demo</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio