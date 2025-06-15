import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './Navigation/Navigation';
import Cart from './pages/Cart';

export default function App() {
  return (
    <div>
    <Header/>
    <Navigation/>
    <Cart/>
    <Footer/>      
</div>

  )
}
