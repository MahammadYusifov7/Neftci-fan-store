import { Link } from 'react-router-dom';
import AnnouncementBar from '../components/Animation';
import HomeBanner from '../components/HomeBanner';
import ProductCard from '../components/ProductCard';
import { AllProducts } from '../data/products';
import image1 from '../../public/assets/img/slider/image1.webp'

export default function Home() {
    const evFormasi = AllProducts.find(p => p.id === 6)
    const seferFormasi = AllProducts.find(p => p.id === 5)
    const alternativForma = AllProducts.find(p => p.id === 4)
    const outlet = AllProducts.find(p => p.category === "outlet")
    const neftcixgunah = AllProducts.filter(p => p.subcategory === "Neftçi x Gunah")


    const featuredProducts = [evFormasi, seferFormasi, alternativForma]

    const images = [
        { id: 1, src: "/assets/img/slider/slider1.webp", link: `/product/${alternativForma?.slug}` },
        { id: 2, src: "/assets/img/slider/slider6.webp", link: `/products?category=${outlet?.category}` }
    ]

    return (
        <div className="w-full bg-white">

            <HomeBanner />

            <AnnouncementBar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                <div className="flex justify-center md:justify-between items-end mb-8">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black text-center md:text-left w-full">
                        2026/27 Mövsümü Formalarımız
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>

            <AnnouncementBar />

            <div className='pb-5'>
                <Link to={images[0].link} className="block w-full overflow-hidden group">
                    <img
                        src={images[0].src}
                        alt="Alternativ Forma"
                        className="w-full h-auto object-cover transform transition-transform duration-700"
                    />
                </Link>
            </div>

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {neftcixgunah.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>

            <AnnouncementBar />

            <div>
                <Link to={images[1].link} className="block w-full overflow-hidden group">
                    <img
                        src={images[1].src}
                        alt="Outlet məhsullar"
                        className="w-full h-auto object-cover transform transition-transform duration-700"
                    />
                </Link>
            </div>

            <AnnouncementBar />

            <div className='w-full'>
                <iframe className='w-full aspect-video object-cover' src="https://www.youtube.com/embed/IOisu7TrLo0?&si=UfEbDLiHnpuBWqq-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <AnnouncementBar />

            <div>
                <img src={image1} className='w-full h-auto object-cover' alt="" />
            </div>

            <AnnouncementBar />


        </div>
    );
}