/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {IoLogoTwitter} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';


const footer = () => {
  return (
    <footer>
    <a href="#" className="footer__logo">Nabeel Dev</a>

    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/nabeel.jutt.9461/"><FaFacebook/></a>
      <a href="https://www.instagram.com/nabeelhoney70/"><FaInstagram/></a>
      <a href="https://twitter.com/NabeelAmin70rb"><IoLogoTwitter/></a>
      <a href="https://www.linkedin.com/in/muhammad-nabeel-amin-00887b196"><AiFillLinkedin/></a>
      <a href="https://github.com/Nabeel70"><BsGithub/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Nabeel Dev. All rights reserved</small>
    </div>
    </footer>
  )
}

export default footer