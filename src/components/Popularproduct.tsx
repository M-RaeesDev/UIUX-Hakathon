import Image from 'next/image'
import React from 'react'
import popularone from "../../public/popularproduct/popularone.jpeg"
import popularthree from "../../public/popularproduct/popularthree.jpeg"

import productimagefour from "../../public/productlisting/productimagefour.jpeg"

const Popularproduct = () => {
  return (
    <div>
        <>
  {/* Feature Section */}
  <section className="container mx-auto px-6 py-10">
    {/* Small Heading */}
    <div className="text-left mb-4">
      <h2 className="text-sm md:text-md lg:text-lg xl:text-xl md:text-2xl font-semibold text-gray-800">
        Featured Products
      </h2>
    </div>
    {/* Product Boxes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* First Box (2 Columns Wide) */}
      <div className="sm:col-span-2 bg-white shadow-lg rounded-lg p-6 flex flex-col items-left text-left">
        <Image
          src={popularone}
          alt="Product 1"
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h3 className="text-sm font-semibold text-gray-800">The Popular Suede Soda</h3>
        <p className="text-gray-600 text-md mt-2">$980</p>
      </div>
      {/* Second Box */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-left text-left">
        <Image
          src={productimagefour}
          alt="Product 2"
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h3 className="text-sm font-semibold text-gray-800">The Dandy Chair</h3>
        <p className="text-gray-600 text-md mt-2">$250</p>
      </div>
      {/* Third Box */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-left text-left">
        <Image
          src={popularthree}
          alt="Product 3"
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h3 className="text-sm font-semibold text-gray-800">Chair</h3>
        <p className="text-gray-600 text-md mt-2">$150</p>
      </div>
    </div>
    <div className="text-center mt-10 ">
      <button type="button" className="w-full sm:w-40 md:2-40 lg:w-40 xl:w-40 2xl:w-40 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#F9F9F9] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Collection</button>
    </div>
  </section>
</>

    </div>
  )
}

export default Popularproduct