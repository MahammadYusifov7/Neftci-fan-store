import { useState } from 'react';
import offstore from "/assets/img/offstore.webp";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { HiBars2 } from "react-icons/hi2";
import { FiChevronDown, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { BiHeart } from 'react-icons/bi';
import { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import CartDrawer from './CartDrawer';
import { CartContext } from '../context/CartContext';

const menuConfig = [
    {
        id: 1,
        title: "Formalar",
        category: "formalar",
        subcategories: [
            { label: "2026/27 Mövsümü Formaları", value: "2026/27 Mövsümü Forması" },
            { label: "Uşaq Formaları", value: "Uşaq Formaları" },
            { label: "Şortlar", value: "Şortlar" }
        ]
    },
    {
        id: 2,
        title: "Məşq Geyimləri",
        category: "məşq geyimləri",
        subcategories: []
    },
    {
        id: 3,
        title: "Moda",
        category: "moda",
        subcategories: [
            { label: "Kappa Kolleksiyası", value: "Kappa Kolleksiyası" },
            { label: "\"Əfsanə 9\" Limited Edition", value: "Əfsanə 9 Məhdud Kolleksiya" },
            { label: "Neftçi x Gunah", value: "Neftçi x Gunah" },
            { label: "T-Shirt & Polos", value: "T-Shirt - Polos" },
            { label: "Hoddies & Sweatshirts", value: "Hoddies - Sweatshirts" }
        ]
    },
    {
        id: 4,
        title: "Aksesuarlar",
        category: "aksesuarlar",
        subcategories: [
            {
                label: "Aksesuarlar",
                value: "Aksesuarlar",
                // 3-cü pillə (Teg/Növ)
                types: [
                    { label: "Şərf", value: "Şərf" },
                    { label: "Təqvim", value: "Təqvim" },
                    { label: "Speaker", value: "Speaker" }
                ]
            },
            {
                label: "Suvenirlər",
                value: "Suvenirlər",
                // 3-cü pillə (Teg/Növ)
                types: [
                    { label: "Avto-ətir", value: "Avto-ətir" },
                    { label: "Açarlıq", value: "Açarlıq" },
                    { label: "Fincanlar", value: "Fincan" },
                    { label: "Giftbox", value: "GiftBox" },
                    { label: "Pin", value: "Pin" },
                    { label: "Termofincan", value: "Termofincan" },
                    { label: "Termos", value: "Termos" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Outlet",
        category: "outlet",
        subcategories: []
    }
];

function Header() {
    const [openmenu, setOpenmenu] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const { wishlist } = useContext(WishlistContext);
    const { cart } = useContext(CartContext);

    const toggleMobileMenu = () => {
        setOpenmenu(prev => !prev);
        setActiveSubMenu(null);
    };

    const activeMenuObj = menuConfig.find(item => item.category === activeSubMenu);

    return (
        <>
            <nav className='flex items-center justify-between bg-white px-4 md:px-8 py-4 shadow-md fixed top-0 left-0 w-full z-50'>

                {/* SOL HİSSƏ: LOGO VƏ DESKTOP MENU */}
                <div className='flex items-center font-bold'>
                    <div className='w-36'>
                        <Link to="/" onClick={() => setOpenmenu(false)}>
                            <img src={offstore} className='w-full h-full' alt="Official Store Logo" />
                        </Link>
                    </div>

                    <ul className='hidden md:flex items-center gap-2 min-[800px]:gap-4 text-[13px] text-black font-bold'>
                        {menuConfig.map((item) => (
                            <li key={item.id} className='relative group py-2'>
                                <Link
                                    to={`/products?category=${item.category}`}
                                    className='flex items-center justify-center gap-1 hover:text-yellow-600 transition-all'
                                >
                                    <span>{item.title}</span>
                                    {item.subcategories.length > 0 && <FiChevronDown className='text-base stroke-2' />}
                                </Link>

                                {item.subcategories.length > 0 && (
                                    <div className='absolute top-full left-0 hidden group-hover:block w-60 bg-white shadow-xl border-0 z-50'>
                                        <ul className='p-2'>
                                            {item.subcategories.map((sub, index) => (
                                                // group/sub klası 3-cü pillənin açılması üçündür
                                                <li key={index} className='relative group/sub'>
                                                    <Link
                                                        to={`/products?category=${item.category}&subcategory=${sub.value}`}
                                                        className='flex items-center justify-between p-3 hover:bg-gray-200 duration-300'
                                                    >
                                                        <span>{sub.label}</span>
                                                        {sub.types && <FiChevronRight className='text-sm' />}
                                                    </Link>

                                                    {/* 3-CÜ PİLLƏ (Sağa açılan pəncərə) */}
                                                    {sub.types && (
                                                        <div className='absolute top-0 left-full hidden group-hover/sub:block w-48 bg-white shadow-xl border-0 z-50'>
                                                            <ul className='p-2'>
                                                                {sub.types.map((type, tIndex) => (
                                                                    <li key={tIndex}>
                                                                        <Link
                                                                            to={`/products?category=${item.category}&subcategory=${sub.value}&type=${type.value}`}
                                                                            className='block p-3 hover:bg-gray-200 duration-300 font-bold'
                                                                        >
                                                                            {type.label}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* SAĞ İKONLAR VƏ MOBİL BARS/X DÜYMƏSİ */}
                <div className='flex items-center gap-3 font-black text-2xl cursor-pointer z-50'>
                    <Link to="/search">
                        <PiMagnifyingGlassBold className='hover:opacity-70 transition-opacity' />
                    </Link>
                    <Link to="/login">
                        <FaRegUser className='hover:opacity-70 transition-opacity' />
                    </Link>
                    <div className='relative flex items-center'>
                        <SlBasket onClick={() => setIsCartOpen(true)} className='hover:opacity-70 transition-opacity' />
                        {cart.length > 0 && (
                                <span className='absolute -top-2.5 -right-3 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm'>
                                    {cart.length}
                                </span>
                            )}
                    </div>

                    <div className='relative flex items-center'>
                        <Link to="/wishlist" className='relative flex items-center group'>
                            <BiHeart className='group-hover:opacity-70 transition-opacity cursor-pointer text-2xl' />
                            {wishlist.length > 0 && (
                                <span className='absolute -top-2.5 -right-3 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm'>
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    <button onClick={toggleMobileMenu} className='md:hidden relative w-9 h-9 flex items-center justify-center cursor-pointer focus:outline-none'>
                        <HiBars2 className={`absolute text-3xl transition-all duration-300 ease-in-out ${openmenu ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
                        <div className={`absolute border border-black p-1 rounded-sm transition-all duration-300 ease-in-out ${openmenu ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}>
                            <IoMdClose className='text-xl' />
                        </div>
                    </button>
                </div>

                {/* MOBİL MENU OVERLAY */}
                <div className={`fixed top-18 left-0 w-full h-[calc(100vh-72px)] bg-white z-40 overflow-hidden transition-all duration-300 md:hidden ${openmenu ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                    <div className={`w-[200%] h-full flex transition-transform duration-300 ease-in-out ${activeSubMenu ? "-translate-x-1/2" : "translate-x-0"}`}>

                        {/* 1. ƏSAS MOBİL MENYU */}
                        <div className='w-1/2 h-full pt-8 px-8 overflow-y-auto pb-20'>
                            <ul className='flex flex-col gap-7 w-full max-w-xs mx-auto font-bold text-[15px] text-black'>
                                {menuConfig.map((item) => (
                                    <li key={item.id}>
                                        {item.subcategories.length > 0 ? (
                                            // Əgər alt menyusu varsa, sətri iki hissəyə bölürük: Başlıq (Link) və Ox (Düymə)
                                            <div className='flex items-center justify-between w-full'>
                                                <Link
                                                    to={`/products?category=${item.category}`}
                                                    onClick={toggleMobileMenu}
                                                    className='grow text-center pl-5 hover:text-yellow-600 transition-colors'
                                                >
                                                    {item.title}
                                                </Link>
                                                <button
                                                    onClick={() => setActiveSubMenu(item.category)}
                                                    className='p-2 cursor-pointer focus:outline-none'
                                                    aria-label="Alt menyunu aç"
                                                >
                                                    <FiChevronRight className='text-lg stroke-[2.5]' />
                                                </button>
                                            </div>
                                        ) : (
                                            <Link
                                                to={`/products?category=${item.category}`}
                                                onClick={toggleMobileMenu}
                                                className='block text-center w-full hover:text-yellow-600 transition-colors'
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 2. ALT MENYU (Və 3-cü pillə Akkordionları) */}
                        <div className='w-1/2 h-full pt-8 px-8 overflow-y-auto pb-20'>
                            <div className='w-full max-w-xs mx-auto flex flex-col gap-7'>
                                <button onClick={() => setActiveSubMenu(null)} className='flex items-center gap-3 font-bold text-base text-black cursor-pointer mb-2'>
                                    <FiChevronLeft className='text-xl stroke-3' />
                                    <span className='capitalize'>{activeMenuObj?.title}</span>
                                </button>

                                <ul className='flex flex-col gap-6 font-bold text-[15px] text-black'>
                                    {activeMenuObj?.subcategories.map((sub, index) => (
                                        <li key={index}>
                                            {/* Əgər 3-cü pillə (types) varsa, HTML <details> tagi ilə Akkordion yaradırıq */}
                                            {sub.types ? (
                                                <details className='group'>
                                                    <summary className='flex items-center justify-between w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden'>
                                                        <span>{sub.label}</span>
                                                        <FiChevronDown className='transition-transform group-open:-rotate-180' />
                                                    </summary>
                                                    <ul className='flex flex-col gap-4 mt-4 pl-4 border-l-2 border-gray-100 font-bold text-[14px]'>
                                                        <li>
                                                            <Link to={`/products?category=${activeMenuObj.category}&subcategory=${sub.value}`} onClick={toggleMobileMenu} className='text-gray-500 hover:text-black'>
                                                                Bütün {sub.label}
                                                            </Link>
                                                        </li>
                                                        {sub.types.map((type, tIndex) => (
                                                            <li key={tIndex}>
                                                                <Link to={`/products?category=${activeMenuObj.category}&subcategory=${sub.value}&type=${type.value}`} onClick={toggleMobileMenu} className='text-gray-500 hover:text-black'>
                                                                    {type.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </details>
                                            ) : (
                                                <Link to={`/products?category=${activeMenuObj.category}&subcategory=${sub.value}`} onClick={toggleMobileMenu} className='block text-left w-full'>
                                                    {sub.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}

export default Header;