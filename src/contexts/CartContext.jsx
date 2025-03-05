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

  console.log(cart)

  // Provide cart state and addToCart function to children components
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;