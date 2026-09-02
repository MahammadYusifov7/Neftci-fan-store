import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import ProductCard from '../components/ProductCard';
import { WishlistContext } from '../context/WishlistContext';

export default function Wishlist() {
    const { wishlist } = useContext(WishlistContext);

    return (
        <div className="w-full bg-white py-12 md:py-20 px-4 min-h-[60vh] flex flex-col">
            <div className="max-w-7xl mx-auto w-full grow flex flex-col">
                <h1 className="text-3xl md:text-4xl font-black mb-10 text-center ">Seçilmişlər</h1>

                {wishlist.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center gap-5 my-auto">
                        <div className="bg-gray-50 p-8 rounded-full text-gray-300 mb-2">
                            <BiHeart className="text-7xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-black">Siyahınız hazırda boşdur</h2>
                        <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-4">
                            Bəyəndiyiniz məhsulları ürək ikonuna klikləyərək seçilmişlərə əlavə edə və daha sonra asanlıqla tapa bilərsiniz.
                        </p>
                        <Link
                            to="/products"
                            className="bg-black text-white font-bold py-4 px-10 text-sm hover:bg-white hover:text-black hover:border transition-colors duration-300 cursor-pointer"
                        >
                            Alış-verişə başla
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 gap-y-10">
                        {wishlist.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}