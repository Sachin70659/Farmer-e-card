// Footer.jsx
import React from "react";

export const Footer=()=> {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <p className="text-sm">© 2025 Farmer E-Cart. All rights reserved.</p>

        {/* Middle Section */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-300">twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">instagram</a>
        </div>
      </div>
    </footer>
  );
}
