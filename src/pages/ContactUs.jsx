import React, { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);

    // Input dəyərlərini izləmək üçün
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // İstifadəçi yazdıqca həmin sahənin xətasını təmizləyirik
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    // Form göndəriləndə validation yoxlaması
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        // Ad yoxlaması
        if (!formData.name.trim()) {
            newErrors.name = 'Ad boş ola bilməz';
        }

        // Soyad yoxlaması
        if (!formData.surname.trim()) {
            newErrors.surname = 'Soyad boş ola bilməz';
        }

        // Email regex yoxlaması
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'E-mail boş ola bilməz';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Düzgün e-mail daxil edin';
        }

        // Mesaj yoxlaması
        if (!formData.message.trim()) {
            newErrors.message = 'Mesaj boş ola bilməz';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Hər şey qaydasındadırsa
            setSuccessMessage(true);
            setFormData({ name: '', surname: '', email: '', message: '' });
            setErrors({});

            setTimeout(() => {
                setSuccessMessage(false);
            }, 4000);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16 text-center">
            {/* Başlıq və təsvir */}
            <h1 className="text-3xl md:text-4xl font-normal text-black mb-4">Bizimlə Əlaqə</h1>
            <p className="text-sm text-gray-600 mb-2">
                Fikir, təklif və ya şikayətinizi bizimlə bölüşmək istəyirsinizsə "Bizimlə Əlaqə" formasını dolduraraq bizə göndərə bilərsiniz.
            </p>
            <p className="text-sm text-gray-600 mb-10">
                Mümkün qədər tez qiymətləndirəcək və sizinlə əlaqə saxlayacağıq.
            </p>

            {/* Uğurlu göndərilmə mesajı */}
            {successMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold rounded">
                    Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlanılacaq.
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                {/* Ad və Soyad (Yan-yana) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ad *"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full border p-3.5 outline-none text-sm placeholder-gray-400 bg-white ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-black'
                                }`}
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="surname"
                            placeholder="Soyad *"
                            value={formData.surname}
                            onChange={handleChange}
                            className={`w-full border p-3.5 outline-none text-sm placeholder-gray-400 bg-white ${errors.surname ? 'border-red-500' : 'border-gray-300 focus:border-black'
                                }`}
                        />
                        {errors.surname && <span className="text-red-500 text-xs mt-1 block">{errors.surname}</span>}
                    </div>
                </div>

                {/* E-mail */}
                <div>
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail *"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border p-3.5 outline-none text-sm placeholder-gray-400 bg-white ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-black'
                            }`}
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                </div>

                {/* Mesaj */}
                <div>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Mesaj *"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full border p-3.5 outline-none text-sm placeholder-gray-400 bg-white resize-none ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-black'
                            }`}
                    />
                    {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>}
                </div>

                {/* Göndər düyməsi */}
                <button
                    type="submit"
                    className="w-full bg-black text-white font-bold py-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer mt-2"
                >
                    Göndər
                </button>
            </form>

            {/* ReCAPTCHA qeydi */}
            <p className="text-xs text-gray-500 mt-6">
                Bu sayt reCAPTCHA tərəfindən qorunur və Google <a href="https://policies.google.com/privacy" target='_blank' className="underline">Məxfilik Siyasəti</a> və <a href="#" className="underline">Xidmət Şərtləri</a> tətbiq edilir.
            </p>
        </div>
    );
}