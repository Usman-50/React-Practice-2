import { useState , useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

function App() {
 
  return (
    <>
     <Navbar />
     <div className='flex border border-white'>
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     </div>
     <Navbar />
    </>
  )
}

export default App
