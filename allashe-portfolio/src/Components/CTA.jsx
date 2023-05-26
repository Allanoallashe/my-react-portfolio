import React from 'react'
import CV from '../cv.pdf'


const CTA = () => {
  return (
    <div className="cta">
      <div className='button'><a href={CV} download >Download CV</a></div>
      <div className='button'><a href="#Contact" >Let's Talk</a></div>
    </div>
  )
}

export default CTA