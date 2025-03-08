import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//sidebar constext
import { SidebarContext } from '../contexts/SidebarContext'
//cart context
import { CartContext } from '../contexts/CartContext'
//import icons
import { BsBag } from 'react-icons/bs'
//import Logo 
import Logo from '../assets/img/Logo.webp';
import { WiNightCloudy } from 'react-icons/wi'

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(true);
  const {setIsOpen, isOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  //event listener
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
  <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all h-[60px] flex items-center`}>
<div className='container mx-auto flex items-center justify-between h-full'>
   {/* Logo */}
      <Link to="/">
        <div>
        <img className='w-[40px]' src={Logo} alt='Logo'/>
        </div>
      </Link>
      {/* cart */}
      <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]'>
      <BsBag className='text-2xl'/>
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
</div>

    </header>
  )
}

export default Header
