import { useState, useContext } from 'react';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';
import ViewModal from './ViewModal';

export default function ProductCard({ product }) {
    const { title, slug, price, discountPercent, images, subcategory } = product;

    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
    }
    // Qlobal Context-dən məlumatları və funksiyanı çəkirik
    const { wishlist, toggleWishlist } = useContext(WishlistContext);

    // Məhsulun qlobal wishlist massivində olub-olmadığını yoxlayırıq
    const isWishlisted = wishlist.some((item) => item.id === product.id);

    const hasDiscount = discountPercent > 0;
    const discountedPrice = hasDiscount
        ? (price - (price * discountPercent) / 100).toFixed(2)
        : price.toFixed(2);

    const hasSecondImage = images.length > 1;

    return (
        <div className="group flex flex-col h-full bg-white relative">

            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product); // Lokal state əvəzinə qlobal funksiyanı çağırırıq
                }}
                className="absolute top-3 left-3 z-20 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center group/wishlist"
            >
                {isWishlisted ? (
                    <BiSolidHeart className="text-lg text-red-500 transition-colors duration-300" />
                ) : (
                    <BiHeart className="text-lg text-gray-400 group-hover/wishlist:text-red-500 transition-colors duration-300" />
                )}
            </button>

            {/* 1. ENDİRİM BİRKASI */}
            {hasDiscount && (
                <span className="absolute top-3 right-0 bg-[#ec1301] text-white text-lg font-bold px-2 py-1 z-10">
                    %{discountPercent}
                </span>
            )}

            {/* 2. ŞƏKİL HİSSƏSİ */}
            <Link to={`/product/${slug}`} className="relative w-full aspect-[4/5] bg-[#f8f8f8] overflow-hidden block">
                <img
                    src={images[0]}
                    alt={title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out 
            ${hasSecondImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`}
                />

                {hasSecondImage && (
                    <img
                        src={images[1]}
                        alt={`${title} arxadan`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    />
                )}
            </Link>

            {/* 3. MƏLUMAT HİSSƏSİ */}
            <div className="pt-4 flex flex-col grow">
                {subcategory && (
                    <span className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-widest mb-1.5 block">
                        {subcategory}
                    </span>
                )}

                <Link to={`/product/${slug}`} className="hover:text-gray-600 transition-colors">
                    <h3 className="text-sm text-black leading-snug line-clamp-2 mb-2">
                        {title}
                    </h3>
                </Link>

                <div className="mt-auto flex items-end gap-3">
                    <span className="font-bold text-[15px] text-black">
                        AZN {discountedPrice}
                    </span>
                    {hasDiscount && (
                        <span className="text-xs text-gray-400 line-through font-bold mb-0.5">
                            AZN {price.toFixed(2)}
                        </span>
                    )}
                </div>

                <div className='mt-auto flex justify-center'>
                    <button onClick={handleOpenModal} className='border bg-white text-black font-bold text-sm px-4 py-2 cursor-pointer m-2 hover:text-white hover:bg-black duration-300 transition-all'>Səbətə əlavə et</button>
                </div>
            </div>

            <ViewModal isOpen={modalOpen} onClose={() => setModalOpen(false)} product={product} />
        </div>
    );
}