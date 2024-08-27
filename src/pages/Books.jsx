import React, { useState } from 'react';
import BookCard from '../components/book/BookCard ';
import bookImage1 from '../assets/FeaturedBooksImages/FeaturedBook1.png';
import bookImage2 from '../assets/FeaturedBooksImages/FeaturedBook4.png'; 
import bookImage3 from '../assets/FeaturedBooksImages/FeaturedBook3.png'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Books = () => {
  // State to track which category is open
  const [openCategory, setOpenCategory] = useState(null);

  // Function to toggle category open/close
  const toggleCategory = (category) => {
    if (openCategory === category) {
      setOpenCategory(null); // close if already open
    } else {
      setOpenCategory(category); // open the clicked category
    }
  };

  return (
    <div className="container mx-auto p-6 flex gap-12">
      {/* Categories Section */}
      <div className="w-48 p-4">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer text-xl">
            <div
              className="flex justify-between items-center hover:text-pink-600"
              onClick={() => toggleCategory('fiction')}
            >
              Fiction
              <FontAwesomeIcon icon={openCategory === 'fiction' ? faMinus : faPlus} />
            </div>
            {/* Subcategories */}
            {openCategory === 'fiction' && (
              <ul className="ml-4 mt-2 space-y-1">
                <li className="hover:text-pink-600 cursor-pointer">Fantasy</li>
                <li className="hover:text-pink-600 cursor-pointer">Historical</li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer text-xl">
            <div
              className="flex justify-between items-center hover:text-pink-600"
              onClick={() => toggleCategory('non-fiction')}
            >
              Non-Fiction
              <FontAwesomeIcon icon={openCategory === 'non-fiction' ? faMinus : faPlus} />
            </div>
            {/* Subcategories */}
            {openCategory === 'non-fiction' && (
              <ul className="ml-4 mt-2 space-y-1">
                <li className="hover:text-pink-600 cursor-pointer">Memoirs</li>
                <li className="hover:text-pink-600 cursor-pointer">Self-Help</li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer text-xl">
            <div
              className="flex justify-between items-center hover:text-pink-600"
              onClick={() => toggleCategory('sci-fi')}
            >
              Science Fiction
              <FontAwesomeIcon icon={openCategory === 'sci-fi' ? faMinus : faPlus} />
            </div>
            {/* Subcategories */}
            {openCategory === 'sci-fi' && (
              <ul className="ml-4 mt-2 space-y-1">
                <li className="hover:text-pink-600 cursor-pointer">Dystopian</li>
                <li className="hover:text-pink-600 cursor-pointer">Space Opera</li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer text-xl">
            <div
              className="flex justify-between items-center hover:text-pink-600"
              onClick={() => toggleCategory('biographies')}
            >
              Biographies
              <FontAwesomeIcon icon={openCategory === 'biographies' ? faMinus : faPlus} />
            </div>
            {/* Subcategories */}
            {openCategory === 'biographies' && (
              <ul className="ml-4 mt-2 space-y-1">
                <li className="hover:text-pink-600 cursor-pointer">Historical Figures</li>
                <li className="hover:text-pink-600 cursor-pointer">Celebrities</li>
              </ul>
            )}
          </li>
          {/* Add more categories and subcategories as needed */}
        </ul>
      </div>

      {/* Books Section */}
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-6">
        <BookCard image={bookImage1} title="Book Title 1" price="19.99" />
        <BookCard image={bookImage2} title="Book Title 2" price="24.99" />
        <BookCard image={bookImage3} title="Book Title 3" price="29.99" />
        {/* Add more BookCards as needed */}
      </div>
    </div>
  );
};

export default Books;
