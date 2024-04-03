import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Type from '../../components/Type/Type'
import Footer from '../../components/Footer/Footer'
import './index.css'
import { useNavigate } from 'react-router-dom'
function Headphones() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const[head,setHead]=useState([]);
  const navigate = useNavigate();
  useEffect((() => {
    fetch('http://localhost:3000/3')
      .then((res) => res.json())
      .then(datajson => {
        setData(datajson);
      })
  }), []);

  useEffect(() => {
    fetch('http://localhost:3000/2')
      .then((info) => info.json())
      .then((infojson) => {
        setItem(infojson);
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/1')
      .then((info) => info.json())
      .then((eljson) => {
        setHead(eljson);
      })
  }, [])

  function handleid(id) {
    navigate(`/products/${id-1}`);
  }

  function handleslug(id) {
    navigate(`/products/${id-1}`);
  }

  function handlehead(id) {
    navigate(`/products/${id-1}`);
  }

  return (
    <div>
      <Header />
      <div className="headphones-top">
        <h1>{data.category}</h1>
      </div>
      <div className="container">
        <div className="xx99">
          <div className="xx99-img">
            <img src='/image-product.jpg' width={600} alt="" />
          </div>
          <div className="xx99-info">
            <span>NEW PRODUCT</span>
            <h1 className='data-name'>{data.name}</h1>
            <div>
              <p>{data.description}</p>
              <button onClick={() => handleid(data.id)}>see product</button>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="container">
        <div className="xx99-mark">
          <div className="xx99-mark-info">
            <h1>{item.name}</h1>
            <div>
              <p>{item.description}</p>
              <button onClick={() => handleslug(item.id)}>see product</button>
            </div>
          </div>
          <div className="xx99-mark-img">
            <img src="/image-xx99.jpg" width={600} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="xx99">
          <div className="xx99-img">
            <img src="/image-xx59.jpg" width={600} alt="" />
          </div>
          <div className="xx99-info">
            <h1>{head.name}</h1>
            <div>
              <p>{head.description}</p>
              <button onClick={()=>handlehead(head.id)}>see product</button>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='container'>
        <Type />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Headphones