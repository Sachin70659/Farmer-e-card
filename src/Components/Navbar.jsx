import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar=()=>{
  return (
    <nav className='h-[50px]  bg-gray-800 text-white flex justify-between items-center px-20 m-5 text-2lg rounded-2xl'>
      <div>
      <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Farmer-E-Cart</NavLink> 
           </div>
      <div className='flex justify-between gap-20 text-lg '>
      <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/servicess" className={({isActive}) => isActive ? 'active' : ''}>Servicess</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
      <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
    </div>
    </nav>
  )
}
