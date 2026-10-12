import React from 'react'
import { useState } from 'react'

const Card = ({ title, description, price }) => {
  return (
    
    <div className='text-white border border-white w-[80%] h-[45vh] p-4 rounded-2xl m-4 shadow-md transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]'>
      <img className='mb-4 rounded' src="images/headphones.jpeg" alt="" />
      <p className='text-xl'>Title : {title}</p>
      <p className='text-xl'>Description : {description}</p>
      <p className='text-xl'>Price : {price}</p>
      <button className='text-white text-xl px-4 py-2 bg-gray-800 cursor-pointer mt-4 rounded'>Add To Cart</button>
    </div>
  )
}

export default Card
