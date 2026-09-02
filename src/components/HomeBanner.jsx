import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { AllProducts } from '../data/products';

const alternativForma = AllProducts.find(p => p.id === 4);
const seferFormasi = AllProducts.find(p => p.id === 5);
const evFormasi = AllProducts.find(p => p.id === 6);
const aksesuar = AllProducts.find(p => p.category === "aksesuarlar")
const neftcixgunah = AllProducts.find(p => p.subcategory === "Neftçi x Gunah")
const outlet = AllProducts.find(p => p.category === "outlet")
const moda = AllProducts.find(p => p.category === "moda")

const bannerSlides = [
    { id: 1, src: "/assets/img/slider/slider1.webp", link: `/product/${alternativForma?.slug}` },
    { id: 2, src: "/assets/img/slider/slider2.webp", link: `/product/${seferFormasi?.slug}` },
    { id: 3, src: "/assets/img/slider/slider3.webp", link: `/product/${evFormasi?.slug}` },

    { id: 4, src: "/assets/img/slider/slider4.webp", link: `/products?category=${aksesuar?.category}` },
    { id: 5, src: "/assets/img/slider/slider5.webp", link: `/products?subcategory=${neftcixgunah?.subcategory}` },
    { id: 6, src: "/assets/img/slider/slider6.webp", link: `/products?category=${outlet?.category}` },
    { id: 7, src: "/assets/img/slider/slider7.webp", link: `/products?category=${moda?.category}` },
    { id: 8, src: "/assets/img/slider/slider8.webp", alt: "Çatdırılma" },
    { id: 9, src: "/assets/img/slider/slider9.webp", link: `https://mws.com/category/neftci?utm_source=instagram&utm_medium=long-term&utm_campaign=club-neftci-pfk&utm_content=clubcomms&tab=live` }
];

export default function HomeBanner() {
    return (
        <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px]">
            <Swiper
                style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }}
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full mySwiper"
            >
                {bannerSlides.map((slide) => (
                    <SwiperSlide key={slide.id} className="w-full h-full cursor-pointer">

                        {slide.link && slide.link.startsWith('http') ? (
                            <a
                                href={slide.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full block cursor-pointer"
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.alt || `Banner ${slide.id}`}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                />
                            </a>

                        ) : slide.link ? (
                            <Link to={slide.link} className="w-full h-full block cursor-pointer">
                                <img
                                    src={slide.src}
                                    alt={slide.alt || `Banner ${slide.id}`}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                />
                            </Link>

                        ) : (
                            <div className="w-full h-full block">
                                <img
                                    src={slide.src}
                                    alt={slide.alt || `Banner ${slide.id}`}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        )}

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}