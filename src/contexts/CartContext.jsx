import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState([]);
  //item amount state
  const [itemAmount, setItemAmount] = useState(0)
  //total price state
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const total = cart.reduce((accumulator, currentItem)=>{
      return accumulator + currentItem.price * currentItem.amount;
    },0);
    setTotal(total)
  })

  //update item amount
  useEffect(()=>{
    const amount = cart.reduce((accumulator, currentItem)=>{
      return accumulator + currentItem.amount;
    },0);
    setItemAmount(amount)
  },[cart])

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



  //clear cart  
  const clearCart = () =>{
    setCart([])
  }

  //increase amount
  const increaseAmount = (id) =>{
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id)
  }

  //decrease amount
  const decreaeAmount = (id) =>{
    const cartItem = cart.find((item)=>{
      return item.id === id;
    })
    if(cartItem) {
      const newCart = cart.map(item =>{
        if(item.id === id){
          return {...item, amount: cartItem.amount - 1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
    
      if(cartItem.amount < 2){
        removeFromCart(id)
      }
    
  }

  // Provide cart state and addToCart function to children components
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaeAmount, itemAmount,total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;