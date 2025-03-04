import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../contexts/SidebarContext'
const Header = () => {
  const {setIsOpen} = useContext(SidebarContext);
  return (
    <div>
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <div onClick={()=> setIsOpen(!isOpen)}>open/close sidebar</div>
    </div>
  )
}

export default Header
