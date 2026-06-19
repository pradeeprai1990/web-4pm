import axios from "axios";
import React from "react";

export default function Table({ enquiries, deleteEnquiry,editData }) {
  const apiUrl = import.meta.env.VITE_APIBASEURL;

//   let deleteData = (delid) => {
//     if (confirm("Are you sure want delete?")) {
//       axios
//         .delete(`${apiUrl}enquiry/delete/${delid}`)
//         .then((res) => res.data)
//         .then((finalRes) => {
//              getEnquiry()
//             alert(finalRes.message);

//         });
//     }
//   };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Enquiries</h1>
        <p className="text-gray-600 mb-8">List of all customer enquiries</p>

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Sr No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Message
                  </th>
                  <button>Action</button>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {enquiries.map((enquiry, index) => (
                  <tr
                    key={enquiry.id}
                    className={`border-b border-gray-200 hover:bg-blue-50 transition duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                      {enquiry.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <a
                        href={`mailto:${enquiry.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {enquiry.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <a
                        href={`tel:${enquiry.phone}`}
                        className="text-blue-600 hover:underline"
                      >
                        {enquiry.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">
                      {enquiry.message}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">
                      <button onClick={() => deleteEnquiry(enquiry._id)}>
                        Delete
                      </button>
                      |

                       <button onClick={() => editData(enquiry._id)} className="p-2 bg-red-300" >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Total Enquiries:{" "}
              <span className="font-semibold text-gray-800">
                {enquiries.length}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
