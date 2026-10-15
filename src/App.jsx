import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import Cart from '../Components/Cart'
import { v4 as uuidv4 } from 'uuid';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Form from '../Components/Form'

const products = [
  { id: 1, title: "Headphones", description: "Wireless Bluetooth headphones", price: 4500 },
  { id: 2, title: "Smart Watch", description: "Fitness tracking watch", price: 7800 },
  { id: 3, title: "Keyboard", description: "Mechanical gaming keyboard", price: 3200 },
  { id: 4, title: "Gaming Mouse", description: "Ergonomic RGB gaming mouse", price: 1800 },
];

const Home = () =>{
   return (
    <div className='grid grid-cols-2 max-w-2xl mx-auto justify-center items-center'>
      {products.map((product) => (
        <Card 
          key={product.id} 
          id={product.id}
          title={product.title} 
          description={product.description} 
          price={product.price} 
        />
      ))}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
    <Navbar />
    <Home />
    </>
    )
  },
  {
    path: "/Cart",
    element: (
      <>
    <Navbar />
    <Cart />
    </>
    )
  },
  {
    path: "/Form",
    element: <Form />
  }
]
)

function App() {
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
