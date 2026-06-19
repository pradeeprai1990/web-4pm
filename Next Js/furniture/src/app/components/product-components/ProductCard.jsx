import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function ProductCard({pdata}) {
    let {title,category,price,thumbnail,id}=pdata
  return (

      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition duration-300">
        
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <Link href={`/product/${id}`}>
            <img
              src={thumbnail}
              alt="Hrithvik Stool"
              width={500}
              height={500}
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Product Content */}
        <div className="p-4">
          
          {/* Category */}
          <span className="inline-block text-sm text-gray-500 mb-2">
            {category}
          </span>

          {/* Product Name */}
          <h3 className="text-lg font-semibold mb-2">
            <a
              href="/product-details/hrithvik-stool"
              className="hover:text-blue-600 transition"
            >
               {title}
            </a>
          </h3>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gray-400 line-through">
              Rs. {price}
            </span>
            <span className="text-xl font-bold text-green-600">
              Rs. {price}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            
            {/* Wishlist */}
            <button
              className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-red-50 hover:text-red-500 transition"
              title="Add to Wishlist"
            >
              <Heart size={18} />
            </button>

            {/* Add To Cart */}
            <button
             
              className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
   
  );
}
