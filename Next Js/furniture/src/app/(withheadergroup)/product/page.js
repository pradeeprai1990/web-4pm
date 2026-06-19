import { getProduts } from '@/app/api-services/product-api';
import MainHeading from '@/app/components/common/MainHeading';
import ProductList from '@/app/components/product-components/ProductList';
import React from 'react'

export const metadata = {
 
};
export default async  function Product() { //Api Calling

  let data=  await getProduts() //Array Server Side [30 Object]
  metadata.title="Products - E-commerce App"
  metadata.description="Explore our extensive collection of products at our E-commerce App. From the latest electronics to trendy fashion, we have something for everyone. Enjoy a seamless shopping experience with secure payments and fast delivery. Start browsing our products today and find exactly what you need!"
  


  return (
    <div>
        <MainHeading title="Products"/>
        <ProductList data={data}/>
    </div>
  )
}
