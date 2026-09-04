import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const { cart, clearCart } = useContext(CartContext);

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        address: '',
        note: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Səhifə statusu dəyişən kimi (təsdiq olunanda) pəncərəni avtomatik yuxarı qaldırır
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [submitted]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
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
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Ad boş ola bilməz';
        }

        if (!formData.surname.trim()) {
            newErrors.surname = 'Soyad boş ola bilməz';
        }

        const phoneRegex = /^(\+994|0)?(50|51|55|70|71|77|99|10)[0-9]{7}$/;
        const cleanPhone = formData.phone.replace(/\s+/g, '');
        if (!formData.phone.trim()) {
            newErrors.phone = 'Əlaqə nömrəsi boş ola bilməz';
        } else if (!phoneRegex.test(cleanPhone)) {
            newErrors.phone = 'Düzgün nömrə daxil edin (məs: 0501234567)';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Çatdırılma ünvanı boş ola bilməz';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setSubmitted(true);
            clearCart();
        }
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
                <form onSubmit={handleSubmit} className="w-full lg:w-2/3 space-y-6" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-black mb-2">Ad *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border p-3.5 outline-none text-sm bg-white ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-black'
                                    }`}
                                placeholder="Adınız"
                            />
                            {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-black mb-2">Soyad *</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                className={`w-full border p-3.5 outline-none text-sm bg-white ${errors.surname ? 'border-red-500' : 'border-gray-300 focus:border-black'
                                    }`}
                                placeholder="Soyadınız"
                            />
                            {errors.surname && <span className="text-red-500 text-xs mt-1 block">{errors.surname}</span>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-black mb-2">Əlaqə nömrəsi *</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full border p-3.5 outline-none text-sm bg-white ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-black'
                                }`}
                            placeholder="0501234567 və ya +994..."
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-black mb-2">Çatdırılma Ünvanı *</label>
                        <textarea
                            name="address"
                            rows="3"
                            value={formData.address}
                            onChange={handleChange}
                            className={`w-full border p-3.5 outline-none text-sm resize-none bg-white ${errors.address ? 'border-red-500' : 'border-gray-300 focus:border-black'
                                }`}
                            placeholder="Şəhər, küçə, bina, mənzil"
                        />
                        {errors.address && <span className="text-red-500 text-xs mt-1 block">{errors.address}</span>}
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-black mb-2">Sifariş qeydi (istəyə bağlı)</label>
                        <textarea
                            name="note"
                            rows="2"
                            value={formData.note}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3.5 outline-none focus:border-black text-sm resize-none bg-white"
                            placeholder="Kuryer üçün əlavə məlumat..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white font-bold py-4 uppercase text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Sİfarİşİ Təsdİq Et
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