import React from 'react';

const Account = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Account</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Personal Details</h2>
        <p className="text-gray-600">Name: John Doe</p>
        <p className="text-gray-600">Email: johndoe@example.com</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default Account;
