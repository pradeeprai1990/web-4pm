import React, { useContext } from "react";
import { Link } from "react-router";
import { cartContext } from "../../context/MainContext";

export default function Cart() {
  let { cart, setCart } = useContext(cartContext);

  
  if (!cart.length) {
    return (
      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
          <span className="mb-4 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Your cart is empty
          </span>
          <h1 className="text-3xl font-bold text-slate-900">
            Add something you&apos;ll love
          </h1>
          <p className="mt-3 max-w-lg text-slate-600">
            Browse our latest collection and start building your order with a
            few hand-picked favorites.
          </p>
          <Link
            to="/product"
            className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Shopping Cart
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Review your order
            </h1>
          </div>
          <Link
            to="/product"
            className="w-fit rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-orange-400 hover:text-orange-500"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.7fr_0.9fr]">
          <div className="space-y-4">
            {cart.map((item,index) => (
              <ProductCart key={index} item={item}/>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}


function ProductCart({item}){
  return(
     <div
              
                className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="overflow-hidden rounded-2xl bg-slate-100 sm:w-36">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 w-full object-cover sm:h-full"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">
                          {item.name}
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                          Product ID: #{item.id}
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-slate-900">
                        ${item.price}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                        <button
                        
                          className="h-10 w-10 rounded-full text-lg font-semibold text-slate-700 transition hover:bg-white"
                        >
                          -
                        </button>
                        <span className="min-w-12 text-center text-sm font-semibold text-slate-900">
                          {item.qty}
                        </span>
                        <button
                          
                          className="h-10 w-10 rounded-full text-lg font-semibold text-slate-700 transition hover:bg-white"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <p className="text-lg font-semibold text-orange-500">
                          ${item.price * item.qty}
                        </p>
                        <button
                         
                          className="text-sm font-semibold text-slate-500 transition hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}