import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Products from './components/Products';
import NewArrivals from './pages/NewArrivals';
import BestSales from './pages/BestSales'

export default function App() {
  return (
    <div>
    <Header />
    <Carousel />
    <Cards />
    <Products/>
    <NewArrivals/>
    <BestSales/>
   <Footer />
</div>

  )
}
