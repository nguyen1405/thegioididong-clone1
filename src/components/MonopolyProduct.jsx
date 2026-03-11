import { useRef } from 'react';

const promotionProducts = [
  {
    id: 361951,
    name: "Samsung Galaxy S26 Ultra 5G 12GB/256GB",
    price: 32990000,
    image: "https://cdn.tgdd.vn/Products/Images/42/361951/samsung-galaxy-s26-ultra-12gb-256gb-den-thumb-600x600.jpg",
    specs: ["Quad HD+ (2K+)", "6.9\""],
    discount: 36990000,
    gift: 900000,
    rating: null,
    sold: null,
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: "Mẫu mới",
    discountCode: "Hotsale đến 31/03",
    isNew: true
  },
  {
    id: 360239,
    name: "OPPO Reno15 F 5G 12GB/256GB",
    price: 12990000,
    image: "https://cdn.tgdd.vn/Products/Images/42/360239/oppo-reno15f-5g-12gb-256gb-hong-thumb-600x600.jpg",
    specs: ["Full HD+", "6.57\""],
    discount: null,
    gift: 740000,
    rating: 4.9,
    sold: "36,2k",
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: null,
    discountCode: null,
    isNew: false
  },
  {
    id: 327098,
    name: "HP 15 fc0085AU R5 7430U (A6VV8PA)",
    price: 15490000,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327098/hp-15-fc0085au-r5-a6vv8pa-170225-110652-878-600x600.jpg",
    specs: ["RAM 16 GB", "SSD 512 GB"],
    discount: 15790000,
    gift: 2190000,
    rating: 4.9,
    sold: "19,7k",
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: null,
    discountCode: "NHẬP MÃ GIẢM 200K",
    isNew: false
  },
  {
    id: 360310,
    name: "Xiaomi Redmi Note 15 5G 6GB/128GB",
    price: 6990000,
    image: "https://cdn.tgdd.vn/Products/Images/42/360310/xiaomi-redmi-note-15-5g-thumb-600x600.jpg",
    specs: ["Full HD+", "6.77\""],
    discount: 7490000,
    gift: 300000,
    rating: 5,
    sold: "273",
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: null,
    discountCode: null,
    isNew: false
  },
  {
    id: 334227,
    name: "vivo Y29 8GB/256GB",
    price: 6660000,
    image: "https://cdn.tgdd.vn/Products/Images/42/334227/vivo-y29-nau-thumb-600x600.jpg",
    specs: ["HD+", "6.68\""],
    discount: 7160000,
    gift: null,
    rating: 4.9,
    sold: "20k",
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: null,
    discountCode: null,
    isNew: false
  },
  {
    id: 361703,
    name: "realme 16 5G 8GB/256GB",
    price: 11490000,
    image: "https://cdn.tgdd.vn/Products/Images/42/361703/realme-16-5g-8gb-256gb-trang-thumb-1-600x600.jpg",
    specs: ["Full HD+", "6.57\""],
    discount: null,
    gift: 1240000,
    rating: 5,
    sold: "1,5k",
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: null,
    discountCode: null,
    isNew: false
  },
  {
    id: 358687,
    name: "HONOR X9d 5G 8GB/256GB",
    price: 9990000,
    image: "https://cdn.tgdd.vn/Products/Images/42/358687/honor-x9d-5g-8gb-256gb-den-thumb-1-600x600.jpg",
    specs: ["6.79\""],
    discount: null,
    gift: 500000,
    rating: 5,
    sold: "830",
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: null,
    discountCode: null,
    isNew: false,
    giftText: "Giảm thêm"
  },
  {
    id: 362374,
    name: "Motorola Edge 70 8GB/256GB",
    price: 12490000,
    image: "https://cdn.tgdd.vn/Products/Images/42/362374/motorola-edge-70-8gb-256gb-xam-thumb-600x600.jpg",
    specs: ["1.5K", "6.67\""],
    discount: 12990000,
    gift: null,
    rating: null,
    sold: null,
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: "Mẫu mới",
    discountCode: "Hotsale đến 10/04",
    isNew: true
  },
  {
    id: 362024,
    name: "Dell Pro 14 Essential PV14250 Core 5 120U",
    price: 22190000,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/362024/dell-pro-14-essential-pv14250-core-5-120u-pv14250-120u-16512w-bl-thumb-639046727854987975-600x600.jpg",
    specs: ["RAM 16 GB", "SSD 512 GB"],
    discount: 22590000,
    gift: 100000,
    rating: 5,
    sold: "64",
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: "Mẫu mới",
    discountCode: "NHẬP MÃ GIẢM 200K",
    isNew: true
  },
  {
    id: 332069,
    name: "Xiaomi Redmi Watch 5 47.5 mm dây TPU",
    price: 2640000,
    image: "https://cdn.tgdd.vn/Products/Images/7077/332069/xiaomi-redmi-watch-5-bac-tb-1-600x600.jpg",
    specs: [],
    discount: 2940000,
    gift: null,
    rating: 4.9,
    sold: "36k",
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: null,
    discountCode: null,
    isNew: false
  },
  {
    id: 356828,
    name: "Loa Bluetooth Harman Kardon Aura Studio 5",
    price: 8490000,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/356828/loa-bluetooth-harman-kardon-aura-studio-5-thumb-638973289182305670-600x600.jpg",
    specs: [],
    discount: null,
    gift: null,
    rating: 5,
    sold: "142",
    label: "Trả chậm 0% trả trước 0đ",
    newLabel: null,
    discountCode: null,
    isNew: false
  },
  {
    id: 358742,
    name: "G-SHOCK 40.5 mm Nữ GMA-P2110-4ADR",
    price: 3995000,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/358742/casio-gma-p2110-4adr-nu-thumb-638981277816183093-600x600.jpg",
    specs: [],
    discount: 4994000,
    gift: null,
    rating: 5,
    sold: "13",
    label: "Trả chậm 0%",
    newLabel: null,
    discountCode: null,
    isNew: false
  }
];

