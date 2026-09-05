import { useState, useContext, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { AllProducts } from '../data/products';
import ProductSwiper from "../components/ProductSwiper";
import VerticalSwiper from "../components/VerticalSwiper";
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import CartDrawer from '../components/CartDrawer';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';

function ProductDetails() {
    const { slug } = useParams();
    const product = AllProducts.find(p => p.slug === slug || p.id.toString() === slug);

    // Bütün Hook-lar şərtsiz şəkildə ən yuxarıda çağırılmalıdır
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // Əgər product yoxdursa, state-ləri boş saxlayırıq (error verməməsi üçün)
    const [size, setSize] = useState(product?.sizes ? product.sizes[0] : '');
    const [quantity, setQuantity] = useState(1);
    const [customName, setCustomName] = useState('');
    const [customNumber, setCustomNumber] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { wishlist, toggleWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        if (product) {
            document.title = `${product.title} - Neftçi Official Store`;
        }
        return () => {
            document.title = 'Neftçi Official Store - Rəsmi Mağaza';
        };
    }, [product]);

    // Bütün Hook-lar icra olunduqdan sonra məhsulun varlığını yoxlayırıq
    if (!product) {
        return <Navigate to="/404" replace />;
    }

    const isWishlisted = wishlist.some(item => item.id === product.id);
    const isForma = product.title?.toLowerCase().includes('forma') &&
        !product.title?.toLowerCase().includes('şort') &&
        !product.subcategory?.toLowerCase().includes('şort');

    const hasDiscount = product.discountPercent && product.discountPercent > 0;
    const discountedPrice = hasDiscount
        ? product.price - (product.price * product.discountPercent) / 100
        : product.price;

    const handleWishlistClick = () => {
        toggleWishlist(product);
    };

    const handleAddToCart = () => {
        addToCart(product, size, quantity, customName, customNumber);
        setIsCartOpen(true);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                {/* SOL SÜTUN */}
                <div className="flex flex-col w-full">

                    {/* BREADCRUMB */}
                    <div className="text-[13px] text-gray-500 mb-6 capitalize flex items-center gap-2">
                        <Link to={`/products?category=${product.category}`} className="hover:text-black transition-colors">
                            {product.category}
                        </Link>
                        <span className="text-gray-400 font-light">›</span>
                        <span className="text-black font-semibold">{product.title}</span>
                    </div>

                    {/* ŞƏKİLLƏR HİSSƏSİ (VerticalSwiper və ProductSwiper) */}
                    <div className="flex flex-col md:flex-row gap-4 h-[380px] sm:h-[450px] md:h-[500px] w-full">

                        {/* KİÇİK ŞƏKİLLƏR (VerticalSwiper) */}
                        <div className="hidden md:block w-24 shrink-0 h-full relative">
                            <VerticalSwiper
                                images={product.images}
                                setThumbsSwiper={setThumbsSwiper}
                            />
                        </div>

                        {/* BÖYÜK ŞƏKİL (ProductSwiper) */}
                        <div className="w-full min-w-0 h-full overflow-hidden relative">
                            <ProductSwiper
                                images={product.images}
                                productName={product.title}
                                thumbsSwiper={thumbsSwiper}
                            />
                        </div>

                    </div>
                </div>

                {/* SAĞ SÜTUN (Məlumatlar, Form və Açıqlama) */}
                <div className="flex flex-col md:pt-0">
                    <h1 className="text-2xl md:text-[28px] font-normal text-black mb-2 leading-tight">
                        {product.title}
                    </h1>
                    {/* QİYMƏT HİSSƏSİ */}
                    <div className="flex items-center gap-3 mb-8">
                        {hasDiscount ? (
                            <>
                                <span className="text-[22px] font-black text-red-600">
                                    AZN {discountedPrice.toFixed(2)}
                                </span>
                                <span className="text-[18px] font-bold text-gray-400 line-through">
                                    AZN {product.price.toFixed(2)}
                                </span>
                                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                    %{product.discountPercent} Endirim
                                </span>
                            </>
                        ) : (
                            <span className="text-[22px] font-black text-black">
                                AZN {product.price.toFixed(2)}
                            </span>
                        )}
                    </div>

                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mb-6">
                            <label className="block text-[13px] font-bold text-black mb-2">Ölçü:</label>
                            <div className="relative">
                                <select
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    className="w-full border border-gray-400 p-3.5 appearance-none outline-none focus:border-black cursor-pointer bg-white text-sm font-bold uppercase"
                                >
                                    {product.sizes.map((sizeOption, index) => (
                                        <option key={index} value={sizeOption}>
                                            {sizeOption}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ƏDƏD SEÇİMİ */}
                    <div className="mb-6">
                        <label className="block text-[13px] font-bold text-black mb-2">Ədəd:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-24 border border-gray-400 p-3.5 outline-none focus:border-black text-sm"
                        />
                    </div>

                    {/* YALNIZ FORMALAR ÜÇÜN: AD VƏ NÖMRƏ XANALARI */}
                    {isForma && (
                        <>
                            <div className="mb-6">
                                <label className="block text-[13px] font-bold text-black mb-2">Ad (+ AZN 6.00)</label>
                                <input
                                    type="text"
                                    placeholder="Ad"
                                    value={customName}
                                    onChange={(e) => setCustomName(e.target.value)}
                                    className="w-full border border-gray-400 p-3.5 outline-none focus:border-black placeholder-gray-400 text-sm"
                                />
                            </div>
                            <div className="mb-8">
                                <label className="block text-[13px] font-bold text-black mb-2">Nömrə (+ AZN 5.00)</label>
                                <input
                                    type="number"
                                    min={1}
                                    max={99}
                                    placeholder="Nömrə"
                                    value={customNumber}
                                    onChange={(e) => setCustomNumber(e.target.value)}
                                    className="w-full border border-gray-400 p-3.5 outline-none focus:border-black placeholder-gray-400 text-sm"
                                />
                            </div>
                        </>
                    )}

                    {/* SƏBƏTƏ AT VƏ WİSHLİST DÜYMƏLƏRİ */}
                    <div className="flex items-center gap-4 mb-10 mt-2">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-black text-white font-bold py-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer"
                        >
                            Səbətə əlavə et
                        </button>

                        <button
                            onClick={handleWishlistClick}
                            className="w-14 h-14 border border-black flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0 cursor-pointer"
                        >
                            {isWishlisted ? (
                                <BiSolidHeart className="text-2xl text-red-600" />
                            ) : (
                                <BiHeart className="text-2xl text-black" />
                            )}
                        </button>
                    </div>

                    {product.description && (
                        <div className="text-[15px] text-black leading-relaxed border-t border-gray-200 pt-6 flex flex-col gap-4">
                            {product.description.split('\n\n').map((paragraph, index) => (
                                paragraph.trim() !== '' && (
                                    <p key={index} className="leading-relaxed">
                                        {paragraph}
                                    </p>
                                )
                            ))}
                        </div>
                    )}
                </div>

            </div>

            {/* Səbət Drawer Paneli */}
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
}

export default ProductDetails;