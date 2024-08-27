import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-lg border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-pink-600 font-bold text-xl">
          <Link to="/">BookShop</Link>
        </div>
        {/* Desktop Menu Centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-4">
          <Link to="/" className="text-pink-600 hover:text-pink-500 transition duration-300">Home</Link>
          <Link to="/books" className="text-pink-600 hover:text-pink-500 transition duration-300">Books</Link>
          <Link to="/about" className="text-pink-600 hover:text-pink-500 transition duration-300">About Us</Link>
          <Link to="/contact" className="text-pink-600 hover:text-pink-500 transition duration-300">Contact</Link>
        </div>
        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-700 transition duration-300">
            Log In
          </Link>
          <Link to="/signup" className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
            Sign Up
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-pink-600">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <Link to="/" className="block text-pink-600 text-2xl hover:text-pink-500 py-2 transition duration-300">Home</Link>
        <Link to="/books" className="block text-pink-600 text-2xl hover:text-pink-500 py-2 transition duration-300">Books</Link>
        <Link to="/about" className="block text-pink-600 text-2xl hover:text-pink-500 py-2 transition duration-300">About Us</Link>
        <Link to="/contact" className="block text-pink-600 text-2xl hover:text-pink-500 py-2 transition duration-300">Contact</Link>
        <Link to="/login" className="block text-pink-600 text-2xl hover:text-pink-500 py-2 transition duration-300">
          Log In
        </Link>
        <Link to="/signup" className="block text-pink-600 hover:text-pink-500 py-2 transition duration-300">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
