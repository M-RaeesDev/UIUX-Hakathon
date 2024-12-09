import React from 'react'

const Filter = () => {
  return (
    <div>
        <>
  {/* Filter Section */}
  <section className="container mx-auto px-6 py-8">
    {/* Desktop Layout */}
    <div className="hidden md:flex justify-between items-center bg-white shadow-lg p-6 rounded-lg">
      {/* Left Side: Filters */}
      <div className="flex space-x-4">
        {/* Category Dropdown */}
        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium">
            Category
          </label>
          <select
            id="category"
            className="mt-1 block w-20 px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Homeware</option>
            <option>Books</option>
          </select>
        </div>
        {/* Product Type Dropdown */}
        <div>
          <label
            htmlFor="product-type"
            className="block text-gray-700 font-medium"
          >
            Product Type
          </label>
          <select
            id="product-type"
            className="mt-1 block w-20 px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Types</option>
            <option>New Arrival</option>
            <option>Best Seller</option>
            <option>Trending</option>
          </select>
        </div>
        {/* Price Dropdown */}
        <div>
          <label htmlFor="price" className="block text-gray-700 font-medium">
            Price
          </label>
          <select
            id="price"
            className="mt-1 block w-20 px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Prices</option>
            <option>Under $50</option>
            <option>$50 - $100</option>
            <option>$100 - $200</option>
            <option>Over $200</option>
          </select>
        </div>
        {/* Brand Dropdown */}
        <div>
          <label htmlFor="brand" className="block text-gray-700 font-medium">
            Brand
          </label>
          <select
            id="brand"
            className="mt-1 block w-20 px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Brands</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Nike</option>
            <option>Adidas</option>
          </select>
        </div>
      </div>
      {/* Right Side: Sort By */}
      <div>
        <label htmlFor="sort" className="block text-gray-700 font-medium">
          Sorted By:
        </label>
        <select
          id="sort"
          className="mt-1 block w-20 px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Date Added</option>
          <option>Price (Low to High)</option>
          <option>Price (High to Low)</option>
          <option>Popularity</option>
        </select>
      </div>
    </div>
    {/* Mobile Layout */}
    <div className="md:hidden flex flex-wrap justify-center space-x-4 bg-white shadow-lg p-6 rounded-lg">
      {/* Filter Dropdown */}
      <select className="w-28 px-2 py-2 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Category</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Homeware</option>
        <option>Books</option>
      </select>
      {/* Sort Dropdown */}
      <select className="w-28 px-2 py-2 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Sorting</option>
        <option>Price (Low to High)</option>
        <option>Price (High to Low)</option>
        <option>Popularity</option>
      </select>
    </div>
  </section>
</>

    </div>
  )
}

export default Filter