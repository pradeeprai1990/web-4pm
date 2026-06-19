import React from "react";

export default function ViewTestimonial() {
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
              <li className="text-md font-medium text-gray-900">
                View Testimonials
              </li>
            </ol>
          </nav>
          <div
            className="p-4 overflow-hidden transition-all duration-300 ease-out 
max-h-0 opacity-0"
          >
            <form className="py-4 relative px-6 my-3 rounded-lg border border-slate-200 w-full bg-white shadow-sm">
              <button
                type="button"
                className="absolute right-4 top-4 text-[28px] text-gray-600 hover:text-black cursor-pointer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
              </button>
              <p className="font-semibold py-2 text-[20px]">Filter</p>
              <div className="flex items-center gap-6">
                <div className="mb-5">
                  <label className="block mb-2 font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    autoComplete="off"
                    placeholder="Enter name"
                    className="text-[17px] border border-slate-300 rounded-lg 
        focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 
        block w-full py-2.5 px-3"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 font-medium text-gray-700">
                    Rating
                  </label>
                  <input
                    min={1}
                    max={5}
                    autoComplete="off"
                    placeholder="Enter rating"
                    className="text-[17px] border border-slate-300 rounded-lg 
        focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 
        block w-full py-2.5 px-3"
                    type="number"
                    name="rating"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  className="text-white bg-slate-500 hover:bg-slate-600 px-6 py-2.5 rounded-lg transition-all"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-lg 
      shadow-sm transition-all focus:ring-4 focus:ring-indigo-300"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
          <div className="p-4">
            <div className="bg-slate-100 flex justify-between items-center py-3 px-4 rounded-t-md border border-slate-300">
              <div className="text-[26px] font-semibold">View Testimonials</div>
              <div className="flex gap-3 items-center">
                <button
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 
      text-slate-700 px-4 py-2 rounded-lg text-sm border border-slate-300 transition-all"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" />
                  </svg>{" "}
                  Filter
                </button>
                <button
                  disabled=""
                  className="text-white disabled:bg-slate-400 disabled:cursor-not-allowed 
      bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  Delete All
                </button>
                <button
                  disabled=""
                  className="text-white disabled:bg-slate-400 disabled:cursor-not-allowed 
      bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  Change Status
                </button>
              </div>
            </div>
            <div className="border border-t-0 rounded-b-md border-slate-300">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-700">
                  <thead className="text-sm uppercase bg-gray-50 border-b">
                    <tr>
                      <th className="px-2 w-[100px] py-3">
                        <input
                          className="mr-2 w-4 h-4 cursor-pointer text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
                          type="checkbox"
                        />
                        Select
                      </th>
                      <th className="px-2 w-[60px] py-3">S. No.</th>
                      <th className="px-2 py-3">Name</th>
                      <th className="px-2 py-3">Message</th>
                      <th className="px-2 w-[50px] py-3">Rating</th>
                      <th className="px-2 w-[100px] py-3">Image</th>
                      <th className="px-2 w-[50px] py-3">Order</th>
                      <th className="px-2 w-[100px] py-3">Status</th>
                      <th className="px-2 w-[100px] py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-2 py-4">
                        <input
                          className="w-4 h-4 text-indigo-600 cursor-pointer"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-2 py-4">1</td>
                      <td className="px-2 py-4">Red</td>
                      <td className="px-2 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </td>
                      <td className="px-2 py-4">5</td>
                      <td className="px-2 py-4">
                        <img
                          className="w-[50px] rounded"
                          alt=""
                          src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fimages%2Fhome-images%2Fjaipur-center.png&w=256&q=75"
                        />
                      </td>
                      <td className="px-2 py-4">1</td>
                      <td className="px-2 py-4 text-green-600 font-semibold">
                        Active
                      </td>
                      <td className="px-2 py-4">
                        <a href="/testimonial/view" data-discover="true">
                          <svg
                            fill="gold"
                            className="w-5 h-5"
                            viewBox="0 0 512 512"
                          >
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-2 py-4">
                        <input
                          className="w-4 h-4 text-indigo-600 cursor-pointer"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-2 py-4">1</td>
                      <td className="px-2 py-4">Red</td>
                      <td className="px-2 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </td>
                      <td className="px-2 py-4">5</td>
                      <td className="px-2 py-4">
                        <img
                          className="w-[50px] rounded"
                          alt=""
                          src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fimages%2Fhome-images%2Fjaipur-center.png&w=256&q=75"
                        />
                      </td>
                      <td className="px-2 py-4">1</td>
                      <td className="px-2 py-4 text-red-600 font-bold">
                        Inactive
                      </td>
                      <td className="px-2 py-4">
                        <a href="/testimonial/view" data-discover="true">
                          <svg
                            fill="gold"
                            className="w-5 h-5"
                            viewBox="0 0 512 512"
                          >
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
