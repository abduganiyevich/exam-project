import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Earphones from './pages/Earphones/Earphones'
import Headphones from './pages/Headphones/Headphones'
import Speakers from './pages/Speakers/Spekers'
import Products from './pages/Products/Products'


function App() {

  return (
    <>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/products/:id" element={<Products/>} />
      </Routes>
    </>
  )
}

export default App
