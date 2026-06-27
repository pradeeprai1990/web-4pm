import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddColor() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH;
  let [error,setError]=useState(null)
  console.log(apiBaseUrl);
  let navigate=useNavigate()

  let saveData = (e) => {
    e.preventDefault();
    let obj = {
      name: e.target.name.value,
      code: e.target.code.value,
      order: e.target.order.value,
    };
    axios.post(`${apiBaseUrl}color/create`,obj)
    .then((res)=>res.data)
    .then((finalRes)=>{
      if(finalRes.status){
        setError(null)
        alert(finalRes.message)
        e.target.reset()
        navigate('/color/view')
          //Success
      }
      else{
         //Error
         setError(finalRes.error)
      }
      
    })
    
  };

  return (
    <div className="w-full min-h-[680px] px-4 bg-slate-50 py-10">
      <div className="mx-auto">
        <h3 className="text-[24px] font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 py-3 px-5 rounded-t-lg text-white border border-indigo-500">
          Add New Color
        </h3>
        <form
          onSubmit={saveData}
          className="border border-slate-200 border-t-0 bg-white p-6 rounded-b-lg shadow-sm"
        >
          <div className="mb-6">

           

            <label className="block mb-2 text-md font-medium text-gray-700">
              Color Name
            </label>
             { error?.name && <span className="text-red-500"> {error.name} </span> }
            <input
              type="text"
              name="name"
              autoComplete="off"
              className="text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3"
              placeholder="Enter color name (e.g., Red)"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-700">
              Color Code
            </label>
              { error?.code && <span className="text-red-500"> {error.code} </span> }
            <input
              type="text"
              name="code"
              autoComplete="off"
              className="text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3"
              placeholder="Hex code (e.g., #FF5733)"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-700">
              Order
            </label>
            <input
              type="number"
              name="order"
              min="1"
              autoComplete="off"
              className="text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3"
              placeholder="Enter order number"
            />
          </div>
          <button
            type="submit"
            className="mt-3 cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
