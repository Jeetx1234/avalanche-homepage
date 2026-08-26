import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Mainscreen from '../components/Mainscreen.jsx'

const LandingPage = () => {
  return (
    <div className='h-screen w-screen'>
      <Navbar/>
      <Mainscreen/>
    </div>
  )
}

export default LandingPage