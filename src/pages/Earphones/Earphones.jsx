import React from 'react'
import Header from '../../components/Header/Header'
import BestAudio from '../../components/BestAudio/BestAudio'
import Type from '../../components/Type/Type'
import Footer from '../../components/Footer/Footer'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
function Earphones() {
  const [data,setData]=useState([])
  const navigate=useNavigate();
  useEffect((()=>{
    fetch('http://localhost:3000/0')
    .then(res=>res.json())
    .then(datajson=>{
        setData(datajson)
    })
    .catch((err)=>{
      console.log(err);
    })
  }),[])

  function handleClick(id) {
    navigate(`/products/${id-1}`);
  }
  return (
    <div>
      <Header/>
      <div className="earphones-top">
        <h1>Earphones</h1>
      </div>
      <div className="container">
        <div className="xx99">
          <div className="xx99-img">
            <img src="/image-yx1-earphones.jpg" width={600} alt="" />
          </div>

          <div className="xx99-info">
            <span>NEW PRODUCT</span>
            <h1>{data.name}</h1>
            <div>
              <p>{data.description}</p>
              <button onClick={()=>handleClick(data.id)}>see product</button>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="container">
      <Type/>
      </div>
      <div className="container">
        <BestAudio/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Earphones