import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohdjmc4', 'template_7iplmbd', form.current, 'iyaalNzjvKPAAybEl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
               <MdOutlineEmail className="contact__option-icon"/>
               <h4>Email</h4>
               <h5>v8design@hotmail.com</h5>
               <a href="mailto:v8design@hotmail.com" target="_blank" rel="noreferrer">Send a Email</a>
          </article>
          <article className="contact__option">
               <BsWhatsapp className="contact__option-icon"/>
               <h4>WhatsApp</h4>
               <h5>+5491136531122</h5>
               <a href="https://api.whatsapp.com/send?phone=5491136531122" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          </div>
          { /* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required  />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

      


    </section>
  )
}

export default Contact