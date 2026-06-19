import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Form({ getEnquiry, singleData,setsingeData }) {
  const apiUrl = import.meta.env.VITE_APIBASEURL;

  // console.log(singleData);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [message, setMessage] = useState("");

  let saveEnquiry = (e) => {
    e.preventDefault();

    let obj = {
      name,
      email,
      phone,
      message,
    };

    if (singleData) {
      //Update
      let id=singleData._id

      axios
        .put(`${apiUrl}enquiry/update/${id}`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            // alert(finalRes.message);
            getEnquiry();
            setsingeData(null)
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            // e.target.reset()
          } else {
            alert(finalRes.message);
          }
        });

    } else {
      axios
        .post(`${apiUrl}enquiry/create`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            alert(finalRes.message);
            getEnquiry();
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            // e.target.reset()
          } else {
            alert(finalRes.message);
          }
        });
    }

    // let name=e.target.name.value
  };

  useEffect(() => {
    if (singleData) {
      setName(singleData.name);
      setEmail(singleData.email);
      setPhone(singleData.phone);
      setMessage(singleData.message);
    }
  }, [singleData]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Enquiry Form
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Please fill out the form below
        </p>

        <form onSubmit={saveEnquiry} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
          >
            {singleData ? "Update " : "Submit "}
            Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
