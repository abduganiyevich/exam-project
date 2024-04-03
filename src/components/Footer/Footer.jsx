import React from 'react'
import { Link } from 'react-router-dom'
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './index.css'
function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className='footer-wrapper'>
      <div className="container">
      <div className='footer-left'>
        <div className="footer-logo">
            <Link to={'/'}><img src="/logo.svg" alt="" /></Link>
        </div>
        <p>
        Audiophile is an all in one stop to fulfill your audio <br /> needs. We're Link small team of music lovers and sound <br /> specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo <br /> facility - we’re open 7 days Link week.
        </p>
        <span>Copyright 2021. All Rights Reserved</span>
        </div>

        <div className="footer-right">
        <div className='footer-nav'>
            <ul onClick={scrollUp}>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/speakers'} >Speaker</Link></li>
                <li><Link to={'/headphones'} >Headphone</Link></li>
                <li><Link to={'/earphones'} >   Earphone</Link></li>
            </ul>
        </div>
        <div className="icon-wrapper">
        <div className='footer-icon' >
        <ImFacebook2 />
        <FaTwitter />
        <FaInstagram />
        </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer