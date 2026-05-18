import React, { useContext, useEffect, useState } from "react";
import { imageArray } from "../../Data/Data";
import Faq from "../common/Faq";
import { cartContext } from "../../context/MainContext";

export default function Home() {
  
   let {cart,setCart}= useContext(cartContext)

  let [mainImage,setMainimage]=useState(imageArray[0])

  let [count, setCount] = useState(0); //1 ,2
  let [password, setPassword] = useState(false);

  let [product,setProduct]=useState([])



  function changeCounter() {
    setCount(count + 1);
  }


  function getCategory(){
     console.log("Category");
  }

  async function getProduct(){
      let apiRes=await fetch('https://wscubetech.co/ecommerce-api/products.php')
      let data=await apiRes.json()
      let {products}=data

      setProduct(products)
    
      
    
  }


  // useEffect(()=>{
  //       getCategory()
  //     getProduct()

  // },[])  //One Time Call

 console.log(cart);
 
  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div className="text-center">

      <section className="bg-yellow-200 py-10">
          <h2>Our Product</h2>
          <div className="max-w-[1320px] mx-auto grid grid-cols-4 mt-5 gap-5">
              <ProductCard/>
             
          </div>

          <button onClick={()=>{
            setCart([...cart,Math.random()*255])
          }}>Add To Cart</button>
      </section>


        <Faq/>


      <div className="max-w-[600px] mx-auto border-1">
        {mainImage}
        <img
          src={mainImage}
          alt=""
        />
        <div className="grid grid-cols-4 gap-3 my-3">
          {
            imageArray.map((src,i)=>{
              return(
                 <img
                 key={i}
                  src={src}
                  onClick={()=>setMainimage(src)}
                  alt=""
                />
              )
            })
          }
         
         
        </div>
      </div>
      <input type={password ? "text" : "password"} className="border" />
      <button onClick={() => setPassword(!password)}>
        {password ? "hide" : "show"}
      </button>
      <h1 className="text-3xl"> {count} </h1>
      <button onClick={changeCounter} className="bg-red-500 p-2">
        Save
      </button>
      <button onClick={() => addData(25, 99)} className="bg-red-500 p-2">
        Add
      </button>
      Home Page
      <button
        onClick={() => {
          alert("Welcome");
        }}
      >
        Save
      </button>
    </div>
  );
}


function ProductCard(){
  return(
    <div className="bg-white">
      <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" />
      <h3>Iphone</h3>
      <p>
        Rs 500
      </p>
    </div>
  )
}