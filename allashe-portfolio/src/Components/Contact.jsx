import React from 'react';
import './Contact.css';
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q65b9ha', 'template_r6aqpfy', form.current, 'ikwAfgppJKkQ_6qMU')
    e.target.reset()
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-options">
          <article className="option">
            <MdEmail/>
            <h4>Email</h4>
            <h5>owinoallan77@gmail.com</h5>
            <a href="mailto:owinoallan77@gmail.com" target='blank'>Send a message</a>
          </article>
          <article className="option">
            <BsMessenger/>
            <h4>Messenger</h4>
            <h5>Allan Lenny</h5>
            <a href="https://m.me/allano.allashe" target='blank'>Send a message</a>
          </article>
          <article className="option">
            <IoLogoWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+254703817561</h5>
            <a href="https://api.whatsapp.com/send?phone+254703817561" target='blank'> Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="message" cols="21" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact