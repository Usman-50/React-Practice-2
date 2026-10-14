import React from 'react'
import Card from './Card'

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || []
  return (
    <>
    <div>
       <div className='grid grid-cols-2 max-w-2xl mx-auto justify-center items-center'>
      {cartItems.map((product , index) => (
        <Card 
          key={product.id}
          index={index}
          id={product.id}
          title={product.title} 
          description={product.description} 
          price={product.price} 
          isCartPage={true}
        />
      ))}
    </div>
    </div>
    <div className='flex justify-center items-center h-[92.5vh]'>
    <div className='bg-[#0A0A0A] text-white border border-white w-[20%] p-4'>
        <div className='flex justify-center items-center'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      </div>
      <div className='flex justify-between items-center gap-4'>
      <div>
      <p className='text-xl font-bold'>Quantity : </p>
      <p className='text-xl font-bold'>Price : </p>
      <p className='text-xl font-bold'>Total : </p>
      </div>
      <div>
        <p className='text-xl font-bold'>1</p>
        <p className='text-xl font-bold'>100</p>
        <p className='text-xl font-bold'>1000</p>
      </div>
      </div>
      <div className='flex justify-center items-center'>
        <button className='text-xl font-bold bg-gray-900 px-2 py-4 rounded text-white cursor-pointer mt-4'>Check Out</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cart
