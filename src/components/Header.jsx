import React, { useContext } from 'react';
import { ImCart } from "react-icons/im";
import { IoBag } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { globalContext } from '../context/MyContext';

export default function Header() {
  const { cart } = useContext(globalContext);
  return (
    <header className="z-100 fixed w-full shadow-md border bg-white top-0 left-0">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center flex-wrap">
        <div className="flex items-center cursor-pointer space-x-2 text-xl font-bold">
          <IoBag className="text-3xl" />
          <span className="text-3xl">
            <Link to="/" className='text-black no-underline hover:text-gray-800'>MART</Link>
          </span>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6 text-base font-medium mt-2 sm:mt-0 flex-wrap">
          <span className="hover:text-gray-900 cursor-pointer text-xl sm:text-2xl">
            <Link to="/" className='text-black no-underline hover:text-gray-900'>Home</Link>
          </span>
          <span className="hover:text-gray-600 cursor-pointer text-xl sm:text-2xl">
            <Link to="/Shoppage" className='text-black no-underline hover:text-gray-600'>Shop</Link>
          </span>
          <span className="hover:text-gray-600 cursor-pointer text-xl sm:text-2xl">
            <Link to="/cart" className='text-black no-underline hover:text-gray-600'>Cart</Link>
          </span>
          <span className="hover:text-gray-600 cursor-pointer text-2xl sm:text-3xl">
            <IoMdContact />
          </span>
          <div className="relative">
            <Link to="/cart">
                <ImCart className="text-2xl sm:text-3xl hover:text-gray-600 cursor-pointer text-black" />
                <span className="absolute -top-2 -right-2 bg-blue-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart ? cart.length : 0}
                </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}