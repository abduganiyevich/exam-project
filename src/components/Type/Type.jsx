import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import './index.css'
import { Link } from 'react-router-dom';
function Type() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className='item-wrapper' onClick={scrollUp}>
        <div className='item-box' >
            <img src="/image-headphone.png" alt="image" />
            <h2>Headphones</h2>
           <Link to={'/headphones'} className='shop'>shop<MdArrowForwardIos style={{color:'orange'}} /></Link>
        </div>
        <div className='item-box'>
            <img src="/image-speakers.png" alt="image" />
            <h2>Speakers</h2>
            <Link to={'/speakers'} className='shop'>shop<MdArrowForwardIos style={{color:'orange'}} /></Link>
        </div>
        <div className='item-box'>
            <img src="/image-earphones.png" alt="image" />
            <div>
              <h2>Earphones</h2>
              <Link to={'/earphones'} className='shop'>shop <MdArrowForwardIos style={{color:'orange'}}/></Link>
            </div>
        </div>
    </div>
  )
}

export default Type