import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const products = [
    { id: uuidv4(), title: "Headphones", description: "Wireless Bluetooth headphones", price: 4500 },
    { id: uuidv4(), title: "Smart Watch", description: "Fitness tracking watch", price: 7800 },
    { id: uuidv4(), title: "Keyboard", description: "Mechanical gaming keyboard", price: 3200 },
    { id: uuidv4(), title: "Gaming Mouse", description: "Ergonomic RGB gaming mouse", price: 1800 },
  ];

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-2 max-w-2xl mx-auto justify-center items-center'>
        {products.map((product) => {
          return <Card
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        })}
      </div>
    </>
  )
}

export default App
