import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import productimageone from "../../../public/productlisting/productimageone.jpeg"
import productimagetwo from "../../../public/productlisting/productimagetwo.jpeg"

import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div>
        <Navbar/>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
      {/* Heading */}
      <h1 className="text-2xl sm:text-xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4 border-b border-gray-300 pb-4 text-gray-600">
        <p className="font-semibold col-span-2">Product</p>
        <p className="font-semibold text-center">Quantity</p>
        <p className="font-semibold text-right">Total</p>
      </div>

      {/* Products */}
      <div className="space-y-6 mt-6">
        {/* Product 1 */}
        <div className="flex flex-col md:grid grid-cols-3 lg:grid-cols-4 gap-4 items-center border-b border-gray-200 pb-4">
          {/* Product Image and Details */}
          <div className="flex items-center space-x-4 col-span-2">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <Image
                src={productimageone}
                alt="Product 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Product Name</h2>
              <p className="text-gray-500 text-sm sm:text-base">Short product description.</p>
              <p className="text-blue-600 font-medium mt-1">$49.99</p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button className="px-3 py-2 bg-gray-200 text-gray-800 hidden sm:block md:block lg:block xl:block 2xl:block hover:bg-gray-300">-</button>
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="w-12 text-center text-gray-800 focus:outline-none"
              />
              <button className="px-3 py-2 bg-gray-200 text-gray-800 hidden sm:block md:block lg:block xl:block 2xl:block hover:bg-gray-300">+</button>
            </div>
          </div>

          {/* Total */}
          <p className="text-right font-semibold text-gray-800">$49.99</p>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col md:grid grid-cols-3 lg:grid-cols-4 gap-4 items-center border-b border-gray-200 pb-4">
          {/* Product Image and Details */}
          <div className="flex items-center space-x-4 col-span-2">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <Image
                src={productimagetwo}
                alt="Product 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Another Product</h2>
              <p className="text-gray-500 text-sm sm:text-base">Another short description.</p>
              <p className="text-blue-600 font-medium mt-1">$79.99</p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button className="px-3 py-2 bg-gray-200 text-gray-800 hidden sm:block md:block lg:block xl:block 2xl:block hover:bg-gray-300">-</button>
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="w-12 text-center text-gray-800 focus:outline-none"
              />
              <button className="px-3 py-2 bg-gray-200 text-gray-800  hidden sm:block md:block lg:block xl:block 2xl:block hover:bg-gray-300">+</button>
            </div>
          </div>

          {/* Total */}
          <p className="text-right font-semibold text-gray-800">$79.99</p>
        </div>
      </div>

      {/* Subtotal and Checkout */}
      <div className="flex flex-col items-end mt-10 space-y-4">
        {/* Total */}
        <p className="text-lg sm:text-xl font-semibold text-gray-800">Total: $129.98</p>
        {/* Subtotal */}
        <p className="text-xl sm:text-2xl font-bold text-gray-800">Subtotal: $129.98</p>
        {/* Checkout Button */}
        <button className="mt-4 px-8 py-3 bg-[#2A254B] text-white font-medium rounded-lg shadow-md hover:bg-[#2A254B] transition duration-300">
          Go to Checkout
        </button>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default page