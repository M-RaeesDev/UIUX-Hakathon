import React from 'react'

const Emailsignup = () => {
  return (
    <div>
        
  {/* Feature Section */}
  <section className="container mx-auto px-6 py-10 text-center">
    {/* Heading */}
    <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
      Join Our Community
    </h2>
    {/* Paragraph */}
    <p className="text-gray-600 text-base md:text-lg mb-8">
      Stay updated with the latest news and updates. <br />
      Subscribe to our newsletter for exclusive content.
    </p>
    {/* Email Signup Bar */}
    <div className="flex flex-col md:flex-row justify-center items-center max-w-xl mx-auto space-y-4 md:space-y-0">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full md:w-2/3 px-4 py-2 text-gray-800 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="w-full md:w-auto px-6 py-2 bg-[#2A254B] text-white font-medium rounded-lg md:rounded-none md:rounded-r-lg  transition duration-300">
        Sign Up
      </button>
    </div>
  </section>


    </div>
  )
}

export default Emailsignup