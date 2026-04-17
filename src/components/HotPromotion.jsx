import { useState } from 'react';
import ProductsTabs from './ProductsTabs';
import FlashsaleTimeline from './FlashsaleTimeline';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 335955,
    name: 'Samsung Galaxy S25 Edge 5G 12GB/512GB',
    price: 22490000,
    oldPrice: 32890000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/335955/samsung-galaxy-s25-edge-sliver-thumb-600x600.jpg',
    url: '/dtdd/samsung-galaxy-s25-edge-5g-512gb',
    buyUrl: '/cart/them-vao-gio-hang?productId=335955',
    soldQuantity: 70,
    soldLabel: 'Còn 7/10 suất',
    position: 1
  },
  {
    id: 343066,
    name: 'realme 15 5G 12GB/256GB',
    price: 9990000,
    oldPrice: 11490000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/343066/realme-15-5g-thumb-600x600.jpg',
    url: '/dtdd/realme-15-5g-12gb-256gb',
    buyUrl: '/cart/them-vao-gio-hang?productId=343066',
    soldQuantity: 70,
    soldLabel: 'Còn 7/10 suất',
    position: 2
  },
  {
    id: 332934,
    name: 'OPPO Reno13 5G 12GB/256GB',
    price: 12200000,
    oldPrice: 15700000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/332934/oppo-reno13-blue-thumbnew-600x600.jpg',
    url: '/dtdd/oppo-reno13-5g',
    buyUrl: '/cart/them-vao-gio-hang?productId=332934',
    soldQuantity: 60,
    soldLabel: 'Còn 6/10 suất',
    position: 3
  },
  {
    id: 358093,
    name: 'MacBook Pro 14 inch Nano M5 16GB/512GB',
    price: 42190000,
    oldPrice: 45690000,
    image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/358093/macbook-pro-14-inch-nano-m5-16gb-512gb-den-638962956060321611-600x600.jpg',
    url: '/laptop/macbook-pro-14-inch-nano-m5-16gb-512gb',
    buyUrl: '/cart/them-vao-gio-hang?productId=358093',
    soldQuantity: 90,
    soldLabel: 'Còn 9/10 suất',
    position: 4
  },
  {
    id: 331204,
    name: 'Samsung Galaxy A16 5G 8GB/256GB',
    price: 5700000,
    oldPrice: 6870000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/331204/samsung-galaxy-a16-5g-gold-thumb-600x600.jpg',
    url: '/dtdd/samsung-galaxy-a16-5g',
    buyUrl: '/cart/them-vao-gio-hang?productId=331204',
    soldQuantity: 35,
    soldLabel: 'Còn 7/20 suất',
    position: 5
  },
  {
    id: 220733,
    name: 'ELIO 28 mm Nữ ES017-C2',
    price: 643000,
    oldPrice: 1290000,
    image: 'https://cdn.tgdd.vn/2024/09/timerseo/220733.jpg',
    url: '/dong-ho-deo-tay/elio-es017-c2-nu',
    buyUrl: '/cart/them-vao-gio-hang?productId=220733',
    soldQuantity: 100,
    soldLabel: 'Còn 5/5 suất',
    position: 6
  },
  {
    id: 325479,
    name: 'Asus Vivobook S 16 OLED S5606MA Ultra 5 125H',
    price: 24990000,
    oldPrice: 27490000,
    image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/325479/asus-vivobook-s-16-oled-s5606ma-ultra-5-mx050w-638763553510092279-600x600.jpg',
    url: '/laptop/asus-vivobook-s-16-oled-s5606ma-ultra-5-mx050w',
    buyUrl: '/cart/them-vao-gio-hang?productId=325479',
    soldQuantity: 100,
    soldLabel: 'Còn 5/5 suất',
    position: 7
  },
  {
    id: 328640,
    name: 'Máy in nhiệt HPRT FT800 Wifi',
    price: 1590000,
    oldPrice: 2290000,
    image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5693/328640/hprt-ft800-bluetooth-trang-thumb-new-638628790532210323-600x600.jpg',
    url: '/may-in/hprt-ft800-bluetooth-trang',
    buyUrl: '/cart/them-vao-gio-hang?productId=328640',
    soldQuantity: 60,
    soldLabel: 'Còn 3/5 suất',
    position: 8
  }
];

function HotPromotion() {
  const [activeTab, setActiveTab] = useState('flashsale');
  const [activeTimeline, setActiveTimeline] = useState('happening');

  return (
    <div className="hot-promotion homeproducts-block">
      <div className="container-custom">
        <h3 style={{ fontWeight: '700' }}>Khuyến mãi online</h3>
        
        <ProductsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="block-products relative has-flashsale">
          <div className="preloader">
            <div className="loaderweb"></div>
          </div>
          
          <div className="box-common__content" data-is-flashsale-tab="true" data-groupid="-1">
            <div className="flashsale-block theme-fs" id="flashsale">
              <div className="stage-two">
                <div className="load"></div>
              </div>
              
              <FlashsaleTimeline 
                activeTimeline={activeTimeline} 
                onTimelineChange={setActiveTimeline} 
              />
              
              <div className="box-scroll" style={{ textAlign: 'center' }}>
                <div className="listproduct slider-flashsale">
                  {sampleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                
                <a className="readmore-btn fl-btn" href="/flashsale">
                  <span>Xem thêm sản phẩm</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotPromotion;
