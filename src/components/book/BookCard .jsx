import React from 'react';

const BookCard = ({ image, title, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">${price}</p>
      <button className="mt-4 bg-gradient-to-br from-[#ccffff] to-[#ff66cc] text-white px-4 py-2 rounded shadow hover:opacity-90">
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;
