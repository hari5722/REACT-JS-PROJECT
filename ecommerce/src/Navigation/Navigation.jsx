import React from 'react'
import {data, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Shoppage from '../pages/Shoppage';
import ProductDetalis from "../pages/ProductDetails";
import Cart from '../pages/Cart';

export default function Navigation() {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Home/>}/>
            <Route path='/Shoppage' element={<Shoppage data={data}/>}/>
            <Route path='/product/:id' element={<ProductDetalis/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
  }
