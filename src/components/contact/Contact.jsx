import{ useRef } from 'react';
import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsTwitter} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n6n4cf8', 'template_kld2gmq', form.current, 'Ea69XsVxJxqHioYMN')
    e.target.reset()
      .then((result) => {
        e.target.reset()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">

      <article className="contact__option">
      <MdOutlineEmail/>
        <h4>Email</h4>
        <h5>mrdeveloper70@gmail.com</h5>
        <a href='mailto:mrdeveloper70@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
      </article>

      <article className="contact__option">
      <BsTwitter/>
        <h4>Twitter</h4>
        <h5>Nabeel Dev</h5>
        <a href='https://twitter.com/NabeelAmin70rb' target="_blank" rel="noreferrer">Send a message</a>
      </article>

      <article className="contact__option">
      <BsWhatsapp/>
        <h4>Whatsapp</h4>
        <h5>+923214382188</h5>
        <a href='https://api.whatsapp.com/send?phone+923214382188' target="_blank" rel="noreferrer">Send a message</a>
      </article>
        
      </div>
      {/* End of Contact Option*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name"placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea rows="7" name="message" placeholder='Your Message' required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
     </div>
  </section>
   )
}

export default Contact