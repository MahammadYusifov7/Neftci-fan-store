import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Öz Footer komponentinin yolunu düzgün qeyd et
import Home from './pages/Home';
import Shop from './pages/Shop';
import Search from './pages/Search';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingReturns from './pages/ShippingReturns';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import { WishlistProvider } from './context/WishlistContext';

export default function App() {
  return (
    <>
      <WishlistProvider>

        <div className='flex flex-col min-h-screen'>

          <ScrollToTop />
          <Header />

          <div className='grow pt-20'>
            <Routes>
              {/* Ana Səhifə */}
              <Route path="/" element={<Home />} />

              <Route path="/products" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetails />} />
              <Route path="/wishlist" element={<Wishlist />} />

              <Route path="/search" element={<Search />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/shipping-returns" element={<ShippingReturns />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>

          <Footer />
          
        </div>
      </WishlistProvider>
    </>
  );
}