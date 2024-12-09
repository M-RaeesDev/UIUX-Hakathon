import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import productdetail from "../../../public/popularproduct/productdetail.jpeg"
import Popularproduct from '@/components/Popularproduct'
import Emailsignup from "@/components/Emailsignup";
import Footer from "@/components/Footer";
import Feature from '@/components/Feature'



const page = () => {
  return (
    <div>
        <Navbar/>
        
        <section className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Div: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-96">
            <Image
              src={productdetail}
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Div: Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Product Name
          </h1>
          <p className="text-xl text-blue-600 font-bold">$129.99</p>
          <p className="text-gray-600 leading-relaxed">
            This is a brief description of the product. It provides an overview
            of its features and benefits. Perfect for everyday use and suitable
            for all occasions.
          </p>

          {/* Dimensions */}
          <div className="text-gray-700">
            <p>
              <span className="font-medium">Height cm:</span> 
              <input
                type="number"
                defaultValue="25"
                min="1"
                className="w-12 text-center text-gray-800 focus:outline-none"
              />
              
            </p>
            <p>
              <span className="font-medium">Width cm:</span> 
              <input
                type="number"
                defaultValue="20"
                min="1"
                className="w-12 text-center text-gray-800 focus:outline-none"
              />
              
            </p>
            <p>
              <span className="font-medium">Depth cm:</span> 
              
              <input
                type="number"
                defaultValue="10"
                min="1"
                className="w-12 text-center text-gray-800 focus:outline-none"
              />
              
            </p>
          </div>

          {/* Amount and Add to Cart */}
          <div className="flex items-center space-x-4">
            {/* Amount Selector */}
            <div className="flex items-center border border-gray-300  overflow-hidden"> Amount :
              
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="w-12 text-center text-gray-800 focus:outline-none"
              />
              
            </div>

            {/* Add to Cart Button */}
            <button className="px-6 py-3 bg-[#2A254B] text-white font-medium rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>

    <Popularproduct/>
     <Feature/>
      <Emailsignup/>
      <Footer/>

    </div>
  )
}

export default page