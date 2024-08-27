import React from 'react';
import book from "../assets/HeaderBooks/book1.png"
import book1 from "../assets/HeaderBooks/headerBook1.png"
import book2 from "../assets/HeaderBooks/headerBook2.png"
import book3 from "../assets/HeaderBooks/headerBook3.png"

const Home = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center md:items-start">
      {/* Hero Section */}
      <div className="mx-auto p-6 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="md:w-1/2 p-4 md:p-8  rounded-lg md:mt-48 mt-4">
        <h1 className="text-5xl font-extrabold mb-4 text-pink-800 leading-tight">
          Welcome <span className="text-pink-700">to</span> <span className="text-pink-600">BookShop</span>
        </h1>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Dive into our extensive collection of books across various genres. Find your next page-turner today and get lost in a world of knowledge and adventure!
        </p>
        <button className=" bg-pink-400 hover:text-pink-500 px-6 py-3 rounded-lg shadow-lg  transition transform hover:scale-105 duration-300">
          Shop Now
        </button>
      </div>


        {/* Right Section (Image) */}
        <div className="md:w-1/2 p-4 md:p-8 w-full">
          <img
            src={book}
            alt="Books Collection"
            className="w-full h-[700px] rounded-lg shadow-xl "
          />
        </div>
      </div>

      {/* Books Grid Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src={book1}
            alt="Book 1"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-bold text-xl mb-2">Book Title 1</h3>
          <p className="text-gray-600 mb-4">An exhilarating novel with captivating twists and turns that will keep you hooked.</p>
          <p className="text-blue-600 font-semibold">$19.99</p>
          <button className="mt-4  bg-pink-400 hover:text-pink-500 px-4 py-2 rounded-lg shadow-md  transition duration-300">
            Buy Now
          </button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src={book2}
            alt="Book 2"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-bold text-xl mb-2">Book Title 2</h3>
          <p className="text-gray-600 mb-4">A journey of discovery and adventure, beautifully written to engage readers of all ages.</p>
          <p className="text-blue-600 font-semibold">$24.99</p>
          <button className="mt-4  bg-pink-400 hover:text-pink-500 px-4 py-2 rounded-lg shadow-md transition duration-300">
            Buy Now
          </button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src={book3}
            alt="Book 3"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-bold text-xl mb-2">Book Title 3</h3>
          <p className="text-gray-600 mb-4">A moving story with profound themes, perfect for those who love thought-provoking narratives.</p>
          <p className="text-pink-400 font-semibold">$29.99</p>
          <button className="mt-4  bg-pink-400 hover:text-pink-500  px-4 py-2 rounded-lg shadow-md transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
