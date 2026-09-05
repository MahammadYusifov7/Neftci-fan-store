import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";

export default function ShopSidebar({ sidebarItems, filterKey, categoryParam, subcategoryParam, typeParam }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <aside className="hidden md:block w-1/4 shrink-0">
            <div className="sticky top-24">
                <h3
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="font-bold text-base mb-4 flex items-center justify-between border-b border-black pb-2 cursor-pointer select-none"
                >
                    Kateqoriyalar
                    <FiChevronDown className={`transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : 'rotate-0'}`} />
                </h3>

                {isSidebarOpen && (
                    <ul className="flex flex-col gap-4 text-[14px] text-gray-600">
                        {sidebarItems.map((item, index) => {
                            const isActive = filterKey === 'subcategory'
                                ? subcategoryParam === item
                                : typeParam === item;

                            const linkTo = filterKey === 'subcategory'
                                ? `/products?category=${categoryParam}&subcategory=${item}`
                                : `/products?category=${categoryParam}&subcategory=${subcategoryParam}&type=${item}`;

                            return (
                                <li key={index}>
                                    <Link
                                        to={linkTo}
                                        className={`hover:text-black transition-colors block ${isActive ? 'font-bold text-black border-l-2 border-black pl-2' : ''}`}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </aside>
    );
}