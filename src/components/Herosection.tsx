import Image from 'next/image'
import React from 'react'
import productimagefour from "../../public/productlisting/productimagefour.jpeg"

const Herosection = () => {
  return (
    <div>
  {/* Hero Section */}
  <section className="container mx-auto px-6 py-10 flex flex-col-reverse md:flex-row items-center justify-between">
    {/* Left Side */}
    <div className="w-full h-96 sm:w-96  md:w-1/2 p-8 lg:ml-20 text-center md:text-left space-y-6 bg-[#2A254B]">
      <h1 className="text-lg md:text-xl font-bold text-white leading-tight">
        The Furniture Brand  <br /> For The Future with timeless design
      </h1>
      <button className="px-6 py-3 bg-[#F9F9F926] text-white font-medium shadow-md hover:bg-gray-600 transition duration-300">
        View Collection
      </button>
      <p className="text-sm text-gray-500 mt-10 pt-16">
      A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
      </p>
    </div>
     {/* Right Side */}
     <div className="w-full md:w-1/2 flex lg:mr-20 justify-center lg:justify-left xl:justify-left display-hidden sm:display-block md:display-block lg:display-block xl:display-block">
      <Image
        src={productimagefour}
        alt="Hero Image"
        className="w-96 h-96 shadow-lg"
        
      />
    </div>
  </section>

  </div>


  )
}

export default Herosection