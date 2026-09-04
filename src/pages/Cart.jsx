import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { BiX } from 'react-icons/bi';

export default function Cart() {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => {
        let itemPrice = item.discountPercent > 0
            ? item.price - (item.price * item.discountPercent) / 100
            : item.price;

        if (item.customName && item.customName.trim() !== '') itemPrice += 6;
        if (item.customNumber && item.customNumber.toString().trim() !== '') itemPrice += 5;

        return total + (itemPrice * item.quantity);
    }, 0);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-black mb-8">ALIŞ-VERİŞ SƏBƏTİ</h1>

            {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <p className="text-lg text-gray-600 mb-6">Səbətinizdə heç nə yoxdur.</p>
                    <Link to="/products" className="bg-black text-white px-8 py-3 text-sm font-bold uppercase hover:bg-gray-800 transition-colors">
                        Məhsullara Bax
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-3/4 divide-y divide-gray-200 border-t border-b border-gray-200">
                        {cart.map((item) => {
                            let itemPrice = item.discountPercent > 0
                                ? item.price - (item.price * item.discountPercent) / 100
                                : item.price;

                            if (item.customName && item.customName.trim() !== '') itemPrice += 6;
                            if (item.customNumber && item.customNumber.toString().trim() !== '') itemPrice += 5;

                            return (
                                <div key={item.cartId} className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-6">
                                        <img
                                            src={item.images[0]}
                                            alt={item.title}
                                            className="w-24 h-28 object-contain bg-gray-50 p-2 border border-gray-100"
                                        />
                                        <div>
                                            <h3 className="text-base font-bold text-black mb-1">{item.title}</h3>
                                            {item.selectedSize && <p className="text-xs text-gray-500 mb-0.5">Ölçü: {item.selectedSize}</p>}
                                            {item.customName && <p className="text-xs text-gray-500 mb-0.5">Ad - {item.customName}</p>}
                                            {item.customNumber && <p className="text-xs text-gray-500">Nömrə - {item.customNumber}</p>}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between w-full sm:w-auto gap-8">
                                        {/* Miqdar düymələri */}
                                        <div className="flex items-center border border-gray-300 px-3 py-1.5 gap-4">
                                            <button
                                                onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                                className="text-gray-500 hover:text-black cursor-pointer font-bold text-lg select-none"
                                            >
                                                -
                                            </button>
                                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                                className="text-gray-500 hover:text-black cursor-pointer font-bold text-lg select-none"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <span className="text-base font-bold text-black w-24 text-right">
                                            AZN {(itemPrice * item.quantity).toFixed(2)}
                                        </span>

                                        <button
                                            onClick={() => removeFromCart(item.cartId)}
                                            className="text-gray-400 hover:text-red-600 text-xl cursor-pointer"
                                        >
                                            <BiX />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-full lg:w-1/4 bg-gray-50 p-6 flex flex-col justify-between h-fit border border-gray-200">
                        <div>
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                                <span className="text-base font-bold text-gray-700">Ara cəmi</span>
                                <span className="text-xl font-black text-black">AZN {totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <Link
                            to="/checkout"
                            className="block w-full bg-black text-white font-bold py-4 uppercase text-sm hover:bg-gray-800 transition-colors cursor-pointer text-center"
                        >
                            Ödənİş Et
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}