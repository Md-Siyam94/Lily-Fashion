'use client'
import { createContext, useEffect, useState } from "react"


export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(()=>{
       if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
    const cartInfo = {
        cart,
        setCart
    }
    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    )
}
