import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
    //check if the item is already in the cart
    const CartItem = cart.find((item)=>{
      return item.id === id;
    });
    //if cart item is already in the cart
    if(CartItem){
      const newCart = [...cart].map((item)=>{
        if(item.id === id){
          return {...item, amount: CartItem.amount + 1}
        }else{
          return item
        }
      })
      setCart(newCart);
    }else{

      setCart([...cart, newItem])
    }
  };

  //remove from cart
  const removeFromCart = (id) =>{
    
    const newCart = cart.filter(item =>{
      return item.id !== id;
    })
    setCart(newCart)
  }

  console.log(cart)

  //clear cart  
  const clearCart = () =>{
    setCart([])
  }

  // Provide cart state and addToCart function to children components
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;