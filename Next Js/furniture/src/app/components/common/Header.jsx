// components/Header.jsx

import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  Search,
  ChevronDown,
  X,
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-black text-white text-sm py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-2">
          <p>
            Contact us 24/7 : +91-98745612330 / furniture@gmail.com
          </p>

          <div>
            <Link
              href="/login-register"
              className="hover:text-yellow-400 transition"
            >
              Login / Register
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between gap-5">
          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
                alt="Logo"
                width={150}
                height={60}
              />
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <form className="w-full flex border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search product..."
                className="w-full px-4 py-2 outline-none"
              />

              <button className="bg-black text-white px-5 flex items-center justify-center">
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            {/* Wishlist */}
            <Link href="/wishlist" className="relative">
              <Heart className="w-6 h-6" />
            </Link>

            {/* Cart */}
            <div className="relative group">
              <button className="flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" />

                <span className="hidden md:block">
                  Rs. 0.00
                </span>

                <ChevronDown size={16} />
              </button>

              {/* Cart Count */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>

              {/* Mini Cart */}
              <div className="absolute right-0 top-12 w-80 bg-white shadow-2xl border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="font-semibold text-lg">Cart</h3>

                  <button>
                    <X size={18} />
                  </button>
                </div>

                <div className="p-6 text-center">
                  <img
                    src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                    alt="Empty Cart"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />

                  <p className="mt-4 text-gray-500">
                    Your shopping cart is empty!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav>
            <ul className="flex items-center gap-8 py-4 font-medium">
              <li>
                <Link href="/" className="text-red-500">
                  Home
                </Link>
              </li>

              {/* Mega Menu */}
              <li className="relative group">
                <button className="flex items-center gap-1">
                  Living <ChevronDown size={16} />
                </button>

                <div className="absolute left-0 top-10 bg-white shadow-2xl rounded-lg p-8 w-[700px] hidden group-hover:grid grid-cols-3 gap-8 z-50">
                  {/* Column 1 */}
                  <div>
                    <h4 className="font-semibold mb-4">
                      Tables
                    </h4>

                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <Link href="#">
                          Side and End Tables
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          Nest Of Tables
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          Coffee Table Sets
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          Coffee Tables
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h4 className="font-semibold mb-4">
                      Mirror
                    </h4>

                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <Link href="#">
                          Wooden Mirrors
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <h4 className="font-semibold mb-4">
                      Storage
                    </h4>

                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <Link href="#">
                          Prayer Units
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          Display Unit
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          Shoe Racks
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          Bookshelves
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          TV Units
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Sofa */}
              <li className="relative group">
                <button className="flex items-center gap-1">
                  Sofa <ChevronDown size={16} />
                </button>

                <div className="absolute left-0 top-10 bg-white shadow-2xl rounded-lg p-8 w-[600px] hidden group-hover:grid grid-cols-3 gap-8 z-50">
                  <div>
                    <h4 className="font-semibold mb-4">
                      Sofa Cum Bed
                    </h4>

                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <Link href="#">
                          Wooden Sofa Cum Bed
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">
                      Sofa Sets
                    </h4>

                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <Link href="#">
                          L Shape Sofa
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          1 Seater Sofa
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          2 Seater Sofa
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          3 Seater Sofa
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">
                      Swing Jhula
                    </h4>

                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <Link href="#">
                          Wooden Jhula
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Pages */}
              <li className="relative group">
                <button className="flex items-center gap-1">
                  Pages <ChevronDown size={16} />
                </button>

                <ul className="absolute top-10 left-0 bg-white shadow-xl rounded-lg w-56 py-3 hidden group-hover:block z-50">
                  <li>
                    <Link
                      href="/about-us"
                      className="block px-5 py-2 hover:bg-gray-100"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/blog"
                      className="block px-5 py-2 hover:bg-gray-100"
                    >
                     Blog
                    </Link>
                  </li>

                   

                  <li>
                    <Link
                      href="/cart"
                      className="block px-5 py-2 hover:bg-gray-100"
                    >
                      Cart
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/checkout"
                      className="block px-5 py-2 hover:bg-gray-100"
                    >
                      Checkout
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/faq"
                      className="block px-5 py-2 hover:bg-gray-100"
                    >
                      Frequently Questions
                    </Link>
                  </li>
                </ul>
              </li>
     <li>
                    <Link
                      href="/product"
                      className="block px-5 py-2 hover:bg-gray-100"
                    >
                     Product
                    </Link>
                  </li>
              <li>
                <Link href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}