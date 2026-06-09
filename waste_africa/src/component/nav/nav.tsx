import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-15 py-4 bg-white shadow-md'>
         <h1 className='text-2xl font-bold text-emerald-300'>Waste Africa</h1>
            <ul className='flex items-center gap-5'>
                <li className='text-gray-600 hover:text-emerald-500 cursor-pointer'>Home</li>
                <li className='text-gray-600 hover:text-emerald-500 cursor-pointer'>Marketplace</li>
                <li className='text-gray-600 hover:text-emerald-500 cursor-pointer'>Services</li>
                <li className='text-gray-600 hover:text-emerald-500 cursor-pointer'>About</li>
            </ul>

    </nav>
  )
}
