"use client";

import React from "react";


export default function Hero() {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-300 py-28 font-[sans-serif]">
      

        {/* Text Content */}
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-16 z-10 text-center text-gray-800">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-gray-800">
          Transforming Education Through Technology
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 md:mb-12 text-gray-600">
          Unlock Your Learning Potential with AI-Powered Resources
            <br />
            Stay ahead with cutting-edge educational resources and technology.
          </p>

          {/* CTA Buttons: Blog and E-Commerce */}
          <div className="mt-8 flex justify-center space-x-6">
            {/* Blog Button */}
            <a
              href="/blogs"  // Link to the blog section
              className="inline-block px-6 py-3 bg-transparent border-2 border-gray-700 text-lg font-medium text-gray-700 rounded-lg shadow-md hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              Read Our Blogs
            </a>

        
          </div>
        </div>
      </div>
    </div>
  );
}