function MonopolyProduct() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="monopoly-product-block">
      <div className="container-custom">
        <h3>Lễ Hội Trả Chậm</h3>
        <div className="monopoly-content">
          <div className="monopoly-banner-wrap">
            <a 
              data-cate="0" 
              data-place="8072" 
              href="https://www.thegioididong.com/chuong-trinh-tra-cham-ict"
              className="monopoly-banner"
            >
              <img 
                src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/f1/71/f171b5b04952fcb4baaec77268de377b.png" 
                alt="Lễ Hội Trả Chậm" 
              />
            </a>
          </div>
          
          <div className="monopoly-product-slider">
            <button className="monopoly-nav monopoly-nav--prev" onClick={() => scroll('left')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <ul className="listproduct" ref={scrollRef}>
              {promotionProducts.map((product) => (
                <li key={product.id} className="item">
                  <a href={`/product/${product.id}`} className="main-contain">
                    <div className="item-label">
                      {product.newLabel && <span className="ln-new">{product.newLabel}</span>}
                      {product.label && <span className="lb-tragop">{product.label}</span>}
                    </div>
                    <div className="item-img">
                      <img className="thumb lazyloaded" src={product.image} alt={product.name} />
                    </div>
                    {product.discountCode && (
                      <p className="result-label temp1">
                        <img width="20" height="20" className="lazyloaded" alt="label template" src="https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png" />
                        <span>{product.discountCode}</span>
                      </p>
                    )}
                    <h3>
                      {product.name}
                      {product.isNew && <span className="newModel">Mẫu mới</span>}
                    </h3>
                    {product.specs.length > 0 && (
                      <div className="item-compare gray-bg">
                        {product.specs.map((spec, idx) => (
                          <span key={idx}>{spec}</span>
                        ))}
                      </div>
                    )}
                    <strong className="price">{product.price.toLocaleString('vi-VN')}₫</strong>
                    {product.discount && (
                      <div className="box-p">
                        <p className="price-old black">{product.discount.toLocaleString('vi-VN')}₫</p>
                        <span className="percent">-{Math.round((product.discount - product.price) / product.discount * 100)}%</span>
                      </div>
                    )}
                    {product.gift && (
                      <p className="item-gift">
                        {product.giftText ? `${product.giftText} ` : " Quà "}
                        <b>{product.gift.toLocaleString('vi-VN')}₫</b>
                      </p>
                    )}
                  </a>
                  <div className="item-bottom">
                    <a href="javascript:;" className="shiping" aria-label="shiping"></a>
                  </div>
                  {(product.rating || product.sold) && (
                    <div className="rating_Compare has_quantity">
                      {product.rating && (
                        <div className="vote-txt">
                          <i className="iconnewglobal-vote"></i>
                          <b>{product.rating}</b>
                        </div>
                      )}
                      {product.sold && <span>• Đã bán {product.sold}</span>}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button className="monopoly-nav monopoly-nav--next" onClick={() => scroll('right')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MonopolyProduct;
