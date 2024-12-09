import Herosection from '@/components/Herosection'
import Emailjoin from "@/components/Emailjoin";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar'
import React from 'react'
import Emailsignup from '@/components/Emailsignup';

const page = () => {
  return (
    <div>
        <Navbar/>
        <header className="w-full h-[277px] bg-[#FFFFFF] text-white flex items-center">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-black sm:text-base">A brand built on the love of craftmanship,
          </p>
          <p className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-black sm:text-base mt-2">quality and outstanding customer service</p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <button className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg w-full md:w-auto shadow-md hover:bg-blue-100 transition duration-300">
            View Our Product
          </button>
        </div>
      </div>
    </header>
    <Herosection/>
    <Emailjoin/>
    <Feature/>
    <Emailsignup/>
      <Footer/>
    </div>
  )
}

export default page