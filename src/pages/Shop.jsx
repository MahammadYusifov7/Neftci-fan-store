import { useState } from 'react';
import { useSearchParams, Link, Navigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ShopSidebar from '../components/ShopSidebar';
import MobileFilter from '../components/MobileFilter';
import { Sorting, sortOptionsList } from '../utils/Sorting';
import { AllProducts } from '../data/products';
import SortProducts from '../components/SortProducts';

export default function Shop() {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get("category");
    const subcategoryParam = searchParams.get("subcategory");
    const typeParam = searchParams.get("type");

    const sortOption = searchParams.get("sort") || "Endirim dərəcəsi azalır";

    if (categoryParam || subcategoryParam || typeParam) {
        let isValid = true;

        if (categoryParam) {
            isValid = AllProducts.some(p => p.category === categoryParam);
        }
        if (isValid && subcategoryParam) {
            isValid = AllProducts.some(p => p.category === categoryParam && p.subcategory === subcategoryParam);
        }
        if (isValid && typeParam) {
            isValid = AllProducts.some(p => p.category === categoryParam && p.subcategory === subcategoryParam && p.type === typeParam);
        }

        if (!isValid) {
            return <Navigate to="/404" replace />;
        }
    }

    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const setSortOption = (newSort) => {
        setSearchParams((prev) => {
            prev.set("sort", newSort);
            return prev;
        });
    };

    let sidebarItems = [];
    let filterKey = "";

    if (categoryParam && subcategoryParam && typeParam) {
        sidebarItems = [];
    } else if (categoryParam && subcategoryParam) {
        const types = [...new Set(
            AllProducts
                .filter(p => p.category === categoryParam && p.subcategory === subcategoryParam)
                .map(p => p.type)
                .filter(Boolean)
        )];
        if (types.length > 0) {
            sidebarItems = types;
            filterKey = "type";
        }
    } else if (categoryParam) {
        const subcategories = [...new Set(
            AllProducts
                .filter(p => p.category === categoryParam)
                .map(p => p.subcategory)
                .filter(Boolean)
        )];
        sidebarItems = subcategories;
        filterKey = "subcategory";
    }

    const hasSidebar = sidebarItems.length > 0;

    let currentProducts = AllProducts;
    if (categoryParam) currentProducts = currentProducts.filter(p => p.category === categoryParam);
    if (subcategoryParam) currentProducts = currentProducts.filter(p => p.subcategory === subcategoryParam);
    if (typeParam) currentProducts = currentProducts.filter(p => p.type === typeParam);

    currentProducts = Sorting(currentProducts, sortOption);

    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2 capitalize flex items-center gap-2">
                        {categoryParam && (
                            <Link to={`/products?category=${categoryParam}`} className="hover:underline">
                                {categoryParam}
                            </Link>
                        )}
                        {subcategoryParam && (
                            <>
                                <span>{">"}</span>
                                <Link to={`/products?category=${categoryParam}&subcategory=${subcategoryParam}`} className="hover:underline">
                                    {subcategoryParam}
                                </Link>
                            </>
                        )}
                        {typeParam && (
                            <>
                                <span>{">"}</span>
                                <span className="text-black font-semibold">{typeParam}</span>
                            </>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                        <div>
                            <span className="text-xs text-gray-500">{currentProducts.length} Nəticə</span>
                            <h1 className="text-3xl font-normal text-black capitalize">
                                {typeParam || subcategoryParam || categoryParam || "Bütün Məhsullar"}
                            </h1>
                        </div>

                        {/* MOBİL VƏ DESKTOP ÜÇÜN BÜTÜN DÜYMƏLƏR BURADADIR */}
                        <div className="flex items-center gap-4 text-sm font-bold text-gray-700 w-full md:w-auto justify-between md:justify-end">

                            {/* MOBİL DÜYMƏSİ: Həmişə görünəcək */}
                            <button
                                onClick={() => setMobileFilterOpen(true)}
                                className="md:hidden flex items-center gap-2 bg-white border border-black px-4 py-2 text-xs uppercase text-black font-bold cursor-pointer"
                            >
                                {hasSidebar ? "Filtr " : "Sırala "}
                            </button>

                            {/* DESKTOP SIRALAMA DÜYMƏSİ */}
                            <div className="hidden md:block">
                                <SortProducts sortOption={sortOption} setSortOption={setSortOption} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">

                    {hasSidebar && (
                        <ShopSidebar
                            sidebarItems={sidebarItems}
                            filterKey={filterKey}
                            categoryParam={categoryParam}
                            subcategoryParam={subcategoryParam}
                            typeParam={typeParam}
                        />
                    )}

                    <MobileFilter
                        isOpen={mobileFilterOpen}
                        onClose={() => setMobileFilterOpen(false)}
                        sortOptionsList={sortOptionsList}
                        sortOption={sortOption}
                        setSortOption={setSortOption}
                        hasSidebar={hasSidebar}
                        sidebarItems={sidebarItems}
                        filterKey={filterKey}
                        categoryParam={categoryParam}
                        subcategoryParam={subcategoryParam}
                    />

                    <main className={`w-full transition-all duration-300 ${hasSidebar ? 'md:w-3/4' : ''}`}>
                        {currentProducts.length > 0 ? (
                            <div className={`grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 ${hasSidebar ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
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
        </div>
    );
}