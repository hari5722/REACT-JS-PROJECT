import React, { createContext, useEffect, useState } from 'react';
import { discoutProducts, products } from '../js files/product';

export const globalContext = createContext();

export default function MyContext({ children }) {
  const [data, setData] = useState([]);
  const [discountData, setDiscountData] = useState([]);

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to parse cart from localStorage:', error);
      return [];
    }
  });

  const fetchData = () => {
    setData(products);
    setDiscountData(discoutProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <globalContext.Provider value={{ data, discountData, cart, addToCart, setCart }}>
      {children}
    </globalContext.Provider>
  );
}
