import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCreditCard, faLeaf, faTruck} from "@fortawesome/free-solid-svg-icons";
import React from 'react'

const Feature = () => {
  return (
    <div>
        
  {/* Feature Section */}
  <section className="container mx-auto px-6 py-10">
    {/* Small Heading */}
    <div className="text-center mb-10">
      <h2 className="text-sm md:text-md lg:text-lg xl:text-xl md:text-2xl font-semibold text-gray-800">
        What make our brand different
      </h2>
    </div>
    {/* Feature Boxes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Feature Box 1 */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-left text-left relative">
      <FontAwesomeIcon
        icon={faTruck}
        className="w-6 h-6 text-black text-left top-4 "
      />
        <h3 className="text-md font-semibold text-gray-800 mt-6">
        Next day as standard
        </h3>
        <p className=" text-sm text-gray-600 mt-2">
          Easily customize your project to meet your needs.
        </p>
      </div>
      {/* Feature Box 2 */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-left text-left relative">
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="w-6 h-6 text-black text-left top-4 "
      />
        <h3 className="text-md font-semibold text-gray-800 mt-6">Made by true artisans</h3>
        <p className="text-sm text-gray-600 mt-2">
          Your data is safe with our top-notch security measures.
        </p>
      </div>
      {/* Feature Box 3 */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-left text-left relative">
      <FontAwesomeIcon
        icon={faCreditCard}
        className="w-6 h-6 text-black text-left top-4 "
      />
        <h3 className="text-md font-semibold text-gray-800 mt-6">
        Unbeatable prices
        </h3>
        <p className=" text-sm text-gray-600 mt-2">
          Enjoy seamless synchronization across all devices.
        </p>
      </div>
      {/* Feature Box 4 */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-left text-lef relative">
      <FontAwesomeIcon
        icon={faLeaf}
        className="w-6 h-6 text-black text-left top-4 "
      />
        <h3 className="text-md font-semibold text-gray-800 mt-6">
        Recycled packaging
        </h3>
        <p className=" text-sm text-gray-600 mt-2">
          Experience an intuitive and easy-to-use interface.
        </p>
      </div>
    </div>
  </section>


    </div>
  )
}

export default Feature