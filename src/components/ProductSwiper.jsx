import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { BiX, BiZoomIn } from 'react-icons/bi';

export default function ProductSwiper({ images = [], productName = "Məhsul", thumbsSwiper }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeImage, setActiveImage] = useState('');

    if (!images || images.length === 0) return null;

    const handleImageClick = (img) => {
        setActiveImage(img);
        setIsOpen(true);
    };

    return (
        <>
            <div className="w-full relative group">
                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={images.length > 1}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[Navigation, Pagination, Thumbs]}
                    style={{
                        "--swiper-navigation-color": "#000",
                        "--swiper-pagination-color": "#000",
                        "--swiper-navigation-size": "22px"
                    }}
                    className="w-full h-[380px] sm:h-[450px] md:h-[500px]"
                >
                    {images.map((img, index) => (
                        <SwiperSlide 
                            key={index} 
                            className="flex justify-center items-center cursor-zoom-in relative group/slide"
                            onClick={() => handleImageClick(img)}
                        >
                            <img
                                src={img}
                                alt={`${productName} - Şəkil ${index + 1}`}
                                className="w-full h-full object-contain max-h-[450px] mix-blend-multiply p-4"
                            />
                            <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover/slide:opacity-100 transition-opacity">
                                <BiZoomIn className="text-xl text-black" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* FULLSCREEN MODAL (Keçid effektləri ilə) */}
            <div 
                className={`fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Bağlamaq düyməsi */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-white text-4xl hover:opacity-70 transition-opacity cursor-pointer z-50"
                >
                    <BiX />
                </button>

                {/* Böyüdülmüş şəkil (Yüngül scale effekti ilə açılır) */}
                <div className={`relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center transition-transform duration-300 ease-in-out ${
                    isOpen ? 'scale-100' : 'scale-95'
                }`}>
                    <img 
                        src={activeImage} 
                        alt={productName} 
                        className="max-w-full max-h-[85vh] object-contain"
                    />
                </div>
            </div>
        </>
    );
}