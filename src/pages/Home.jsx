import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import HotPromotion from '../components/HotPromotion';
import WebOnly from '../components/WebOnly';
import ProductList from '../components/ProductList';
import MonopolyProduct from '../components/MonopolyProduct';
import Bannerweek from '../components/Bannerweek';
import BannerOffers from '../components/BannerOffers';
import NewsList from '../components/NewsList';
import SearchTrend from '../components/SearchTrend';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      <main>
        <Banner />
        <div className="container-custom">
          <HotPromotion />
          <WebOnly />
          <ProductList />
          <MonopolyProduct />
          <Bannerweek />
          <BannerOffers />
          <NewsList />
          <SearchTrend />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
