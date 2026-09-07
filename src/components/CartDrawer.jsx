import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => {
        let itemPrice = item.discountPercent > 0
            ? item.price - (item.price * item.discountPercent) / 100
            : item.price;

        if (item.customName && item.customName.trim() !== '') {
            itemPrice += 6;
        }
        if (item.customNumber && item.customNumber.toString().trim() !== '') {
            itemPrice += 5;
        }

        return total + (itemPrice * item.quantity);
    }, 0);

    return (
        <div className={`fixed inset-0 z-[200] overflow-hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className={`absolute inset-y-0 right-0 max-w-full flex pl-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">

                    <div className="flex items-center justify-between px-6 py-4 border-b">
                        <h2 className="text-xl font-bold text-black">Səbət</h2>
                        <button onClick={onClose} className="text-2xl text-black hover:opacity-70 cursor-pointer">
                            <BiX />
                        </button>
                    </div>

                    <div className="bg-gray-50 px-6 py-2 text-xs font-semibold text-gray-600 border-b text-center">
                        Çatdırılma Ödənişsizdir
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                        {cart.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                                <p className="text-sm font-medium">Səbətinizdə heç nə yoxdur.</p>
                            </div>
                        ) : (
                            cart.map((item) => {
                                let itemPrice = item.discountPercent > 0
                                    ? item.price - (item.price * item.discountPercent) / 100
                                    : item.price;

                                if (item.customName && item.customName.trim() !== '') {
                                    itemPrice += 6;
                                }
                                if (item.customNumber && item.customNumber.toString().trim() !== '') {
                                    itemPrice += 5;
                                }

                                return (
                                    <div key={item.cartId} className="flex gap-4 pb-4 border-b border-gray-100 items-start relative">
                                        <Link to={`/product/${item.slug || item.id}`} onClick={onClose} className="shrink-0">
                                            <img
                                                src={item.images[0]}
                                                alt={item.title}
                                                className="w-16 h-20 object-contain bg-gray-50 p-1 hover:opacity-80 transition-opacity"
                                            />
                                        </Link>
                                        <div className="flex-1 pr-2">
                                            <Link to={`/product/${item.slug || item.id}`} onClick={onClose}>
                                                <h4 className="text-xs font-bold text-black leading-snug mb-1 hover:underline">{item.title}</h4>
                                            </Link>
                                            <p className="text-xs text-gray-500 mb-0.5">Ədəd: {item.quantity}</p>
                                            {item.selectedSize && <p className="text-xs text-gray-500 mb-0.5">Ölçü: {item.selectedSize}</p>}
                                            {item.customName && <p className="text-xs text-gray-500 mb-0.5">Ad - {item.customName}</p>}
                                            {item.customNumber && <p className="text-xs text-gray-500">Nömrə - {item.customNumber}</p>}
                                        </div>
                                        <div className="text-right flex flex-col justify-between h-full shrink-0">
                                            <span className="text-xs font-bold text-black">AZN {(itemPrice * item.quantity).toFixed(2)}</span>
                                            <button
                                                onClick={() => removeFromCart(item.cartId)}
                                                className="text-xs text-red-500 hover:underline mt-6 cursor-pointer self-end"
                                            >
                                                Sil
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {cart.length > 0 && (
                        <div className="border-t p-6 bg-white space-y-3">
                            <Link
                                to="/cart"
                                onClick={onClose}
                                className="block w-full border border-black text-center font-bold py-3 text-xs uppercase hover:bg-gray-50 transition-colors"
                            >
                                Səbətə Get
                            </Link>
                            <Link to="/checkout" onClick={onClose} className="block w-full">
                                <button
                                    className="w-full bg-black text-white font-bold py-3 text-xs uppercase hover:bg-gray-800 transition-colors cursor-pointer"
                                >
                                    Al AZN {totalPrice.toFixed(2)}
                                </button>
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}