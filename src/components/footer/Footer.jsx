/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

     <div className="footer__socials">
      <a href="https://www.instagram.com/zambav8/" target='_blank' rel="noreferrer"><GrInstagram/></a>
      <a href="https://twitter.com/cuervozamba" target='_blank' rel="noreferrer"><FiTwitter/></a>

     </div>

    </footer>
  )
}

export default Footer