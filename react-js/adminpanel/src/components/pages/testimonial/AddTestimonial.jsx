import React, { useState } from "react";
import { defImage } from "../../../config/staticData";

export default function AddTestimonial() {
  let [preview,setPreview]=useState(defImage)


  let saveData=(e)=>{
    let name=e.target.name.value
    console.log(name);
    
    e.preventDefault()
  }
  return (
    <div>
      <div className="basis-[100%] h-[100vh] relative overflow-y-scroll ">
        <section className="w-full">
          <nav className="flex border-b bg-white px-6 py-3 shadow-sm">
            <ol className="inline-flex items-center space-x-2 text-gray-600">
              <li>
                <a className="text-md font-medium hover:text-indigo-600">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a className="text-md font-medium hover:text-indigo-600">
                  Testimonial
                </a>
              </li>
              <li>/</li>
              <li className="font-semibold text-gray-900">Add Testimonial</li>
            </ol>
          </nav>
          <div className="w-full min-h-[680px] px-4 bg-slate-50 py-10">
            <div className="mx-auto">
              <h3
                className="text-[24px] font-semibold 
      bg-gradient-to-r from-indigo-600 to-indigo-500
      py-3 px-5 rounded-t-lg text-white border border-indigo-500"
              >
                Add New Testimonial
              </h3>
              <form onSubmit={saveData} className="border border-slate-200 border-t-0 gap-6 flex bg-white p-6 rounded-b-lg shadow-sm">
                <div className="flex flex-col">
                  <label className="block mb-2 text-md font-medium text-gray-700">
                    Image
                  </label>
                  <div className="relative w-60 h-60 border border-slate-200 rounded-lg overflow-hidden shadow bg-slate-100">
                     <span onClick={()=>{
                    setPreview(defImage)
                     }} className="absolute right-2 cursor-pointer z-50"> &times; </span>
                    <div> 
                      <img src={preview} className="h-[200px] object-fit-cover" alt="" />
                     
                    </div>
                    <input
                      accept="image/*"
                      onChange={(e)=>{
                      setPreview( URL.createObjectURL(e.target.files[0]))
                       
                           
                      }}
                      className="absolute z-10 inset-0 opacity-0 cursor-pointer"
                      type="file"
                    />
                  </div>
                </div>
                <div className="basis-full">
                  <div className="mb-6">
                    <label className="block mb-2 text-md font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      autoComplete="off"
                      className="text-[17px] border border-slate-300 text-gray-900 rounded-lg 
          focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 
          block w-full py-2.5 px-3"
                      placeholder="Enter name"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-md font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      autoComplete="off"
                      className="text-[17px] border border-slate-300 text-gray-900 rounded-lg 
          focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 
          block w-full py-2.5 px-3"
                      placeholder="Enter Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="mb-6 basis-[50%]">
                      <label className="block mb-2 text-md font-medium text-gray-700">
                        Rating
                      </label>
                      <input
                        min={1}
                        max={5}
                        autoComplete="off"
                        className="text-[17px] border border-slate-300 text-gray-900 rounded-lg 
            focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 
            block w-full py-2.5 px-3"
                        placeholder="Enter rating number"
                        type="number"
                        name="rating"
                      />
                    </div>
                    <div className="basis-[50%] mb-6">
                      <label className="block mb-2 text-md font-medium text-gray-700">
                        Order
                      </label>
                      <input
                        min={1}
                        autoComplete="off"
                        className="text-[17px] border border-slate-300 text-gray-900 rounded-lg 
            focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 
            block w-full py-2.5 px-3"
                        placeholder="Enter order number"
                        type="number"
                        name="order"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="mt-3 cursor-pointer text-white 
          bg-indigo-600 hover:bg-indigo-700
          focus:ring-4 focus:ring-indigo-300
          font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
