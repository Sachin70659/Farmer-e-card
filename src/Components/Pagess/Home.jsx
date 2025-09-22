// HeroSection.jsx
import React from "react";

export const Home=()=> {
  return (
    <section className="bg-gradient-to-r from-green-600 to-lime-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Fresh Farm Products, Delivered to Your Doorstep
        </h1>

        {/* Sub Heading */}
        <p className="text-lg md:text-xl mb-6">
          Connecting farmers directly with customers – healthy, organic, and affordable.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="/servicess"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-900 hover:text-white transition"
          >
            Shop Now
          </a>
          <a
            href="/contact"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-900 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
