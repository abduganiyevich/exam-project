// Speakers.jsx

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Type from '../../components/Type/Type';
import Footer from '../../components/Footer/Footer';
import styles from './Speakers.module.css';
import { useNavigate } from 'react-router-dom';

function Speakers() {
  const [data,setData]=useState([])
  const[item,setItem]=useState([])
  const navigate=useNavigate();
  useEffect((()=>{
    fetch('http://localhost:3000/5')
    .then(res=>res.json())
    .then(itemjson=>{
        setData(itemjson)
    })
    .catch((err)=>{
      console.log(err);
    })
  }),[])

  useEffect((()=>{
    fetch('http://localhost:3000/4')
    .then(res=>res.json())
    .then(productjson=>{
        setItem(productjson)
    })
    .catch((err)=>{
      console.log(err);
    })
  }),[])

  function handleSpeakers(id) {
    navigate(`/products/${id-1}`);
  }

  function handleprod(id) {
    navigate(`/products/${id-1}`);
  }
  return (
    <div>
      <Header />
      <div className={styles.speakersTop}>
        <h1>Speakers</h1>
      </div>
      <div className='container'>
        <div className={`${styles.speakerWrapper} ${styles.zx9Wrapper}`}>
          <div className={styles.speakerImg}>
            <img src="/image-zx9.jpg" width={600} alt="" />
          </div>
          <div className={styles.speakerInfo}>
            <span className={styles.newProduct}>NEW PRODUCT</span>
            <h1>{data.name}</h1>
            <div>
              <p>{data.description}</p>
              <button onClick={()=>handleSpeakers(data.id)}>See product</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className={`${styles.speakerWrapper} ${styles.zx7Wrapper}`}>
          <div className={styles.speakerInfo}>
            <h1>{item.name}</h1>
            <div>
              <p>{item.description}</p>
              <button onClick={()=>handleprod(item.id)} >See product</button>
            </div>
          </div>
          <div className={styles.speakerImg}>
            <img src="/image-zx7.jpg" width={600} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <Type/>
      </div>
      <Footer/>
    </div>
  );
}

export default Speakers;
