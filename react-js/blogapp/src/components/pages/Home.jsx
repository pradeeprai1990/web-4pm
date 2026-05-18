import React from "react";
import "./Home.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
export default function Home() {
  return (
    <>
      <section className="bg-red-300 py-[55px]">
        <h1 className="text-center text-4xl">Our Product</h1>
        <div className="max-w-[1320px] mx-auto mt-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section className="py-12 bg-[#0032e5] lg:px-0 px-5">
        <div className="max-w-middle-container gap-6 mx-auto grid lg:grid-cols-[25%_auto] grid-cols-1 ">
          <aside className="bg-white p-4">
            <div>
              <h3 className="font-bold text-2xl">Category</h3>
              <ul className="mt-5">
                <li className="mb-3 text-gray-600 text-xl">Smartphone</li>
                <li className="mb-3 text-gray-600 text-xl">Smartphone</li>
                <li className="mb-3 text-gray-600 text-xl">Smartphone</li>
                <li className="mb-3 text-gray-600 text-xl">Smartphone</li>
                <li className="mb-3 text-gray-600 text-xl">Smartphone</li>
                <li className="mb-3 text-gray-600 text-xl">Smartphone</li>
              </ul>
            </div>
          </aside>
          <div className="bg-white p-5">
            <h2 className="p-3 font-bold text-3xl">Our Product</h2>
            <div className="mt-6 gap-5 grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
               <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard() {
  return (
    <div className="bg-white shadow-lg ">
      <figure className="overflow-hidden">
          <img
          className="duration-300 hover:scale-120"
           src="https://uptownskylla.in/wp-content/uploads/2022/09/01-1-2048x1497.jpg"
         alt=""
        />
      </figure>
      
      <h3 className="p-3">Iphone</h3>
    </div>
  );
}
