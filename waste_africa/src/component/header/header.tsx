import React from 'react'
import { GiNuclearWaste } from "react-icons/gi";

export const Header = () => {
  return (
    <header className='flex items-center justify-center space-x-6 py-2 bg-emerald-300 shadow-md'>
      <h2 className='flex text-sm font-bold text-black'>   <GiNuclearWaste className='text-xl text-center text-slate-950 ' />
        Promo!  Promo!!  Promo!!!</h2>
    </header>
  )
}

  