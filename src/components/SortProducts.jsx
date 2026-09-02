import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";

const sortOptionsList = [
    "Məhsulun adı ilə A-Z",
    "Məhsulun adı ilə Z-A",
    "Qiymətin artması",
    "Qiymətin azalması",
    "Endirim dərəcəsi artır",
    "Endirim dərəcəsi azalır",
    "Sonuncu əlavə edilən",
    "İlk əlavə edilən"
];

export default function SortProducts({ sortOption, setSortOption }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm bg-white cursor-pointer"
            >
                <span>Sırala: {sortOption}</span>
                <FiChevronDown />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border shadow-xl z-50 py-2">
                    {sortOptionsList.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => { setSortOption(opt); setIsOpen(false); }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${sortOption === opt ? 'font-bold' : ''}`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}