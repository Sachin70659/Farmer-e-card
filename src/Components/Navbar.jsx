import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className=" bg-gray-800 rounded-xl text-white max-w-auto   flex flex-col justify-between md:flex md:flex-row  md:justify-between  ">
        
      {/* Logo / Brand */}
      <div className="text-3xl md:text-xl mx-3 font-bold ">
        <NavLink to="/" end className="hover:text-green-400 transition">
          Farmer E-Cart
        </NavLink>
      </div>

      {/* Nav Links */}
      <div className="mx-4 font-bold md:text-base text-2xl flex flex-col md:flex md:flex-row  md:space-x-3.5 ">
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
        <NavLink
          to="/privacy"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : "hover:text-green-300 transition"
          }
        >
          Privacy Policy
        </NavLink>
        
      </div>
    </nav>
  );
};
