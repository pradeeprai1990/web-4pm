import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        {/* Illustration Section */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48">
            {/* 404 SVG Illustration */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-amber-600"
              fill="none"
              stroke="currentColor"
            >
              {/* Large 404 Text */}
              <text
                x="100"
                y="100"
                textAnchor="middle"
                fontSize="80"
                fontWeight="bold"
                fill="currentColor"
                opacity="0.1"
              >
                404
              </text>

              {/* Furniture Icon - Chair */}
              <g transform="translate(100, 80)">
                {/* Chair back */}
                <rect x="-20" y="-15" width="40" height="25" rx="2" strokeWidth="2" />
                {/* Chair seat */}
                <rect x="-22" y="10" width="44" height="4" rx="1" strokeWidth="2" />
                {/* Chair legs */}
                <line x1="-18" y1="14" x2="-15" y2="25" strokeWidth="2" />
                <line x1="18" y1="14" x2="15" y2="25" strokeWidth="2" />
              </g>

              {/* Search indicator */}
              <circle cx="160" cy="40" r="12" strokeWidth="2" />
              <line x1="170" y1="50" x2="180" y2="60" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center mb-8">
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Oops! The page you're looking for seems to have disappeared like our out-of-stock furniture pieces.
          </p>
          <p className="text-sm text-gray-500">
            The link you followed might be broken or the page may have been removed.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="w-full sm:w-auto px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Back to Home
            </button>
          </Link>
          <Link href="/about-us">
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Browse Catalog
            </button>
          </Link>
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-6">
            Need help? Here are some helpful links:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/">
              <a className="text-center py-3 px-4 bg-white rounded-lg hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium transition-colors duration-200 hover:text-amber-600 cursor-pointer block">
                Home
              </a>
            </Link>
            <Link href="/about-us">
              <a className="text-center py-3 px-4 bg-white rounded-lg hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium transition-colors duration-200 hover:text-amber-600 cursor-pointer block">
                About Us
              </a>
            </Link>
            <a href="#" className="text-center py-3 px-4 bg-white rounded-lg hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium transition-colors duration-200 hover:text-amber-600">
              Contact Us
            </a>
            <a href="#" className="text-center py-3 px-4 bg-white rounded-lg hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium transition-colors duration-200 hover:text-amber-600">
              FAQs
            </a>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Error Code: 404 | Page Not Found</p>
        </div>
      </div>
    </div>
  )
}
