import { Link, useSearchParams } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

export default function MobileFilter({ isOpen, onClose, sortOptionsList, hasSidebar, sidebarItems, filterKey, categoryParam, subcategoryParam, isGeneralSearch, categoriesList, selectedCategories, handleCategoryCheckbox
}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentSort = searchParams.get('sort') || sortOptionsList[0];

    const handleSortChange = (opt) => {
        setSearchParams((prev) => {
            prev.set('sort', opt);
            return prev;
        });
        onClose();
    };

    return (
        <div className={`fixed inset-0 z-50 bg-white overflow-y-auto md:hidden flex flex-col p-6 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-full pointer-events-none"}`}>

            <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h2 className="text-2xl font-black">Filtr</h2>
                <button onClick={onClose} className="text-3xl cursor-pointer">
                    <IoMdClose />
                </button>
            </div>

            <div className="mb-6 border-b pb-6">
                <h3 className="font-bold text-lg mb-4 flex justify-between items-center">
                    Sırala
                </h3>
                <div className="flex flex-col gap-3">
                    {sortOptionsList.map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 text-sm cursor-pointer">
                            <input
                                type="radio"
                                name="mobileSort"
                                checked={currentSort === opt}
                                onChange={() => handleSortChange(opt)}
                                className="w-4 h-4 accent-black"
                            />
                            {opt}
                        </label>
                    ))}
                </div>
            </div>

            {hasSidebar && (
                <div>
                    <h3 className="font-bold text-lg mb-4 flex justify-between items-center">
                        Kateqoriyalar
                    </h3>

                    {isGeneralSearch ? (
                        <div className="flex flex-col gap-4 text-base">
                            {categoriesList?.map((cat) => (
                                <label key={cat.value} className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories?.includes(cat.value)}
                                        onChange={() => handleCategoryCheckbox(cat.value)}
                                        className="w-5 h-5 accent-black rounded border-gray-300 cursor-pointer"
                                    />
                                    {cat.label}
                                </label>
                            ))}
                        </div>
                    ) : (
                        <ul className="flex flex-col gap-4 text-base">
                            {sidebarItems?.map((item, index) => {
                                const linkTo = filterKey === 'subcategory'
                                    ? `/products?category=${categoryParam}&subcategory=${item}`
                                    : `/products?category=${categoryParam}&subcategory=${subcategoryParam}&type=${item}`;

                                return (
                                    <li key={index}>
                                        <Link
                                            to={linkTo}
                                            onClick={onClose}
                                            className="hover:text-black text-gray-700 block py-1"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}