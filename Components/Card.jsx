import React from 'react'
import { useState } from 'react'

const Card = ({ id, title, description, price, isCartPage, index }) => {

  const handleAdd = () => {
    let currentCart = JSON.parse(localStorage.getItem("cart")) || []
    const newProduct = {
      id: id,
      title: title,
      description: description,
      price: price
    }
    currentCart.push(newProduct)
    localStorage.setItem("cart", JSON.stringify(currentCart))
    alert(` Cart mein add ho gaya!`);
  }

  const handleDelete = () =>{
    let currentCart = JSON.parse(localStorage.getItem("cart")) || []
    currentCart.splice(index , 1)
    localStorage.setItem("cart" , JSON.stringify(currentCart))
     alert(`${title} Cart se delete ho gaya!`);
     window.location.reload();
  }

  return (

    <div className='text-white border border-white w-[80%] h-[45vh] p-4 rounded-2xl m-4 shadow-md transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]'>
      <img className='mb-4 rounded' src="images/headphones.jpeg" alt="" />
      <p className='text-xl'>Title : {title}</p>
      <p className='text-xl'>Description : {description}</p>
      <p className='text-xl'>Price : {price}</p>
      {isCartPage ? (
      <button onClick={handleDelete} className='text-white text-xl px-4 py-2 bg-gray-800 cursor-pointer mt-4 rounded'>Delete</button>
      ) : (
      <button onClick={handleAdd} className='text-white text-xl px-4 py-2 bg-gray-800 cursor-pointer mt-4 rounded'>Add To Cart</button>
      )}
    </div>
  )
}

export default Card
