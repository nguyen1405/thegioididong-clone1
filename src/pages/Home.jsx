import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import BannerPromotion from '../components/BannerPromotion';
import VendorSection from '../components/VendorSection';
// import CategoryList from '../components/CategoryList';
import ProductTabs from '../components/ProductTabs';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <BannerSlider />
        {/* <CategoryList /> */}
        
        {/* Product Tabs - Flash Sale + Danh mục */}
        <ProductTabs />
        
        {/* Lễ hội trả chậm */}
        <BannerPromotion />
        
        {/* Gian hàng ưu đãi */}
        <VendorSection />
        
        {/* Các danh sách sản phẩm khác */}
        <ProductList title="Điện thoại nổi bật" />
        <ProductList title="Laptop khuyến mãi" />
        <ProductList title="Phụ kiện" />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
