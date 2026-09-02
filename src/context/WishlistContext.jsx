import React, { createContext, useState, useEffect } from 'react';

// Context-i yaradırıq
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    // LocalStorage-dən əvvəlki datanı oxuyuruq (istifadəçi səhifəni yeniləyəndə silinməməsi üçün)
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Wishlist dəyişəndə LocalStorage-i yeniləyirik
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    // Məhsulu əlavə edən və ya çıxaran funksiya
    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            const isExist = prev.some((item) => item.id === product.id);
            if (isExist) {
                return prev.filter((item) => item.id !== product.id); // Varsa sil
            } else {
                return [...prev, product]; // Yoxdursa əlavə et
            }
        });
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};