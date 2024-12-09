import Image from 'next/image'
import React from 'react'


const Productdetail = () => {
  return (
    <div>
        <>
  {/* Product Detail Section */}
  <section className="container mx-auto px-6 py-10">
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Div: Image */}
      <div className="w-full md:w-1/2">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="https://via.placeholder.com/600"
            alt="Product Image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
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
          This is a brief description of the product. It provides an overview of
          its features and benefits. Perfect for everyday use and suitable for
          all occasions.
        </p>
        {/* Dimensions */}
        <div className="text-gray-700">
          <p>
            <span className="font-medium">Height:</span> 10 cm
          </p>
          <p>
            <span className="font-medium">Width:</span> 20 cm
          </p>
          <p>
            <span className="font-medium">Depth:</span> 15 cm
          </p>
        </div>
        {/* Amount and Add to Cart */}
        <div className="flex items-center space-x-4">
          {/* Amount Selector */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button className="px-3 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300">
              -
            </button>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-12 text-center text-gray-800 focus:outline-none"
            />
            <button className="px-3 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300">
              +
            </button>
          </div>
          {/* Add to Cart Button */}
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Productdetail