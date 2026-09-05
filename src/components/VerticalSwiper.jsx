import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function VerticalSwiper({ images, setThumbsSwiper }) {
    if (!images || images.length === 0) return null;

    return (
        <Swiper
            onSwiper={setThumbsSwiper}
            direction={'vertical'}
            navigation={true}
            slidesPerView={4}
            spaceBetween={10}
            modules={[Navigation]}
            style={{
                "--swiper-navigation-color": "#000",
                "--swiper-navigation-size": "14px",
            }}
            className="w-full h-full"
        >
            {images.map((img, index) => (
                <SwiperSlide
                    key={index}
                    className="cursor-pointer border border-transparent hover:border-black transition-all p-1"
                >
                    <img
                        src={img}
                        alt={`Kiçik şəkil ${index + 1}`}
                        className="w-full h-full object-contain mix-blend-multiply"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}