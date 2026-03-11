import { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/Fl/8e/8e5eac6ed5e63f5dcb5893f55cafc93b.png",
    alt: "Khuyến mãi",
    href: "/"
  },
  {
    id: 2,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/70/c8/70c8bad73e7ef21fd85569fbf0eae4b0.png",
    alt: "Mua online giá re",
    href: "/mua-online-gia-re"
  },
  {
    id: 3,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/43/cf/43cfb4c5ae23de6fbf9a8bfbd5bd177e.png",
    alt: "Có AI - Thông Minh Hơn",
    href: "/khuyen-mai-soc-smartphone-cao-cap"
  },
  {
    id: 4,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/f1/71/f171b5b04952fcb4baaec77268de377b.png",
    alt: "Lễ Hội Trả Chậm",
    href: "/chuong-trinh-tra-cham-ict"
  }
];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="big-banner">
      <div className="container-custom">
        <div className="banner-slider">
          <div className="banner-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {banners.map((banner) => (
              <div key={banner.id} className="banner-slide">
                <a href={banner.href}>
                  <img src={banner.image} alt={banner.alt} />
                </a>
              </div>
            ))}
          </div>
          
          <button className="banner-arrow banner-prev" onClick={goToPrev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          
          <button className="banner-arrow banner-next" onClick={goToNext} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          
          <div className="banner-dots">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`banner-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
