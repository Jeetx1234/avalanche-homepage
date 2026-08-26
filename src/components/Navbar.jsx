import React from 'react'
import Avalogo from '../assets/ava_logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

            <div className='w-full h-1/8  flex justify-between py-3 px-11 items-center'>
            <div className='flex items-center gap-3'>
                <img src={Avalogo} className='h-20 w-20 object-contain'  alt="" />
                <div><h1 className="text-5xl tracking-widest font-black font-heading">
                    Avalanche
                </h1>

                <p className="text-1xl font-bold font-body text-blue-800">
                    feel Accelerated..
                </p></div>
            </div>
            
            <div className='flex gap-15 font-body'>
                <button className='w-30 bg-blue-200 px-3 py-2 h-12 rounded-full font-bold cursor-pointer transition-all duration-300 ease-out hover:scale-105  hover:shadow-[10px_10px_20px_rgba(0,0,0,0.4)] '>
                    <Link to='/about' >About</Link>
                </button>

                <button className='w-30 bg-blue-200 px-3 py-3 h-12 rounded-full font-bold cursor-pointer transition-all duration-300 ease-out hover:scale-105  hover:shadow-[10px_10px_20px_rgba(0,0,0,0.4)] '>
                   <Link to='/events' >Events</Link>
                </button>

                <button className='w-30 bg-blue-200 px-3 py-3 h-12 rounded-full font-bold cursor-pointer transition-all duration-300 ease-out hover:scale-105  hover:shadow-[8px_10px_20px_rgba(0,0,0,0.4)] '>
                    <Link to='/gallery' >Gallery</Link>
                </button>
            </div>

        </div>

    )
}

export default Navbar