import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaPenToSquare,
  FaTrash,
  FaRotateRight,
  FaArrowRotateLeft,
} from "react-icons/fa6";
import { Link } from "react-router";

export default function ViewColors() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
    const [ids, setIds] = useState([]);
  const apiBaseUrl = import.meta.env.VITE_APIBASEPATH;

  const getColors = () => {
    axios
      .get(`${apiBaseUrl}color/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setData(finalRes.data);
        }
      });
  };

  useEffect(() => {
    getColors();
  }, []);

  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );



  let getCheckValue=(e)=>{

    let checkBoxValue=e.target.value
    if(e.target.checked){
      setIds([...ids,checkBoxValue])
    }

    else{
       setIds(ids.filter((id)=>id!=checkBoxValue)) //Array
    }
    
  }

 


  let multiDelete=()=>{
    if(ids.length>=1){
      let obj={
        ids
      }
      axios.post(`${apiBaseUrl}color/multidelete`,obj)
      .then((res)=>res.data)
      .then((finalRes)=>{
          if(finalRes.status){ //1
              getColors()
          }
      })
    }
    else{
      alert("Please select one checkBox")
    }
  }
  

  let changeStatus=()=>{
      if(ids.length>=1){
      let obj={
        ids
      }
      axios.post(`${apiBaseUrl}color/changestatus`,obj)
      .then((res)=>res.data)
      .then((finalRes)=>{
          if(finalRes.status){ //1
              getColors()
              setIds([])
             
          }
      })
    }
    else{
      alert("Please select one checkBox")
    }
  }


  let allCheck=(e)=>{
      if(e.target.checked){
           let getIds= data.map((obj)=>obj._id)
          setIds(getIds)
           
      }
      else{

      }
  }
  return (
    <div className="rounded-lg border border-slate-300 bg-white p-5 shadow-sm">
      {/* Heading */}
      <div className="mb-5 flex flex-wrap items-center justify-between rounded-lg border bg-slate-100 px-6 py-4">
        <h2 className="text-2xl font-semibold text-slate-800">
          View Colors
        </h2>

        <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
          Total : {data.length}  { ids.length }
        </span>
      </div>

      {/* Search + Buttons */}
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
       

        <div className="flex flex-wrap gap-3">
          <button onClick={multiDelete} className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-white hover:bg-red-700">
            <FaTrash />
            Delete Selected
          </button>

          <button onClick={changeStatus} className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-white hover:bg-green-700">
            <FaArrowRotateLeft />
            Change Status
          </button>

          <button
            onClick={getColors}
            className="flex items-center gap-2 rounded-lg bg-slate-600 px-5 py-2.5 text-white hover:bg-slate-700"
          >
            <FaRotateRight />
            Refresh
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-slate-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" checked={data.length==ids.length} onChange={allCheck} className="mr-2" />
                Select
              </th>
              <th className="px-4 py-3 text-left">S.No.</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Color Code</th>
              <th className="px-4 py-3 text-left">Order</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
        

            {data.length > 0 ? (
              data.map((obj, index) => (
                <tr
                  key={obj._id}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="px-4 py-3">
                    <input type="checkbox" onChange={getCheckValue} value={obj._id} checked={ ids.includes(obj._id)  }  />
                  </td>

                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3 font-medium">{obj.name}</td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-5 w-5 rounded border"
                        style={{ backgroundColor: obj.code }}
                      ></span>

                      {obj.code}
                    </div>
                  </td>

                  <td className="px-4 py-3">{obj.order}</td>

                  <td className="px-4 py-3">
                    {obj.status ? (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        Active
                      </span>
                    ) : (
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                        Inactive
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <Link to={`/color/edit/${obj._id}`}>
                      <button>
                        <FaPenToSquare className="mx-auto cursor-pointer text-xl text-yellow-500 hover:text-yellow-600" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="py-8 text-center text-lg text-gray-500"
                >
                  No Color Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}