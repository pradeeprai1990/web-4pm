// components/Footer.jsx

"use client"
import Link from "next/link";


export default function Footer() {
  const topProducts = [
    {
      id: 1,
      name: "Louise Cabinet",
      category: "Cabinets and Sideboard",
      oldPrice: "Rs. 28,000",
      newPrice: "Rs. 23,000",
      image:
        "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg",
    },
    {
      id: 2,
      name: "Caroline Study Tables",
      category: "Nest Of Tables",
      oldPrice: "Rs. 3,000",
      newPrice: "Rs. 2,500",
      image:
        "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg",
    },
  ];

  return (
    <footer className="bg-[#111] text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800">
          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <p>
                Address: Claritas est etiam processus dynamicus
              </p>

              <p>
                Phone:
                <a
                  href="tel:98745612330"
                  className="hover:text-white ml-1"
                >
                  98745612330
                </a>
              </p>

              <p>Email: furniture@gmail.com</p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                 
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
               
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                
                </a>

                <a
                  href="https://telegram.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                 
                </a>
              </div>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Information
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/frequently-questions"
                  className="hover:text-white transition"
                >
                  Frequently Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              My Account
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/my-dashboard"
                  className="hover:text-white transition"
                >
                  My Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/wishlist"
                  className="hover:text-white transition"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="hover:text-white transition"
                >
                  Cart
                </Link>
              </li>

              <li>
                <Link
                  href="/checkout"
                  className="hover:text-white transition"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Rated Products */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Top Rated Products
            </h3>

            <div className="space-y-5">
              {topProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4"
                >
                  <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      {product.category}
                    </p>

                    <h4 className="text-sm font-medium text-white hover:text-gray-300 transition">
                      {product.name}
                    </h4>

                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <span className="line-through text-gray-500">
                        {product.oldPrice}
                      </span>

                      <span className="text-white font-semibold">
                        {product.newPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Footer */}
        <div className="py-6 border-b border-gray-800">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-white transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/online-store"
                className="hover:text-white transition"
              >
                Online Store
              </Link>
            </li>

            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/term-of-use"
                className="hover:text-white transition"
              >
                Terms Of Use
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-gray-400 text-center md:text-left">
            All Rights Reserved By Furniture | © 2026
          </p>

          <img
            src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png"
            alt="Payment"
            width={250}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
}