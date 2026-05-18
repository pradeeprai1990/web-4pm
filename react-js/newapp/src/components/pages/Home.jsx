import React, { use } from "react";

import brandImg from "../../assets/images/11.jpg";
import map from "../../assets/images/location-map.jpg";
import { product } from "../../Data/ProductList";
import { blog } from "../../Data/blogData";

export default function Home() {
  let n = 10;
  let m = 20;

  let name = "Ws";

  let status = false;

  let flag = false;

  let m1 = 10;

  let colorStatus = true;

  let user = [
    "ravi",
    "kumar",
    "sai",
    "ravi",
    "kumar",
    "sai",
    "ravi",
    "kumar",
    "sai",
  ];

  let alluser = user.map((v, i) => (
    <h3>
      {i + 1}
      {v}
    </h3>
  ));

  return (
    <div className="m-10">
      <section className="py-10">
        <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-5">
          {blog.map((obj, index) => {
            return (
              <div className="shadow-lg p-4">
                <h3 className="font-bold p-3 uppercase"> {obj.title} </h3>
                <p>{obj.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-5">
          {product.length >= 1 ? (
            product.map((obj, index) => {
              let { title, thumbnail, price } = obj;
              return (
                <div className="shadow-lg">
                  <img src={thumbnail} alt="" />
                  <h2>{title}</h2>
                  <h3>Rs {price}</h3>
                </div>
              );
            })
          ) : (
            <div>No Product Found</div>
          )}
        </div>
      </section>

      {alluser}
      <ul>
        {user.map((v, i) => {
          return (
            <li>
              {" "}
              {i + 1} {v}{" "}
            </li>
          );
        })}
      </ul>
      <ul>
        {user.map((v, i) => (
          <li>
            {i + 1}
            {v}
          </li>
        ))}
      </ul>

      {flag && <p className="text-center">Hello</p>}

      {m1 && <button>Save</button>}
      {"hello" && <p>hello</p>}

      <img src={map} alt="" />

      <img src={brandImg} alt="" />

      <h1 style={{ color: colorStatus ? "red" : "blue" }}>Welcome</h1>

      <img src="/images/1.jpeg" alt="" />
      <h1 className="text-center py-10">
        {n + m}
        {"hello"}
        {name}
      </h1>
    </div>
  );
}
