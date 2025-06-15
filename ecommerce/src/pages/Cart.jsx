import React, { useContext } from 'react';
import { globalContext } from '../context/MyContext';

export default function Cart() {
  const { cart } = useContext(globalContext);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="border-b py-4">
              <div className="flex justify-between">
                <span>{item.productName}</span>
                <span>${item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
