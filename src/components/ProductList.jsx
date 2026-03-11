import { useState } from 'react';

const categories = [
  { id: 'dienthoai', name: 'Điện thoại', icon: 'https://cdn.tgdd.vn/content/category/dienthoai.png' },
  { id: 'laptop', name: 'Laptop', icon: 'https://cdn.tgdd.vn/content/category/laptop.png' },
  { id: 'apple', name: 'Apple', icon: 'https://cdn.tgdd.vn/content/category/apple-90x60.png' },
  { id: 'tablet', name: 'Tablet', icon: 'https://cdn.tgdd.vn/content/category/tablet.png' },
  { id: 'phukien', name: 'Phụ kiện', icon: 'https://cdn.tgdd.vn/content/category/phukien.png' },
  { id: 'dongho', name: 'Đồng hồ', icon: 'https://cdn.tgdd.vn/content/category/dongho.png' },
  { id: 'pc', name: 'PC, Máy in', icon: 'https://cdn.tgdd.vn/content/category/pc.png' },
  { id: 'sim', name: 'Sim, Thẻ', icon: 'https://cdn.tgdd.vn/content/category/sim.png' }
];

const allProducts = [
  {
    id: 311178,
    name: "Asus Vivobook Go 15 E1504FA R5 7520U (NJ776W)",
    price: 14190000,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/311178/asus-vivobook-go-15-e1504fa-r5-nj776w-140225-100949-251-600x600.jpg",
    specs: ["RAM 16 GB", "SSD 512 GB"],
    discount: null,
    gift: 2190000,
    rating: 4.9,
    sold: "27,8k",
    label: "Trả chậm 0% trả trước 0đ",
    discountCode: "NHẬP MÃ GIẢM 200K"
  },
  {
    id: 342679,
    name: "iPhone 17 Pro Max 256GB",
    price: 37990000,
    image: "https://cdn.tgdd.vn/Products/Images/42/342679/iphone-17-pro-max-cam-thumb-600x600.jpg",
    specs: ["Super Retina XDR", "6.9\""],
    discount: null,
    gift: null,
    rating: 4.9,
    sold: "166,4k",
    label: "Trả chậm 0%"
  },
  {
    id: 333790,
    name: "Kidcare Sight S1 47.5mm dây silicone",
    price: 2150000,
    image: "https://cdn.tgdd.vn/Products/Images/7077/333790/kidcare-sight-s1-xanhla-thumb-600x600.jpg",
    specs: [],
    discount: 2250000,
    gift: 50000,
    rating: 4.9,
    sold: "34,5k",
    label: "Trả chậm 0%"
  },
  {
    id: 345547,
    name: "Samsung Galaxy Tab A11 WiFi 8GB/128GB",
    price: 4090000,
    image: "https://cdn.tgdd.vn/Products/Images/522/345547/samsung-galaxy-tab-a11-wifi-8gb-128gb-xam-thumb-600x600.jpg",
    specs: ["TFT LCD", "8.7\""],
    discount: 4990000,
    gift: null,
    rating: 5,
    sold: "2,8k",
    label: "Trả chậm 0% trả trước 0đ"
  },
  {
    id: 339177,
    name: "OPPO Reno14 F 5G 12GB/256GB",
    price: 11090000,
    image: "https://cdn.tgdd.vn/Products/Images/42/339177/oppo-reno14-f-5g-pink-thumb-600x600.jpg",
    specs: ["Full HD+", "6.57\""],
    discount: 11290000,
    gift: 200000,
    rating: 4.9,
    sold: "100,6k",
    label: "Trả chậm 0% trả trước 0đ"
  },
  {
    id: 344767,
    name: "Apple Watch SE 3 GPS 40mm viền nhôm dây thể thao",
    price: 6390000,
    image: "https://cdn.tgdd.vn/Products/Images/7077/344767/apple-watch-se-3-gps-vien-nhom-day-the-thao-trang-tb-600x600.jpg",
    specs: [],
    discount: 6990000,
    gift: null,
    rating: 4.9,
    sold: "4,7k",
    label: "Trả chậm 0%"
  },
  {
    id: 344651,
    name: "OPPO A6 Pro 8GB/128GB",
    price: 8290000,
    image: "https://cdn.tgdd.vn/Products/Images/42/344651/oppo-a6-pro-4g-pink-thumbai-600x600.jpg",
    specs: ["Full HD+", "6.57\""],
    discount: null,
    gift: 200000,
    rating: 4.9,
    sold: "66,5k",
    label: "Trả chậm 0% trả trước 0đ"
  },
  {
    id: 343062,
    name: "Samsung Galaxy Tab S10 Lite WiFi 6GB/128GB",
    price: 8490000,
    image: "https://cdn.tgdd.vn/Products/Images/522/343062/samsung-galaxy-tab-s10-lite-wifi-6gb-128gb-bac-600x600.jpg",
    specs: ["TFT LCD", "10.9\""],
    discount: 8990000,
    gift: null,
    rating: 5,
    sold: "2,9k",
    label: "Trả chậm 0% trả trước 0đ"
  },
  {
    id: 316992,
    name: "imoo Z1 41mm dây TPU Xanh dương",
    price: 2290000,
    image: "https://cdn.tgdd.vn/2026/03/timerseo/316992.jpg",
    specs: [],
    discount: 2590000,
    gift: null,
    rating: 4.9,
    sold: "12k",
    label: "Trả chậm 0%",
    onlineLabel: "Online giá rẻ quá"
  },
  {
    id: 338324,
    name: "Asus Gaming Vivobook 16X K3605VC i5 13420H (RP364W)",
    price: 21190000,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/338324/asus-k3605vc-i5-rp364w-thumb-638839519987207839-600x600.jpg",
    specs: ["RAM 16 GB", "SSD 512 GB"],
    discount: 22090000,
    gift: 2190000,
    rating: 5,
    sold: "2,7k",
    label: "Trả chậm 0% trả trước 0đ",
    discountCode: "NHẬP MÃ GIẢM 200K"
  },
  {
    id: 325500,
    name: "Lenovo Ideapad Slim 3 15AMN8 R5 7520U (82XQ00J0VN)",
    price: 13990000,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/325500/lenovo-ideapad-slim-3-15amn8-r5-82xq00j0vn-thumb-638754862828598408-600x600.jpg",
    specs: ["RAM 16 GB", "SSD 512 GB"],
    discount: 15490000,
    gift: 2190000,
    rating: 4.9,
    sold: "8,8k",
    label: "Trả chậm 0% trả trước 0đ",
    discountCode: "NHẬP MÃ GIẢM 200K"
  },
  {
    id: 335308,
    name: "iPad A16 WiFi 128GB",
    price: 9490000,
    image: "https://cdn.tgdd.vn/Products/Images/522/335308/ipad-11-wifi-yellow-thumb-600x600.jpg",
    specs: ["Retina IPS LCD", "11\""],
    discount: 9790000,
    gift: 400000,
    rating: 4.9,
    sold: "33,3k",
    label: "Trả chậm 0%",
    onlineLabel: "Online giá rẻ quá"
  },
  {
    id: 343061,
    name: "Samsung Galaxy Tab S10 Lite 5G 6GB/128GB",
    price: 9490000,
    image: "https://cdn.tgdd.vn/Products/Images/522/343061/samsung-galaxy-tab-s10-lite-5g-6gb-128gb-xam-thumb-600x600.jpg",
    specs: ["TFT LCD", "10.9\""],
    discount: 10490000,
    gift: null,
    rating: 5,
    sold: "5,5k",
    label: "Trả chậm 0% trả trước 0đ"
  },
  {
    id: 336899,
    name: "Xiaomi Mi Band 10 viền nhôm dây TPU",
    price: 1090000,
    image: "https://cdn.tgdd.vn/Products/Images/7077/336899/mi-band-10-den-600x600.jpg",
    specs: [],
    discount: 1170000,
    gift: null,
    rating: 4.9,
    sold: "17,6k",
    label: null
  },
  {
    id: 334442,
    name: "Lenovo IdeaPad Slim 3 15IRH10 i5 13420H (83K1000HVN)",
    price: 18190000,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/334442/lenovo-ideapad-slim-3-15irh10-i5-83k1000hvn-638775478046964172-600x600.jpg",
    specs: ["RAM 16 GB", "SSD 512 GB"],
    discount: 18990000,
    gift: 2190000,
    rating: 4.9,
    sold: "7,2k",
    label: "Trả chậm 0% trả trước 0đ",
    discountCode: "NHẬP MÃ GIẢM 200K"
  },
  {
    id: 358003,
    name: "Kidcare Sight S25 44.5mm dây cao su",
    price: 1690000,
    image: "https://cdn.tgdd.vn/Products/Images/7077/358003/dong-ho-dinh-vi-tre-em-kidcare-sight-s25-den-thumb-600x600.jpg",
    specs: [],
    discount: 1790000,
    gift: 50000,
    rating: 4.9,
    sold: "9,8k",
    label: "Trả chậm 0%"
  },
  {
    id: 329149,
    name: "iPhone 16 Pro Max 256GB",
    price: 31590000,
    image: "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg",
    specs: ["Super Retina XDR", "6.9\""],
    discount: 33990000,
    gift: null,
    rating: 4.9,
    sold: "344,6k",
    label: "Trả chậm 0%"
  },
  {
    id: 342679,
    name: "iPhone 17 Pro Max 256GB",
    price: 37990000,
    image: "https://cdn.tgdd.vn/Products/Images/42/342679/iphone-17-pro-max-cam-thumb-600x600.jpg",
    specs: ["Super Retina XDR", "6.9\""],
    discount: null,
    gift: null,
    rating: 4.9,
    sold: "166,4k",
    label: "Trả chậm 0%"
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
    label: "Trả chậm 0% trả trước 0đ"
  },
  {
    id: 343061,
    name: "Samsung Galaxy Tab S10 Lite 5G 6GB/128GB",
    price: 9490000,
    image: "https://cdn.tgdd.vn/Products/Images/522/343061/samsung-galaxy-tab-s10-lite-5g-6gb-128gb-xam-thumb-600x600.jpg",
    specs: ["TFT LCD", "10.9\""],
    discount: 10490000,
    gift: null,
    rating: 5,
    sold: "5,5k",
    label: "Trả chậm 0% trả trước 0đ"
  },
  {
    id: 339206,
    name: "Xiaomi Redmi Pad 2 WiFi 8GB/256GB",
    price: 5980000,
    image: "https://cdn.tgdd.vn/Products/Images/522/339206/xiaomi-redmi-pad-2-gray-thumb-600x600.jpg",
    specs: ["IPS LCD", "11\""],
    discount: 6380000,
    gift: null,
    rating: 4.9,
    sold: "5,7k",
    label: "Trả chậm 0% trả trước 0đ"
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
    discountCode: "NHẬP MÃ GIẢM 200K"
  },
  {
    id: 337846,
    name: "OPPO A5x 4GB/64GB",
    price: 3630000,
    image: "https://cdn.tgdd.vn/Products/Images/42/337846/oppo-a5x-4gb-64gb-thumb-600x600.jpg",
    specs: ["HD+", "6.67\""],
    discount: null,
    gift: 200000,
    rating: 4.9,
    sold: "47,4k",
    label: "Trả chậm 0% trả trước 0đ"
  },
  {
    id: 334803,
    name: "Dell Inspiron 15 3530 i5 1334U (N5I5530W1)",
    price: 17490000,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/334803/dell-inspiron-15-3530-i5-n5i5530w1-thumb-638762534676491196-600x600.jpg",
    specs: ["RAM 16 GB", "SSD 512 GB"],
    discount: 19590000,
    gift: 100000,
    rating: 4.9,
    sold: "5,2k",
    label: "Trả chậm 0% trả trước 0đ",
    discountCode: "NHẬP MÃ GIẢM 200K"
  }
];

