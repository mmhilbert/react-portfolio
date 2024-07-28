import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header name="Megan" />
    <div className='flex flex-col items-center'>
      <div className="container">
        <Outlet />
      </div>
    </div>

    <Footer />
    </>
  )
}

export default App
