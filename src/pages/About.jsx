import React from 'react';
import Image2 from "../assets/letestArticlesIamge/ArticleImage1.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are a passionate group of book lovers who believe in sharing knowledge and stories
            with the world. Our mission is to provide a wide variety of books for readers of all ages.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <img
            src={Image2}
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
