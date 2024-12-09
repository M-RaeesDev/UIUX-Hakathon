import React from 'react'
// import "../../lib/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faShoppingCart, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

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
        <button className="text-gray-600 hover:text-gray-900 text-xl">
        <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 hover:text-gray-900 w-3.5 h-3.5" />
        </button>
        <button className="text-gray-600 hover:text-gray-900 text-xl">
        <FontAwesomeIcon icon={faUser} className="text-gray-600 hover:text-gray-900 w-3.5 h-3.5" />
        </button>
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
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Link 1
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Link 2
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Link 3
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Link 4
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Link 5
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Link 6
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Link 7
          </a>
        </li>
      </ul>
    </div>
  </header>
  {/* Links Section */}
  <div className="container mx-auto py-5">
    <div className="hidden md:flex justify-center space-x-6">
      <a href="#" className="text-gray-700 hover:text-gray-900">
        Plant pots
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
        Ceramics
      </a>
      <a href="#" className=" text-gray-700 hover:text-gray-900">
        Table
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
        Chair
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
        Grocery
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
        Tableware
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
        Cutlery
      </a>
    </div>
  </div>

    </div>
  )
}

export default Navbar