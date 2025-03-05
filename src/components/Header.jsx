import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'
const Header = () => {
  const {setIsOpen, isOpen} = useContext(SidebarContext);
  return (
    <header className='bg-pink-200'>
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsBag className='text-2xl'/>
      </div>
    </header>
  )
}

export default Header
