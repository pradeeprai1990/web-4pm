import React, { useState } from "react";
import { faqArray } from "../../Data/Data";

export default function Faq() {

 let [openAns,setOpenAns]=useState(0)   
  return (
    <div className="max-w-[1000px] mx-auto my-5">
      <h2 className="text-center text-4xl font-bold uppercase">Faq</h2>
        {/* {openAns} */}
      {
        faqArray.map((obj, index) => {
            return (
            <div key={index} className="border-1 mt-4">

                {/* {obj.id} {openAns} */}

                <h3 onClick={()=>setOpenAns(obj.id)} className="bg-yellow-800 text-white p-2 text-left font-bold cursor-pointer">
                {obj.question}
                </h3>
                <p className={`text-left p-2 ${obj.id==openAns ? "block" : "hidden" } `}>
                {obj.answer}
                </p>
            </div>
            );
        })
      }
    </div>
  );
}
