import axios from "axios";

let getProduts = async () => {
  let res = await axios.get("https://dummyjson.com/products");
  let finalRes = await res.data;
  let { products } = finalRes;
  return products;
  //    return axios.get(`https://dummyjson.com/products`)
  //     .then((res)=>res.data)
  //     .then((finalRes)=>finalRes.products)
};

let getProductDetails = async (pid) => {
  //Api Url last Id Connect Details
  try {
    let res = await axios.get(`https://dummyjson.com/products/${pid}`);
    let finalRes = await res.data;
    return finalRes;
  } catch (err) {
    return null;
  }
};
export { getProduts, getProductDetails };
