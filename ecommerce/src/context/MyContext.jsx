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
    setCart((prev) => [...prev, item]);
  };

  return (
    <globalContext.Provider value={{ data, discountData, cart, addToCart,cart,setCart }}>
      {children}
    </globalContext.Provider>
  );
}
