import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Farmer E-Cart</span>, your trusted online marketplace for fresh farm products.
        </p>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to empower farmers by giving them a platform to sell their produce directly.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 mb-2">Fresh & Organic</h3>
            <p className="text-gray-600">All products come directly from local farms.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick doorstep delivery with real-time tracking.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 mb-2">Farmer Support</h3>
            <p className="text-gray-600">Helping farmers earn better by removing middlemen.</p>
          </div>
        </div>

        <Link
          to="/servicess"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};
