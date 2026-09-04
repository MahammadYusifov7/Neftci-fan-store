import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { BiX, BiChevronLeft, BiChevronRight, BiSearch } from 'react-icons/bi';

export default function ViewModal({ isOpen, onClose, product }) {
    const { addToCart } = useContext(CartContext);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [customName, setCustomName] = useState('');
    const [customNumber, setCustomNumber] = useState('');
    const [added, setAdded] = useState(false);

    useEffect(() => {
        if (product) {
            setSize(product.sizes && product.sizes.length > 0 ? product.sizes[0] : '');
            setQuantity(1);
            setCustomName('');
            setCustomNumber('');
            setCurrentImageIndex(0);
            setAdded(false);
        }
    }, [product, isOpen]);

    if (!isOpen || !product) return null;

    const isForma = product.title?.toLowerCase().includes('forma') &&
        !product.title?.toLowerCase().includes('şort') &&
        !product.subcategory?.toLowerCase().includes('şort');
    const hasDiscount = product.discountPercent && product.discountPercent > 0;
    const discountedPrice = hasDiscount
        ? product.price - (product.price * product.discountPercent) / 100
        : product.price;

    const handleAddToCart = () => {
        addToCart(product, size, quantity, customName, customNumber);
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
            onClose();
        }, 2000);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm transition-opacity">
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative animate-fade-in shadow-2xl">

                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 bg-black text-white w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-800 transition-colors z-10 cursor-pointer"
                >
                    <BiX />
                </button>

                {/* SOL TƏRƏF: Şəkil Slayderi */}
                <div className="w-full md:w-1/2 relative bg-[#f8f8f8] min-h-[300px] flex items-center justify-center p-8 group">
                    <img
                        key={currentImageIndex}
                        src={product.images[currentImageIndex]}
                        alt={product.title}
                        className="w-full h-auto max-h-[400px] object-contain mix-blend-multiply transition-opacity duration-300 ease-in-out animate-[fadeIn_0.3s_forwards]"
                    />


                    {product.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-black hover:scale-110 transition-transform">
                                <BiChevronLeft />
                            </button>
                            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-black hover:scale-110 transition-transform">
                                <BiChevronRight />
                            </button>


                        </>
                    )}
                </div>

                {/* SAĞ TƏRƏF: Məlumatlar */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-[26px] font-normal text-black mb-4 leading-tight pr-6">
                        {product.title}
                    </h2>

                    <div className="mb-6 flex items-center gap-3">
                        {hasDiscount ? (
                            <>
                                <span className="text-xl font-black text-red-600">AZN {discountedPrice.toFixed(2)}</span>
                                <span className="text-base font-bold text-gray-400 line-through">AZN {product.price.toFixed(2)}</span>
                            </>
                        ) : (
                            <span className="text-xl font-black text-black">AZN {product.price.toFixed(2)}</span>
                        )}
                    </div>

                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mb-6">
                            <label className="block text-sm font-black text-black mb-3">Ölçü:</label>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((s, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSize(s)}
                                        className={`px-4 py-2 border rounded-full text-xs font-bold transition-all cursor-pointer ${size === s
                                            ? 'border-black text-black ring-1 ring-black'
                                            : 'border-gray-300 text-gray-500 hover:border-gray-400'
                                            }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mb-6">
                        <label className="block text-sm font-black text-black mb-2">Ədəd:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-20 border border-gray-400 p-3 outline-none focus:border-black text-center text-sm font-bold"
                        />
                    </div>

                    {isForma && (
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Ad (+ AZN 6.00)</label>
                                <input
                                    type="text"
                                    placeholder="Ad"
                                    value={customName}
                                    onChange={(e) => setCustomName(e.target.value)}
                                    className="w-full border border-gray-300 p-3 text-sm outline-none focus:border-black"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Nömrə (+ AZN 5.00)</label>
                                <input
                                    type="text"
                                    placeholder="Nömrə"
                                    value={customNumber}
                                    onChange={(e) => setCustomNumber(e.target.value)}
                                    className="w-full border border-gray-300 p-3 text-sm outline-none focus:border-black"
                                />
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handleAddToCart}
                        className={`w-full font-bold py-4 text-sm transition-colors cursor-pointer ${added ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-gray-800'
                            }`}
                    >
                        {added ? 'Səbətə əlavə olundu ✔' : 'Səbətə əlavə et'}
                    </button>
                </div>
            </div>
        </div>
    );
}