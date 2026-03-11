import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import HotPromotion from '../components/HotPromotion';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      <main>
        <Banner />
        <HotPromotion />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
