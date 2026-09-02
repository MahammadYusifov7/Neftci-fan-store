import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        // E-mail yoxlanışı
        if (!email.trim()) {
            newErrors.email = "E-mail ünvanı tələb olunur.";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Düzgün e-mail formatı daxil edin (məs: user@mail.com).";
        }

        // Şifrə yoxlanışı
        if (!password) {
            newErrors.password = "Şifrə tələb olunur.";
        } else if (password.length < 6) {
            newErrors.password = "Şifrə ən azı 6 simvoldan ibarət olmalıdır.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccessMsg('');
            return;
        }

        setErrors({});
        setSuccessMsg("Uğurla daxil olundu!");
        setEmail('');
        setPassword('');
    };

    return (
        <div className="w-full bg-white py-12 md:py-20 px-4">
            <div className="max-w-md mx-auto">

                {/* TAB KEÇİDLƏRİ */}
                <div className="flex justify-center items-center gap-8 mb-10 text-xl font-bold">
                    <span className="border-b-2 border-black text-black pb-1">DAXİL OL</span>
                    <span className="text-gray-300">|</span>
                    <Link to="/register" className="text-gray-400 pb-1 hover:text-black transition-colors">
                        QEYDİYYATDAN KEÇİN
                    </Link>
                </div>

                {successMsg && (
                    <div className="mb-6 p-3 bg-green-100 text-green-700 text-sm text-center font-bold">
                        {successMsg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm font-semibold mb-1">E-mail *</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: '' }); }}
                            className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent"
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-semibold mb-1">Şifrə *</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: '' }); }}
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

                    <div className="text-right">
                        <a href="#" className="text-xs text-gray-600 underline font-semibold hover:text-black">
                            Şifrəni unutmusunuz?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white font-bold py-3.5 uppercase text-sm mt-2 hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Daxil ol
                    </button>

                    <p className="text-[12px] text-gray-600 text-start leading-5 mt-2">
                        Bu sayt reCAPTCHA tərəfindən qorunur və Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-bold underline">Məxfilik Siyasəti</a> və <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="font-bold underline">Xidmət Şərtləri</a> tətbiq edilir.
                    </p>
                </form>
            </div>
        </div>
    );
}