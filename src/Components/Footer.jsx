// Footer.jsx
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3 text-center md:text-left">
        
        {/* Left Section */}
        <div>
          <h1 className="text-lg font-semibold mb-2 hover:text-gray-400 ">About Farmer E-Cart</h1>
          <p className="text-sm leading-relaxed hover:text-gray-400 ">
            Farmer E-Cart is an online platform that helps farmers sell their
            products directly and delivers fresh, quality produce to customers.
          </p>
          <p className="text-xs mt-3 hover:text-gray-400 ">© 2025 Farmer E-Cart. All rights reserved.</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-2 md:items-center">
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
          <a href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</a>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-125 duration-300"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-300 transition-transform transform hover:scale-125 duration-300"
          >
            <BsTwitterX size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-transform transform hover:scale-125 duration-300"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};
