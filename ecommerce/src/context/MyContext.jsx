import React,{createContext,useEffect} from 'react'
import { discoutProducts,products } from '../js files/product'
import { useState } from 'react'
export const globalContext=createContext()
export default function MyContext({children}) {
    const[data,setData]=useState([])
    const [discountData,setDiscountData]=useState([])
    const fetchData=()=>{
        setData(products)
        setDiscountData(discoutProducts)
    }
    useEffect(()=>{fetchData()},[])
  return (
    <globalContext.Provider value={{data,discountData}}>
        {children}
    </globalContext.Provider>
  )
}
