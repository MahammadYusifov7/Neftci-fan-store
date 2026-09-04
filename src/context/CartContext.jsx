import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, selectedSize, quantity, customName, customNumber) => {
        setCart((prev) => {
            const existingIndex = prev.findIndex(
                item => item.id === product.id &&
                    item.selectedSize === selectedSize &&
                    item.customName === customName &&
                    item.customNumber === customNumber
            );

            if (existingIndex > -1) {
                const updated = [...prev];
                updated[existingIndex].quantity += Number(quantity);
                return updated;
            }

            return [...prev, {
                ...product,
                cartId: Date.now(),
                selectedSize,
                quantity: Number(quantity),
                customName,
                customNumber
            }];
        });
    };

    const removeFromCart = (cartId) => {
        setCart(prev => prev.filter(item => item.cartId !== cartId));
    };

    const updateQuantity = (cartId, newQuantity) => {
        setCart((prev) => {
            return prev.map(item => {
                if (item.cartId === cartId) {
                    return { ...item, quantity: Number(newQuantity) };
                }
                return item;
            }).filter(item => item.quantity > 0);
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}