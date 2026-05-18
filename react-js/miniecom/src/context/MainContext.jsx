import React, { createContext, useEffect, useState } from 'react'

export let cartContext=createContext()

export default function MainContext({children}) {

  let [cart,setCart]=useState( JSON.parse(localStorage.getItem("CART")) ?? [] )  
  let [countData,setCountData]=useState(0)     
  let cartObj={
        cart,
        cname:"ws",
        countData,
        setCountData,
        setCart
  }

  useEffect(()=>{
    localStorage.setItem("CART",JSON.stringify(cart))
  },[cart])
  return (
    <cartContext.Provider value={cartObj}>
      {children}
    </cartContext.Provider>
  )
}
