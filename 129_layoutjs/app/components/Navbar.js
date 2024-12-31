import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800'>
        <ul className='flex gap-4 p-3'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
  
    </nav> 
  )
}

export default Navbar
