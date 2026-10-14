import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='flex gap-4 flex-col justify-center items-center border border-white text-white p-4 w-[20%] rounded'>
        <div className='flex flex-col gap-2'>
      <label htmlFor="">Name</label>
      <input className='bg-gray-800 px-2 py-2 rounded mb-4' type="text" placeholder='Enter your name' />
      </div>
      <div className='flex flex-col gap-4'>
      <label htmlFor="">Email</label>
      <input className='bg-gray-800 px-2 py-2 rounded mb-4' type="text" placeholder='Enter your email' />
      </div>
      <div className='flex flex-col gap-4'>
      <label htmlFor="">Address</label>
      <input className='bg-gray-800 px-2 py-2 rounded mb-4' type="text" placeholder='Enter your address' />
      </div>
      <button className='text-white text-xl px-4 py-2 bg-gray-800 cursor-pointer mt-4 rounded'>Submit</button>
    </div>
    </div>
  )
}

export default Form
