import React from 'react'
import { Heart, ShoppingCart, Star } from 'lucide-react'

export default function SingleDetails({ data }) {


  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = data

  const discountedPrice = Math.round(price - (price * discountPercentage) / 100)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-[420px] object-cover sm:h-[520px]"
            />
          </div>

          {images?.length > 0 ? (
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {images.slice(0, 4).map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200"
                >
                  <img
                    src={src}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-28 object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1">{category}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">{brand}</span>
              </div>

              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h1>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                  <Star className="h-4 w-4" />
                  {rating.toFixed(1)} / 5
                </div>
                <div className={`rounded-full px-3 py-1 text-sm font-medium ${stock > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                  {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-slate-500">Price</p>
                  <div className="mt-1 flex items-baseline gap-3">
                    <span className="text-3xl font-semibold text-slate-950">Rs. {discountedPrice}</span>
                    <span className="text-sm text-slate-400 line-through">Rs. {price}</span>
                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      -{discountPercentage}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">Product Details</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Category</p>
                  <p className="mt-2 font-medium text-slate-900">{category}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Brand</p>
                  <p className="mt-2 font-medium text-slate-900">{brand}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:w-auto">
                  <Heart className="h-5 w-5 text-rose-500" />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
