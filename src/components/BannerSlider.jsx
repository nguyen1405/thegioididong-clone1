import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  {
    id: 1,
    image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/25/banner-laptop-1200x260-202411250325475678.jpg',
    alt: 'Laptop khuyến mãi',
    bgColor: '#e8f5e9'
  },
  {
    id: 2,
    image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/12/2/banner-samsung-a16-1200x260-202412020949444662.jpg',
    alt: 'Samsung Galaxy A16',
    bgColor: '#fff3e0'
  },
  {
    id: 3,
    image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/28/banner-iphone-16-1200x260-202411280314402762.jpg',
    alt: 'iPhone 16',
    bgColor: '#fce4ec'
  },
  {
    id: 4,
    image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/12/2/banner-phu-kien-1200x260-202412020237326981.jpg',
    alt: 'Phụ kiện giảm sốc',
    bgColor: '#e3f2fd'
  }
];

const sideBanners = [
  {
    id: 1,
    image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/12/1/banner-mb-300x500-202412010249325325.jpg',
    alt: 'Khuyến mãi bên trái'
  },
  {
    id: 2,
    image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/12/1/banner-mb-phai-300x500-202412010305035305.jpg',
    alt: 'Khuyến mãi bên phải'
  }
];

function BannerSlider() {
  const [showSideBanners, setShowSideBanners] = useState(true);

  return (
    <div className="banner-section relative">
      {/* Main Banner Slider */}
      <div className="container mx-auto px-4">
        <div className="flex gap-4">
          {/* Main Slider */}
          <div className="flex-1">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="rounded-lg overflow-hidden"
            >
              {banners.map((banner) => (
                <SwiperSlide key={banner.id}>
                  <a href="/" className="block">
                    <img 
                      src={banner.image} 
                      alt={banner.alt}
                      className="w-full h-[260px] object-cover"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Side Banners (Desktop) */}
          {showSideBanners && (
            <div className="hidden lg:flex flex-col gap-4 w-[300px] flex-shrink-0">
              {sideBanners.map((banner) => (
                <a key={banner.id} href="/" className="block">
                  <img 
                    src={banner.image} 
                    alt={banner.alt}
                    className="w-full h-[125px] object-cover rounded-lg"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BannerSlider;
