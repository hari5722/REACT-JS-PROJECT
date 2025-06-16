import React, { createContext, useEffect, useState } from 'react';
import { discoutProducts, products } from '../js files/product';

export const globalContext = createContext();

export default function MyContext({ children }) {
  const [data, setData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    setData(products);
    setDiscountData(discoutProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(p => p.id === item.id);
      if (existingIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: (updatedCart[existingIndex].quantity || 1) + (item.quantity || 1),
        };
        return updatedCart;
      } else {
        return [...prev, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  return (
    <globalContext.Provider value={{ data, discountData, cart, addToCart, setCart }}>
      {children}
    </globalContext.Provider>
  );
}
