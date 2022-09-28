import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiInstagramLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_asl5qoj','template_kc5mcyl', form.current, 'r_uoeJGiNJnSyol_w')
    e.target.reset(0)
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nitishsihmar.mca2017.mnnit@gmail.com</h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiInstagramLine className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Nitish Sihmar</h5>
            <a href='https://www.instagram.com/nitishsihmar/' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7838145866</h5>
            <a href='https://api.whatsapp.com/send?phone=7838145866' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact