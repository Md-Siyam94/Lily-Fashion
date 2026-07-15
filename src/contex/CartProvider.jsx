'use client'
import { createContext, useState } from "react"


export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, useCart] = useState([])
    const cartInfo = {
        cart,
        useCart
    }
    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    )
}
