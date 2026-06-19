// "use client"

import { getProductDetails } from '@/app/api-services/product-api'
import MainHeading from '@/app/components/common/MainHeading';
import SingleDetails from '@/app/components/product-components/SingleDetails';
import React from 'react'
export const metadata = {
 
};
export default async function ProductDetails(req) {

    let {pid}=await req.params

    let data= await getProductDetails(pid)
    metadata.title=`${data.title} - E-commerce App`
    metadata.description=`Discover the details of ${data.title} at our E-commerce App. Explore its features, specifications, and customer reviews to make an informed purchase decision. Enjoy a seamless shopping experience with secure payments and fast delivery. Find out more about this product today!`

    
//    let {pid}=useParams()
//    console.log(pid);
   

  return (
    <div>
        {
            data ?  
            <>
                <MainHeading title={data.title}/>
                 <SingleDetails data={data}/>
            </>
            :
            <div>No Product Found</div>
        }
        
    </div>
  )
}
