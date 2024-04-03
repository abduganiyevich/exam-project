import React from 'react'
import Header from '../../components/Header/Header'
import Type from '../../components/Type/Type'
import BestAudio from '../../components/BestAudio/BestAudio'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import './index.css'
function Home() {

  function handleSmooth() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div className='wrapper'>

      <div className='home-wrapper'>
        <Header />
        <div className="container">
          <div className="hero-section">
            <div className='home-product'>
              <span>NEW PRODUCT </span>
              <h1>XX99 MARK 11 HEADPHONES</h1>
              <p>Experience natural, lifelike audio and exceptional
                build quality made for the passionate music enthusiast.</p>
             <Link to={'/products/3'}>
             <button onClick={handleSmooth}>See product</button>
             </Link>
            </div>
            <div>
              <Type />
            </div>
            <div className='zx9'>
              <div className='zx9-image'>
                <img src="/stein.png" width={375} alt="" />
              </div>
              <div className='zx9-info'>
                <h2>ZX9 <br />SPEAKER</h2>
                <p>
                  Upgrade to premium speakers that are
                  phenomenally built to deliver truly remarkable sound.</p>
                <Link to={'/products/5'}>
                <button onClick={handleSmooth} className='zx9-button'>See product</button>
                </Link>
              </div>
            </div>
            <div className='zx7'>
              <h3>ZX7 SPEAKER</h3>
             <Link to={'/products/4'}>
             <button onClick={handleSmooth} className='zx7-button'>See Product</button>
             </Link>
            </div>
            <div className='yx1-wrapper'>
              <div className='yx1-img'>
                <img src="/download.jpg" alt="" />
              </div>
              <div className='yx1-info'>
                <h3>YX1 EARPHONES</h3>
               <Link to={'/products/0'} > <button onClick={handleSmooth} className='yx1-button'>See product</button></Link>
              </div>
            </div>
            <div>
              <BestAudio />
            </div>

          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home