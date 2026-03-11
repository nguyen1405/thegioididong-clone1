import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import HotPromotion from '../components/HotPromotion';
import WebOnly from '../components/WebOnly';
import ProductList from '../components/ProductList';
import MonopolyProduct from '../components/MonopolyProduct';

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
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
