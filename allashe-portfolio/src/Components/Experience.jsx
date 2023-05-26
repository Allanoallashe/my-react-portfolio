import React from 'react'
import './Experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {ImCss3} from 'react-icons/im'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiBootstrap} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {BsFiletypePhp} from 'react-icons/bs'
import {BsFiletypeSql} from 'react-icons/bs'
import {TbBrandLaravel} from 'react-icons/tb'

const Experience = () => {
  return (
    <section id='Experience'>
      <h4>The Skills I Have</h4>
      <h2>My Experience</h2>

      <div className="exp_container">
        <div className="front">
          <h3>Frontend Development</h3>
          <div className="exp_content">
            <div className="exp-q">
              <article className='exp_details'> <ImHtmlFive className='exp-icon' />Html</article>
              <p>Experienced</p>
            </div>
            <div className="exp-q">
              <article className='exp_details'> <ImCss3 className='exp-icon' />CSS</article>
              <p>Experienced</p>
            </div>
            <div className="exp-q">
              <article className='exp_details'> <TbBrandJavascript className='exp-icon' />Javascript</article>
              <p>Experienced</p>
            </div>
            <div className="exp-q">
              <article className='exp_details'> <SiBootstrap className='exp-icon' />Bootstrap</article>
              <p>Experienced</p>
            </div>
            <div className="exp-q">
              <article className='exp_details'> <SiTailwindcss className='exp-icon' />Tailwind</article>
              <p>Experienced</p>
            </div>
            <div className="exp-q">
              <article className='exp_details'> <FaReact className='exp-icon' />React</article>
              <p>Experienced</p>
            </div>
          </div>
        </div>
        <div className="back">
          <h3>Backend Development</h3>
          <div className="exp_content">
            <div className="exp-q">
              <article className="exp_details"><FaNodeJs className='exp-icon' />NodeJs</article>
              <p>Basic</p>
            </div>
            <div className="exp-q">
              <article className="exp_details"><BsFiletypePhp className='exp-icon' />Php</article>
              <p>Intermediate</p>
            </div>
            <div className="exp-q">
              <article className="exp_details"><BsFiletypeSql className='exp-icon' />MySQL</article>
              <p>Intermediate</p>
            </div>
            <div className="exp-q">
              <article className="exp_details"><TbBrandLaravel className='exp-icon' />Laravel</article>
              <p>Basic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience