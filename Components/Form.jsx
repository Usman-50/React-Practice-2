import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

   const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center h-screen'>
    <div className='flex gap-4 flex-col justify-center items-center border border-white text-white p-4 w-[20%] rounded'>
        <div className='flex flex-col gap-2'>
      <label htmlFor="">Name</label>
      <input className='bg-gray-800 px-2 py-2 rounded mb-4' type="text" placeholder='Enter your name' {...register("username" , {required: true , minLength:{value: 3, message: "Min length is 3"} , maxLength: {value: 8 , message: "Max length is 8"}})} />
      {errors.username && <div>{errors.username.message}</div>}
      </div>
      <div className='flex flex-col gap-4'>
      <label htmlFor="">Email</label>
      <input className='bg-gray-800 px-2 py-2 rounded mb-4' type="text" placeholder='Enter your email' {...register("email" , {required: true , minLength:{value: 3, message: "Min length is 3"} , maxLength: {value: 8 , message: "Max length is 8"}})} />
      {errors.email && <div>{errors.email.message}</div>}
      </div>
      <div className='flex flex-col gap-4'>
      <label htmlFor="">Address</label>
      <input className='bg-gray-800 px-2 py-2 rounded mb-4' type="text" placeholder='Enter your address' {...register("address" , {required: true , minLength:{value: 3, message: "Min length is 3"} , maxLength: {value: 8 , message: "Max length is 8"}})} />
      {errors.address && <div>{errors.address.message}</div>}
      </div>
      <button className='text-white text-xl px-4 py-2 bg-gray-800 cursor-pointer mt-4 rounded'>Submit</button>
    </div>
    </form>
  )
}

export default Form
