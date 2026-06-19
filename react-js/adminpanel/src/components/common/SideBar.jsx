import React, { useState } from "react";
import { Link } from "react-router";
import { AiOutlineDashboard } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";

export default function SideBar() {
  let [menu, setMenu] = useState(0);

  return (
    <div className="bg-slate-900  h-screen">
      <h2 className="text-2xl p-3 font-bold text-white tracking-wide mb-6 border-b border-slate-700 pb-3">
        Admin Panel
      </h2>

      <li>
        <Link to={"/dashboard"}>
          <button className="flex w-full items-center gap-3 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition ">
            <AiOutlineDashboard />
            <span className="font-medium"> Dashboard</span>
          </button>
        </Link>
      </li>
      
      <li className="p-2">
        <button onClick={()=>setMenu( menu==1 ? 0 : 1   )} className="flex w-full items-center gap-3 p-2 rounded-lg  text-white transition ">
          <GoCodeReview />
          <span className="font-medium"> Testimonial</span>   
        </button>
        {menu == 1 && (
          <ul>
            <li>
              {" "}
              <Link
                class="block px-3 py-2 rounded-md text-white hover:bg-slate-800"
                to={'/testimonial/add'}
                data-discover="true"
              >
                Add Testimonial
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                class="block px-3  text-white  py-2 rounded-md hover:bg-slate-800"
                 to={'/testimonial/view'}
                data-discover="true"
              >
                View Testimonial
              </Link>{" "}
            </li>
          </ul>
        )}
      </li>

      <li className="p-2">
        <button onClick={()=>setMenu( menu==2 ? 0 : 2   )} className="flex w-full items-center gap-3 p-2 rounded-lg  text-white transition ">
          <GoCodeReview />
          <span className="font-medium"> Why Choose</span>
        </button>
        {menu == 2 && (
          <ul>
            <li>
              {" "}
              <Link
                class="block px-3 py-2 rounded-md text-white hover:bg-slate-800"
               
                data-discover="true"
              >
                Add Why Choose
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                class="block px-3  text-white  py-2 rounded-md hover:bg-slate-800"
               
                data-discover="true"
              >
                View Why Choose
              </Link>{" "}
            </li>
          </ul>
        )}
      </li>
    </div>
  );
}
