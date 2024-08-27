import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-600">Your cart is currently empty.</p>
      </div>
    </div>
  );
};

export default Cart;
