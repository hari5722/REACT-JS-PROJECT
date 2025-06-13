import React from 'react';
import { ImCart } from "react-icons/im";
import { IoBag } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

export default function Header() {

  return (
    <header className="shadow-md border bg-white">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-xl font-bold">
          <IoBag className="text-3xl " />
          <span className="text-3xl">MART</span>
        </div>
        <div className="flex items-center space-x-6 text-base font-medium">
          <span className="hover:text-black-900 cursor-pointer text-2xl">Home</span>
          <span className="hover:text-black-600 cursor-pointer text-2xl">Shop</span>
          <span className="hover:text-black-600 cursor-pointer text-2xl">Cart</span>
          <span className="hover:text-black-600 cursor-pointer text-3xl">
            <IoMdContact />
          </span>
          <div className="relative">
            <ImCart className="text-3xl hover:text-black-600 cursor-pointer" />            
          </div>
        </div>
      </nav>
    </header>
  );
}
