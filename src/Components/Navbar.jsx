import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center px-10 py-4 rounded-2xl">
      {/* Logo / Brand */}
      <div className="text-xl font-bold">
        <NavLink to="/" end className="hover:text-green-400 transition">
          Farmer E-Cart
        </NavLink>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-6 text-lg">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : "hover:text-green-300 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/servicess"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : "hover:text-green-300 transition"
          }
        >
          Servicess
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : "hover:text-green-300 transition"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : "hover:text-green-300 transition"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
