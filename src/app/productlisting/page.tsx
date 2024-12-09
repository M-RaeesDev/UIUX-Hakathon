import Filter from '@/components/Filter'
import Image from 'next/image'
import React from 'react'
import productimageone from "../../../public/productlisting/productimageone.jpeg"
import productimagetwo from "../../../public/productlisting/productimagetwo.jpeg"
import productimagethree from "../../../public/productlisting/productimagethree.jpeg"
import productimagefour from "../../../public/productlisting/productimagefour.jpeg"
import banner from "../../../public/popularproduct/banner.jpeg"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


const page = () => {
  return (
    <div>
      <Navbar/>
   <div className="relative w-full h-[200px] md:h-[200px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={banner} // Replace with your image path
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          priority={true} // Optimize for performance
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Heading */}
      <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white text-2xl md:text-4xl font-semibold text-center md:text-left w-full md:w-auto">
        <p className="hidden md:block">All Products</p>
        <p className="block md:hidden">All Products</p>
      </div>
    </div>
    <Filter/>
    <div>
        <section className="container mx-auto px-6 py-10">

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
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimagethree}
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimagefour}
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

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
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimagethree}
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimagefour}
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

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
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimagethree}
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src={productimagefour}
            alt="Product 1"
            className=" lg:w-72 lg:h-60 sm:w-40 sm:h-40 md:w-40 md:h-40 w-32 h-28 mb-4"
            objectFit="cover"
            
          />
          <h3 className="text-md font-semibold text-gray-800">The Lucy Lamp</h3>
          <p className="text-gray-600 text-md mt-2">$399</p>
        </div>

        </div>

      <div className="text-center mt-4">
      <button type="button" className="w-full sm:w-40 md:2-40 lg:w-40 xl:w-40 2xl:w-40 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Collection</button>
    </div>
      
      </section>
    </div>
    <Footer/>
    </div>


  )
}

export default page