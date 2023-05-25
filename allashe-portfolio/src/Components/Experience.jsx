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
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="exp_container">
        <div className="front">
          <h2>Frontend Development</h2>
          <div className="exp_content">
            <article className='exp_details'> <ImHtmlFive className='exp-icon'/>Html</article>
            <article className='exp_details'> <ImCss3 className='exp-icon'/>CSS</article>
            <article className='exp_details'> <TbBrandJavascript className='exp-icon'/>Javascript</article>
            <article className='exp_details'> <SiBootstrap className='exp-icon'/>Bootstrap</article>
            <article className='exp_details'> <SiTailwindcss className='exp-icon'/>Tailwind</article>
            <article className='exp_details'> <FaReact className='exp-icon'/>React</article>
          </div>
        </div>
        <div className="back">
          <h2>Backend Development</h2>
          <div className="exp_content">
            <article className="exp_details"><FaNodeJs className='exp-icon'/>NodeJs</article>
            <article className="exp_details"><BsFiletypePhp className='exp-icon'/>Php</article>
            <article className="exp_details"><BsFiletypeSql className='exp-icon'/>MySQL</article>
            <article className="exp_details"><TbBrandLaravel className='exp-icon'/>Laravel</article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience