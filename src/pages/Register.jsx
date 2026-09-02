import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        agree: false
    });
    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+994|0)(50|51|55|60|70|77|99)\d{7}$/;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        setErrors({ ...errors, [name]: '' });
        setSuccessMsg('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Ad tələb olunur.";
        }

        if (!formData.surname.trim()) {
            newErrors.surname = "Soyad tələb olunur.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "E-mail ünvanı tələb olunur.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Düzgün e-mail formatı daxil edin (məs: user@mail.com).";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Əlaqə nömrəsi tələb olunur.";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Düzgün nömrə formatı daxil edin (məs: 0501234567 və ya +994501234567).";
        }

        if (!formData.password) {
            newErrors.password = "Şifrə tələb olunur.";
        } else if (formData.password.length < 8) {
            newErrors.password = "Şifrə ən azı 8 simvoldan ibarət olmalıdır.";
        }

        if (!formData.agree) {
            newErrors.agree = "Davam etmək üçün şərtləri qəbul etməlisiniz.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccessMsg('');
            return;
        }

        setErrors({});
        setSuccessMsg("Qeydiyyat uğurla tamamlandı!");
        setFormData({ name: '', surname: '', email: '', phone: '', password: '', agree: false });
    };

    return (
        <div className="w-full bg-white py-12 md:py-20 px-4">
            <div className="max-w-md mx-auto">

                <div className="flex justify-center items-center gap-8 mb-10 text-xl font-bold">
                    <Link to="/login" className="text-gray-400 pb-1 hover:text-black transition-colors">
                        DAXİL OL
                    </Link>
                    <span className="text-gray-300">|</span>
                    <span className="border-b-2 border-black text-black pb-1">QEYDİYYATDAN KEÇİN</span>
                </div>

                {successMsg && (
                    <div className="mb-6 p-3 bg-green-100 text-green-700 text-sm text-center font-bold">
                        {successMsg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Ad *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent"
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Soyad *</label>
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent"
                        />
                        {errors.surname && <span className="text-red-500 text-xs mt-1 block">{errors.surname}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">E-mail *</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent"
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Əlaqə Nömrəsi *</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="050XXXXXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent"
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-semibold mb-1">Şifrə *</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 bottom-3 text-gray-500 cursor-pointer"
                        >
                            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </button>
                        {errors.password && <span className="text-red-500 text-xs mt-1 block">{errors.password}</span>}
                    </div>

                    <div>
                        <label className="flex items-start gap-3 cursor-pointer text-xs leading-relaxed">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 accent-black rounded cursor-pointer shrink-0"
                            />
                            <span>
                                Kampaniyalardan xəbərdar olmaq üçün <span className="font-bold underline">Kommersiya Elektron Mesajının Təsdiqi</span> mətnini oxudum və təsdiqlədim. Mən sizin göndərdiyiniz kommersiya elektron mesajlarını almaq istərdim.
                            </span>
                        </label>
                        {errors.agree && <span className="text-red-500 text-xs mt-1 block">{errors.agree}</span>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white font-bold py-3.5 uppercase text-sm mt-2 hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Qeydiyyatdan keçin
                    </button>

                    <p className="text-[12px] text-gray-600 text-start leading-5 mt-2">
                        Bu sayt reCAPTCHA tərəfindən qorunur və Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-bold underline">Məxfilik Siyasəti</a> və <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="font-bold underline">Xidmət Şərtləri</a> tətbiq edilir.
                    </p>
                </form>
            </div>
        </div>
    );
}