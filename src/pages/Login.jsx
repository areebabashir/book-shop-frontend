import React from "react";
import Image3 from "../assets/letestArticlesIamge/ArticleImage3.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 w-full">
      <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-lg w-full max-w-7xl">
        {/* Left - Login Form */}
        <div className="w-full md:w-1/2 p-12 bg-white/30 backdrop-blur-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-semibold text-gray-800">Login</h2>
          </div>

          <form>
            <div className="mb-8">
              <label className="block text-gray-600 text-sm font-medium mb-3">
                Email
              </label>
              <input
                className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-700 focus:ring-pink-500 focus:border-pink-500"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-600 text-sm font-medium mb-3">
                Password
              </label>
              <input
                className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-700 focus:ring-pink-500 focus:border-pink-500"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="block w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-md shadow-lg transition-all"
            >
              Log In
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-pink-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div className=" w-full md:w-1/2 bg-pink-600">
          <img
            src={Image3}
            alt="Card Illustration"
            className="h-full w-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