function ProductList() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('dienthoai');

  const filteredProducts = allProducts.filter(product => {
    if (activeCategory === 'dienthoai') return product.id.toString().startsWith('34') || product.id.toString().startsWith('33');
    if (activeCategory === 'laptop') return product.id.toString().startsWith('32') || product.id.toString().startsWith('33');
    if (activeCategory === 'apple') return product.name.includes('iPhone') || product.name.includes('iPad') || product.name.includes('MacBook') || product.name.includes('Apple');
    if (activeCategory === 'tablet') return product.id.toString().startsWith('52');
    if (activeCategory === 'dongho') return product.id.toString().startsWith('70') || product.id.toString().startsWith('33');
    return true;
  });

  return (
    <section className="product-list-section">
      <div className="container-custom">
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <img src={cat.icon} alt={cat.name} />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
        <ul className={`listproduct block-list col6 ${showAll ? 'show-all' : ''}`}>
          {filteredProducts.slice(0, showAll ? filteredProducts.length : 12).map((product) => (
            <li key={product.id} className="item">
              <a href={`/product/${product.id}`} className="main-contain">
                {product.label && (
                  <div className="item-label">
                    <span className="lb-tragop">{product.label}</span>
                  </div>
                )}
                <div className="item-img">
                  <img className="thumb lazyloaded" src={product.image} alt={product.name} />
                </div>
                {product.discountCode && (
                  <p className="result-label temp3">
                    <img width="20" height="20" className="lazyloaded" alt="label template" src="https://cdn.tgdd.vn/2020/10/content/icon3-50x50.png" />
                    <span>{product.discountCode}</span>
                  </p>
                )}
                {product.onlineLabel && (
                  <p className="item-txt-online"><i></i><span>{product.onlineLabel}</span></p>
                )}
                <h3>{product.name}</h3>
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
                  <p className="item-gift"> Quà <b>{product.gift.toLocaleString('vi-VN')}₫</b></p>
                )}
              </a>
              <div className="item-bottom">
                <a href="javascript:;" className="shiping" aria-label="shiping"></a>
              </div>
              <div className="rating_Compare has_quantity">
                <div className="vote-txt">
                  <i className="iconnewglobal-vote"></i>
                  <b>{product.rating}</b>
                </div>
                <span>• Đã bán {product.sold}</span>
              </div>
            </li>
          ))}
        </ul>
        
        {!showAll && filteredProducts.length > 12 && (
          <button className="see-more-btn" onClick={() => setShowAll(true)}>
            <span>Xem thêm {filteredProducts.length - 12} sản phẩm</span>
          </button>
        )}
        
        {showAll && (
          <button className="see-more-btn" onClick={() => setShowAll(false)}>
            <span>Thu gọn</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default ProductList;
