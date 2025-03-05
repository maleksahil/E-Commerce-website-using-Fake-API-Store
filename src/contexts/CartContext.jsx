import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    //cart state
    const [cart, setCart] = useState([]);

    //add to cart
    const addToCart = ()=>{
        console.log('add to the cart')
    }

  return (
    <CartContext.Provider value={{addToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
