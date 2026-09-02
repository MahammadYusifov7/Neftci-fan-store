import React, { useState } from 'react';
import { FiSearch, FiChevronDown } from "react-icons/fi";
import ProductCard from '../components/ProductCard';
import MobileFilter from '../components/MobileFilter';
import SortProducts from '../components/SortProducts';
import { Sorting, sortOptionsList } from '../utils/Sorting';
import { AllProducts } from '../data/products';

const categoriesList = [
    { label: "Aksesuarlar", value: "aksesuarlar" },
    { label: "Formalar", value: "formalar" },
    { label: "Moda", value: "moda" },
    { label: "Məşq Geyimləri", value: "məşq geyimləri" },
    { label: "Outlet", value: "outlet" }
];

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState("Sonuncu əlavə edilən");
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
    const [isSidebarCategoriesOpen, setIsSidebarCategoriesOpen] = useState(true);

    // Checkbox seçimlərini idarə edən funksiya
    const handleCategoryCheckbox = (catValue) => {
        if (selectedCategories.includes(catValue)) {
            setSelectedCategories(selectedCategories.filter(c => c !== catValue));
        } else {
            setSelectedCategories([...selectedCategories, catValue]);
        }
    };

    // 1. Filtrləmə məntiqi
    let currentProducts = AllProducts;

    if (searchQuery.trim() !== "") {
        currentProducts = currentProducts.filter(p =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (selectedCategories.length > 0) {
        currentProducts = currentProducts.filter(p => selectedCategories.includes(p.category));
    }

    // 2. Sıralama
    currentProducts = Sorting(currentProducts, sortOption);

    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Desktop üçün Başlıq */}
                <h1 className="hidden md:block text-3xl font-normal text-black mb-8">
                    Axtar ({currentProducts.length})
                </h1>

                {/* Mobil üçün Başlıq */}
                <h1 className="md:hidden text-3xl font-normal text-black mb-4">
                    Axtar
                </h1>

                {/* Mobil üçün Axtarış Sətri (Mobildə tam en, Desktopda sol menyunun enində olacaq) */}
                <div className="md:hidden relative mb-6">
                    <input
                        type="text"
                        placeholder="Axtarış"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border-b border-gray-400 py-2 pr-10 text-sm focus:outline-none focus:border-black bg-transparent"
                    />
                    <FiSearch className="absolute right-2 top-3 text-gray-500 text-lg" />
                </div>

                {/* Mobil üçün Nəticə sayı və Filtr düyməsi */}
                <div className="md:hidden flex justify-between items-center mb-6">
                    <span className="font-bold text-gray-600">{currentProducts.length} Nəticə</span>
                    <button
                        onClick={() => setMobileFilterOpen(true)}
                        className="flex items-center gap-2 bg-white border border-black px-4 py-2 text-xs uppercase text-black font-bold cursor-pointer"
                    >
                        Filtr ⚙️
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8">

                    {/* DESKTOP SOL MENYU (Sidebar) */}
                    <aside className="hidden md:block w-1/4 shrink-0">
                        <div className="sticky top-24">

                            {/* Desktop Axtarış Sətri */}
                            <div className="relative mb-10">
                                <input
                                    type="text"
                                    placeholder="Axtarış"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full border-b border-gray-400 py-2 pr-10 text-sm focus:outline-none focus:border-black bg-transparent"
                                />
                                <FiSearch className="absolute right-2 top-3 text-gray-500 text-lg" />
                            </div>

                            <h3
                                onClick={() => setIsSidebarCategoriesOpen(!isSidebarCategoriesOpen)}
                                className="font-bold text-sm mb-4 flex items-center justify-between border-b border-gray-200 pb-2 cursor-pointer select-none"
                            >
                                Kateqoriyalar
                                <FiChevronDown className={`transition-transform duration-300 ${isSidebarCategoriesOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </h3>

                            {isSidebarCategoriesOpen && (
                                <div className="flex flex-col gap-4 text-sm text-gray-700 mt-4">
                                    {categoriesList.map((cat) => (
                                        <label key={cat.value} className="flex items-center gap-3 cursor-pointer hover:text-black">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(cat.value)}
                                                onChange={() => handleCategoryCheckbox(cat.value)}
                                                className="w-4 h-4 accent-black rounded border-gray-300 cursor-pointer"
                                            />
                                            {cat.label}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* MƏHSUL QRİDİ VƏ DESKTOP SIRALAMA */}
                    <main className="w-full md:w-3/4 transition-all duration-300">

                        {/* Desktop üçün yuxarı sağdakı Sıralama və Filtr mətni */}
                        <div className="hidden md:flex justify-end items-center gap-6 mb-6 text-sm font-bold text-gray-700">
                            <SortProducts sortOption={sortOption} setSortOption={setSortOption} />
                        </div>

                        {currentProducts.length > 0 ? (
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 md:grid-cols-3">
                                {currentProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <h2 className="text-2xl font-bold mb-2">Məhsul tapılmadı</h2>
                            </div>
                        )}
                    </main>

                </div>
            </div>

            {/* MOBİL FİLTR MODALI */}
            <MobileFilter
                isOpen={mobileFilterOpen}
                onClose={() => setMobileFilterOpen(false)}
                sortOptionsList={sortOptionsList}
                sortOption={sortOption}
                setSortOption={setSortOption}
                hasSidebar={true}
                isGeneralSearch={true}
                categoriesList={categoriesList}
                selectedCategories={selectedCategories}
                handleCategoryCheckbox={handleCategoryCheckbox}
            />
        </div>
    );
}