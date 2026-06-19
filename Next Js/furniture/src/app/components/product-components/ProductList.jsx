"use client"
import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({data}) {
    let [product,setProduct]=useState(data)
  return (
    <div className="max-w-[1320px] grid grid-cols-[20%_auto] gap-5 my-10">
      <aside></aside>
      <article>
        <div className="grid grid-cols-4 gap-5">
            {
                product.map((obj,index)=>  <ProductCard  pdata={obj}  key={index} />)
            }
        
         
        </div>
      </article>
    </div>
  );
}
