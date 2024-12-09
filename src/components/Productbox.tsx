import Image from 'next/image'
import React from 'react'
import productimageone from "../../public/productlisting/productimageone.jpeg"
import productimagetwo from "../../public/productlisting/productimagetwo.jpeg"
import productimagethree from "../../public/productlisting/productimagethree.jpeg"
import productimagefour from "../../public/productlisting/productimagefour.jpeg"


const Productbox = () => {
  return (
    <div>
        <section className="container mx-auto px-6 py-10">
      {/* Small Heading */}
      <div className="text-left mb-4">
        <h2 className="text-sm md:text-md lg:text-lg xl:text-xl md:text-2xl font-semibold text-gray-800">
          New Ceramics
        </h2>
      </div>

       {/* Product Boxes */}
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Product Box 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimageone}
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimagetwo}
            alt="Product two"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimagethree}
            alt="Product three"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimagefour}
            alt="Product four"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>
        </div>
      <div className="text-center mt-10 ">
      <button type="button" className="w-full sm:w-40 md:2-40 lg:w-40 xl:w-40 2xl:w-40 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#F9F9F9] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Collection</button>
    </div>
    </section>

    </div>
  )
}

export default Productbox