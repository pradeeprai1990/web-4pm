import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loading from "../common/Loading";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { cartContext } from "../../context/MainContext";

import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


export default function Product() {
  let [categoryData, setCategoryData] = useState([]);
  let [brandData, setbrandData] = useState([]);
  let [productData, setProductData] = useState([]);

  //Fiter State- >

  let [sorting, setSorting] = useState(null);
  let [categoryFilter, setCategoryFilter] = useState([]);
  let [brandFilter, setBrandFilter] = useState([]);
  let [rating, setRating] = useState(null);
  let [priceFilter, setPriceFilter] = useState([null, null]);
  let [currentPage,setCurrentpage]=useState(1)
    let [totalPage,setTotalPage]=useState(0) //14


  let [loading, setLoading] = useState(false);

  let getCategory = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/categories.php`,
    );

    let apiData = apiRes.data; //Api Data Return { status:,message:'',data:'' }

    let { data } = apiData;

    setCategoryData(data); // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

    // console.log(data);
  };

  let getBrands = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/brands.php`,
    );
    let apiData = apiRes.data;
    let { data } = apiData;
    setbrandData(data);
  };

  let getProducts = async () => {
    setLoading(true);

    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/products.php`,
      {
        params: {
          sorting: sorting,
          categories: categoryFilter.toString(),
          brands: brandFilter.toString(),
          rating,
          price_from: priceFilter[0],
          price_to: priceFilter[1],
          limit:12,
          page:currentPage
        },
      },
    );
    let apiData = await apiRes.data;

    
    let { data,total_pages } = apiData;

    setTotalPage(total_pages)



    setProductData(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getCategory();
    getBrands();
  }, []);

  // let color=["red","green"]

  // let colorString=color.join("-")
  //   let colorString1=color.toString()  //
  // console.log(colorString); //red-green
  // console.log(colorString1); //red,green

  let getCategoryCheckdata = (event) => {
    let checkBoxValue = event.target.value;

    if (event.target.checked) {
      setCategoryFilter([...categoryFilter, checkBoxValue]);
    } else {
      //categoryFilter  ['beauty', 'furniture', 'home-decoration']
      //checkBoxValue = beauty

      let finalCategoryFilter = categoryFilter.filter(
        (v) => v != checkBoxValue,
      );

      setCategoryFilter(finalCategoryFilter);
    }
  };

  let getBrandCheckdata = (event) => {
    let checkBoxValue = event.target.value;

    if (event.target.checked) {
      setBrandFilter([...brandFilter, checkBoxValue]);
    } else {
      //categoryFilter  ['beauty', 'furniture', 'home-decoration']
      //checkBoxValue = beauty

      let finalBrandFilter = brandFilter.filter((v) => v != checkBoxValue);

      setBrandFilter(finalBrandFilter);
    }
  };

  useEffect(() => {
    getProducts();
  }, [currentPage,  sorting, categoryFilter, brandFilter, rating,priceFilter]);
  return (
    <section className="grid gap-5 grid-cols-[20%_auto] my-10">
      <aside className="border-1 border-[#ccc] p-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold ">Filter</h3>
          <button className="bg-yellow-500 p-2 text-[12px]">Clear All</button>
        </div>

        <div className="border-1 border-[#ccc] p-3 mt-4 h-[200px] overflow-y-scroll">
          <h3 className="font-bold">Category</h3>
          <ul>
            {categoryData.map((obj, index) => {
              return (
                <li>
                  <input
                    type="checkbox"
                    onChange={getCategoryCheckdata}
                    value={obj.slug}
                  />{" "}
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-1 border-[#ccc] p-3 mt-4 h-[200px] overflow-y-scroll">
          <h3 className="font-bold">Brand</h3>
          <ul>
            {brandData.map((obj, index) => {
              return (
                <li>
                  <input
                    type="checkbox"
                    onChange={getBrandCheckdata}
                    value={obj.slug}
                  />
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-1 border-[#ccc] p-3">
          <h2 className="mb-3 text-lg font-semibold uppercase text-gray-800">
            Price
          </h2>

          <ul className="space-y-2">
            <li>
              <label className="flex cursor-pointer items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="money"
                  onChange={()=>setPriceFilter([10,250])}
                  className="h-4 w-4 accent-green-600"
                />
                <span>Rs. 10 to Rs. 250</span>
              </label>
            </li>

            <li>
              <label className="flex cursor-pointer items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="money"
                    onChange={()=>setPriceFilter([250,500])}
                  className="h-4 w-4 accent-green-600"
                />
                <span>Rs. 250 to Rs. 500</span>
              </label>
            </li>

            <li>
              <label className="flex cursor-pointer items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="money"
                     onChange={()=>setPriceFilter([500,1000])}
                  className="h-4 w-4 accent-green-600"
                />
                <span>Rs. 500 to Rs. 1000</span>
              </label>
            </li>

            <li>
              <label className="flex cursor-pointer items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="money"
                    onChange={()=>setPriceFilter([1000,500000])}
                  className="h-4 w-4 accent-green-600"
                />
                <span>Rs. 1000 to Above</span>
              </label>
            </li>
          </ul>
        </div>

        <div className=" border-1 border-[#ccc] p-3">
          <h2 className="mb-3 text-lg font-semibold text-gray-800">Rating</h2>

          <ul className="space-y-2">
            <li className="cursor-pointer">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => setRating(4)}
                  className="h-4 w-4 accent-yellow-500"
                />
                <span>4★ &amp; above</span>
              </label>
            </li>

            <li className="cursor-pointer">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => setRating(3)}
                  className="h-4 w-4 accent-yellow-500"
                />
                <span>3★ &amp; above</span>
              </label>
            </li>

            <li className="cursor-pointer">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => setRating(2)}
                  className="h-4 w-4 accent-yellow-500"
                />
                <span>2★ &amp; above</span>
              </label>
            </li>

            <li className="cursor-pointer">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => setRating(1)}
                  className="h-4 w-4 accent-yellow-500"
                />
                <span>1★ &amp; above</span>
              </label>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-3 border-1 border-[#ccc]">
        <div className="flex justify-end">
          {sorting}
          <select
            onChange={(e) => setSorting(e.target.value)}
            name=""
            className="border-1 border-[#ccc] p-2"
            id=""
          >
            <option value="">Sort by : Recommended</option>
            <option value="1">Name : A to Z</option>
            <option value="2">Name : Z to A</option>
            <option value="3">Price : Low to High</option>
            <option value="4">Price : High to Low</option>
          </select>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-4 gap-5 sm:grid-cols-2 grid-cols-1">
            {productData.map((obj, index) => {
              return (
                //  <ProductCard description={obj.description} productName={obj.name} imgSrc={obj.image} />
                <ProductCard data={obj} />
              );
            })}
          </div>
        )}

        <div>
          <ResponsivePagination
      current={currentPage}
      total={totalPage}
      onPageChange={setCurrentpage}
    />
        </div>
      </div>



    </section>
  );
}

function ProductCard({ data }) {
  let { cart, setCart } = useContext(cartContext);
  let { name, description, image, price, rating, id } = data;

  let isInCart = cart.some((obj) => obj.id == id);

  let addtoCart = () => {
  
      let cartObj = {
        name,
        id,
        price,
        image,
        qty: 1,
      };

      setCart([...cart, cartObj]);
 

    Swal.fire({
      title: "Added To Cart",
      text: "Your product has been added to cart",
      icon: "success",
    });
  };




  return (
    <div className="border p-3">
      {id}
      <img src={image} alt="" />
      <p>Rating {rating}</p>

      {isInCart ? (
        <button  className="p-2 bg-red-600 my-2">
          Remove Cart
        </button>
      ) : (
        <button onClick={addtoCart} className="p-2 bg-yellow-600 my-2">
          Add To Cart
        </button>
      )}
      
      <h3 className="py-2">
        {" "}
        $ {price} {name}
      </h3>

      <p>{description}</p>
    </div>
  );
}
