import React from 'react'

import Carousel from './Carousel'
import Cards from './Cards'
import Products from './Products'
import NewArrivals from '../pages/NewArrivals'
import BestSales from '../pages/BestSales'


export default function Home() {
  return (
    <div>
      <Carousel/>
      <Cards/>
      <Products/>
      <NewArrivals/>
      <BestSales/>
    </div>
  )
}
