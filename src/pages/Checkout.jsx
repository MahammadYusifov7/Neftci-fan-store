import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        address: '',
        note: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const totalPrice = cart.reduce((total, item) => {
        let itemPrice = item.discountPercent > 0
            ? item.price - (item.price * item.discountPercent) / 100
            : item.price;

        if (item.customName && item.customName.trim() !== '') itemPrice += 6;
        if (item.customNumber && item.customNumber.toString().trim() !== '') itemPrice += 5;

        return total + (itemPrice * item.quantity);
    }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada sifarişi backendə göndərmək və ya localStorage-də saxlamaq olar
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="max-w-xl mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold text-black mb-4">Sifarişiniz Qəbul Olundu!</h1>
                <p className="text-gray-600 mb-8">Tezliklə operatorumuz sizinlə əlaqə saxlayacaq.</p>
                <Link to="/" className="bg-black text-white px-8 py-3 text-sm font-bold uppercase hover:bg-gray-800 transition-colors">
                    Ana Səhifəyə Qayıt
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-black mb-8">Sifarişi Tamamla</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Əlaqə və Ünvan Formu */}
                <form onSubmit={handleSubmit} className="w-full lg:w-2/3 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-black mb-2">Ad *</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3.5 outline-none focus:border-black text-sm"
                                placeholder="Adınız"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-black mb-2">Soyad *</label>
                            <input
                                type="text"
                                name="surname"
                                required
                                value={formData.surname}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3.5 outline-none focus:border-black text-sm"
                                placeholder="Soyadınız"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-black mb-2">Əlaqə nömrəsi *</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3.5 outline-none focus:border-black text-sm"
                            placeholder="+994 XX XXX XX XX"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-black mb-2">Çatdırılma Ünvanı *</label>
                        <textarea
                            name="address"
                            required
                            rows="3"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3.5 outline-none focus:border-black text-sm resize-none"
                            placeholder="Şəhər, küçə, bina, mənzil"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-black mb-2">Sifariş qeydi (istəyə bağlı)</label>
                        <textarea
                            name="note"
                            rows="2"
                            value={formData.note}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3.5 outline-none focus:border-black text-sm resize-none"
                            placeholder="Kuryer üçün əlavə məlumat..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white font-bold py-4 uppercase text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Sifarişi Təsdiq Et
                    </button>
                </form>

                {/* Sifariş Xülasəsi (Summary) */}
                <div className="w-full lg:w-1/3 bg-gray-50 p-6 h-fit border border-gray-200">
                    <h2 className="text-lg font-bold text-black mb-4 pb-3 border-b border-gray-200">Sifariş Xülasəsi</h2>

                    <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                        {cart.map((item) => (
                            <div key={item.cartId} className="flex justify-between text-xs">
                                <span className="text-gray-600">{item.title} (x{item.quantity})</span>
                                <span className="font-bold">AZN {(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 mb-6">
                        <span className="font-bold text-gray-700">Yekun məbləğ</span>
                        <span className="text-xl font-black text-black">AZN {totalPrice.toFixed(2)}</span>
                    </div>

                    <Link to="/cart" className="block text-center text-xs text-gray-600 underline hover:text-black">
                        Səbətə qayıt və dəyişiklik et
                    </Link>
                </div>
            </div>
        </div>
    );
}