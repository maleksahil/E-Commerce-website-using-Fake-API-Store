import React, { createContext, useState } from 'react'
//create context

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
    //sidebar state
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () =>{
        setIsOpen(false);
    }
  return <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</SidebarContext.Provider>
}

export default SidebarProvider
