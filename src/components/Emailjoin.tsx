import React from 'react'
import Image from 'next/image'
import feature from "../../public/popularproduct/feature.jpeg"

const Emailjoin = () => {
  return (
    <div>
        
  {/* Feature Section */}
  <section className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center">
    {/* Left Div */}
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        From a studio in London to a 
        <br />
        global brand with over 400 outlets.
      </h2>
      <p className="text-gray-600 text-base md:text-sm">
        Explore the tools and resources that will help you grow and succeed.
      </p>
      <p className="text-gray-500 text-sm md:text-base">
        Stay ahead of the curve with our innovative solutions tailored for you.
      </p>

      <button className="w-full md:w-auto h-12 px-8  text-white bg-[#2A254B] font-medium text-lg rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
        Get Started
      </button>
    </div>
    {/* Right Div */}
    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
      <Image
        src={feature}
        alt="Feature Image"
        className="w-full h-[400px]  object-cover rounded-lg shadow-lg"
      />
    </div>
  </section>

    </div>
  )
}

export default Emailjoin