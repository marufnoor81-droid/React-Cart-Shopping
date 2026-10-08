/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from 'react'

export const CartContext = createContext(null)
const STORAGE_KEY = 'react-shopping-cart-items'

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem(STORAGE_KEY)
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === product.id)

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
                )
            }

            return [...currentItems, { ...product, quantity: 1 }]
        })
    }

    const updateQuantity = (productId, newQuantity) => {
        setCartItems((currentItems) => {
            if (newQuantity <= 0) {
                return currentItems.filter((item) => item.id !== productId)
            }

            return currentItems.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item,
            )
        })
    }

    const removeFromCart = (productId) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId),
        )
    }

    const itemCount = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
        [cartItems],
    )

    const subtotal = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cartItems],
    )

    const shipping = subtotal === 0 ? 0 : subtotal > 900 ? 0 : 15
    const total = subtotal + shipping

    const value = {
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        itemCount,
        subtotal,
        shipping,
        total,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
