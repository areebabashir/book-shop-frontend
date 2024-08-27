import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600 mr-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2a4 4 0 014-4l4 4a4 4 0 014 4l2 2M3 12l2 2a4 4 0 004 4l4-4a4 4 0 004-4l2-2M3 12h18"
            />
          </svg>
          <p className="text-gray-700">+1 (234) 567-890</p>
        </div>
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600 mr-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4.5M12 16h0M19 3l-6 6M5 3l6 6M12 8l-6 6M12 8l6 6"
            />
          </svg>
          <p className="text-gray-700">info@bookshop.com</p>
        </div>
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600 mr-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4.5M12 16h0M19 3l-6 6M5 3l6 6M12 8l-6 6M12 8l6 6"
            />
          </svg>
          <p className="text-gray-700">123 Book St, Booktown, BK 45678</p>
        </div>

        {/* Map Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="relative overflow-hidden pb-56.25 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.7736793735407!2d72.82065261150768!3d33.766513773154536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa436e082015d%3A0xf729c78e5ac28d57!2sUniversity%20of%20Engineering%20and%20Technology%20(UET)%2C%20Taxila!5e0!3m2!1sen!2s!4v1724583886965!5m2!1sen!2s"
              style={{ border: "0", width: "100%", height: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
