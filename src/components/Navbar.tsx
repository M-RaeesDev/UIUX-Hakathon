import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="border-b bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Left: Search Icon */}
          <div className="w-16 h-8 flex items-center ">
            <button className="text-gray-600 hover:text-gray-900 text-xl ">
              <FontAwesomeIcon icon={faSearch} className="text-gray-600 hover:text-gray-900 w-3.5 h-3.5 " />
            </button>
          </div>
          {/* Middle: Brand Name */}
          <div className="flex justify-center flex-1">
            <h1 className="text-2xl font-bold text-gray-800">Globe Wood</h1>
          </div>
          {/* Right: Shopping Cart & User Icon */}
          <div className="flex items-center space-x-6">
            <Link href="/cart">
              <button className="text-gray-600 hover:text-gray-900 text-xl">
                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 hover:text-gray-900 w-3.5 h-3.5" />
              </button>
            </Link>
            <Link href="/aboutus">
              <button className="text-gray-600 hover:text-gray-900 text-xl">
                <FontAwesomeIcon icon={faUser} className="text-gray-600 hover:text-gray-900 w-3.5 h-3.5" />
              </button>
            </Link>
            {/* Mobile Menu Toggle */}
            <button
              id="menuToggle"
              className="text-gray-600 hover:text-gray-900 text-xl md:hidden"
            >
              <FontAwesomeIcon icon={faBars} className="text-gray-600 hover:text-gray-900 w-3.5 h-3.5" />
            </button>
          </div>
        </nav>
        {/* Mobile Links */}
        <div id="mobileLinks" className="hidden bg-gray-100 md:hidden">
          <ul className="space-y-2 p-4">
            <li>
              <Link href="/productlisting" className="block text-gray-700 hover:text-gray-900">
                Product Listing
              </Link>
            </li>
            <li>
              <Link href="/prodetail" className="block text-gray-700 hover:text-gray-900">
                Product Detail
              </Link>
            </li>
          </ul>
        </div>
      </header>
      {/* Links Section */}
      <div className="container mx-auto py-5">
        <div className="hidden md:flex justify-center space-x-6">
          <Link href="/productlisting" className="text-gray-700 hover:text-gray-900">
            All Products
          </Link>
          <Link href="/productdetail" className="text-gray-700 hover:text-gray-900">
            Product detail
          </Link>
          <Link href="/cart" className=" text-gray-700 hover:text-gray-900">
            Cart Items
          </Link>
          <Link href="/aboutus" className="text-gray-700 hover:text-gray-900">
            About us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
