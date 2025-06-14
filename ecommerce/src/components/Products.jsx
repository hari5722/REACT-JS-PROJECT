import React from 'react';
import { discountProducts } from '../js files/discountData';
import { LuCirclePlus } from "react-icons/lu";


export default function Products() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-5">Big Discount</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-60 ">
        {discountProducts.map((item) => (
          <div key={item.id} className="relative bg-white shadow rounded-xl p-4 transform transition duration-200 hover:-translate-y-2 ">
            <span className="absolute top-2 left-2 bg-black-900 text-white text-xs px-2 py-1 rounded-full">
              {item.discount}% OFF
            </span>
            <img
              src={item.imgUrl}
              alt={item.productName}
              className="w-full h-55 object-fit mb-3"/>
            <h2 className="text-lg font-semibold text-left">{item.productName}</h2>
            <p className="text-yellow-500 text-lg text-left">⭐⭐⭐⭐⭐</p>
            <p className="text-black font-bold text-left">${item.price}</p>
            <div className='px-60 -mt-1'>
            <h2><LuCirclePlus /></h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
