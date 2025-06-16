import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './Navigation/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
    <Header/>
    <Navigation/>
    <Footer/> 
    <ToastContainer position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
      pauseOnHover/>     
</div>

  )
}
