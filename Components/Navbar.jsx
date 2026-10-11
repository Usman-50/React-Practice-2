import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-gray-800 text-white text-2xl p-4'>
        <div>
            <h1 className='font-bold'>LOGO</h1>
        </div>
        <div className='flex gap-4'>
        <NavLink to="/" className={(e) =>{return e.isActive ? "text-[#FFD700]" : ""}}>Home</NavLink>
        <NavLink to="/" className={(e) =>{return e.isActive ? "text-[#FFD700]" : ""}}>Cart</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
