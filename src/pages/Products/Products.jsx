// Products.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Type from '../../components/Type/Type'
import BestAudio from '../../components/BestAudio/BestAudio'
import Footer from '../../components/Footer/Footer'
import './index.css';

function Products() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then((res) => res.json())
      .then((resjson) => {
        setData(resjson);
      });
  }, [id]);
  return (
    <div>
      <Header />
      <div className="container">
        <div className='item-box22'>
          <div className='item-box-img'>
            <img src={`/src${data?.categoryImage?.desktop}`} alt="" />
          </div>
          <div className='item-box-info'>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <span className='item-price'>$ {data.price}</span>
            <div className='btn-group'>
              <div className='add-btn'>
              <button>-</button>
                <button>0</button>
                <button>+</button>
              </div>
              <div className='add-cart'>
              <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>

      <div className='container'>
        <div className="features-wrapper">
          <div className="features-left">
            <h1>features</h1>
            <p>{data.features}</p>
          </div>
          <div className="features-right">
            <h1>IN THE BOX</h1>
            {Array.isArray(data.includes) &&
              data.includes.map((el, index) => {
                return (
                  <div key={index} className='inthe-box-info'>
                    <div>
                      <span>{el.quantity}</span>
                      <p>{el.item}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className='features-img-wrapper'>
          <div className="features-left-img">
            <img src={`/src${data?.gallery?.first?.desktop}`} alt="" />
            <img src={`/src${data?.gallery?.second?.desktop}`} alt="" />
          </div>

          <div className="features-right-img">
            <img src={`/src${data?.gallery?.third?.desktop}`} alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className='others-wrapper'>
          {Array.isArray(data.others) &&
            data.others.map((el, index) => {
              return (
                <div key={index} className='others-item'>
                  <img src={`/src${el.image.desktop}`} alt="" />
                  <h3>{el.name}</h3>
                  <button>see product</button>
                </div>
              )
            })}
        </div>
      </div>
      <div className="container">
        <Type />
      </div>
      <div className="container">
        <BestAudio />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Products;
