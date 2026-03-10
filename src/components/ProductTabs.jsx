import { useState } from 'react';
import ProductCard from './ProductCard';

const tabs = [
  { id: 'flashsale', label: 'Flash Sale', icon: '⚡' },
  { id: 'online', label: 'Online Only', icon: '📱' },
  { id: 'dienthoai', label: 'Điện thoại', icon: '📞' },
  { id: 'apple', label: 'Apple', icon: '🍎' },
  { id: 'laptop', label: 'Laptop', icon: '💻' },
  { id: 'phukien', label: 'Phụ kiện', icon: '🎧' },
  { id: 'dongho', label: 'Đồng hồ', icon: '⌚' },
  { id: 'pc', label: 'PC, Màn hình', icon: '🖥️' },
];

const mockProducts = {
  flashsale: [
    { id: 1, name: 'Samsung Galaxy A17 5G 8GB/256GB', price: '6.240.000đ', oldPrice: '7.090.000đ', discount: 11, stock: { sold: 45, total: 100 }, badge: { type: 'sale' },     image: 'https://cdn.tgdd.vn/Products/Images/42/341690/galaxy-a17-5g-blue-thumbai-600x600.jpg'},
    { id: 2, name: 'iPhone 15 128GB', price: '19.990.000đ', oldPrice: '22.990.000đ', discount: 13, stock: { sold: 78, total: 100 }, badge: { type: 'sale' } , image: "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-den-thumb-600x600.jpg"},
    { id: 3, name: 'OPPO Reno12 F 5G', price: '8.990.000đ', oldPrice: '10.990.000đ', discount: 18, stock: { sold: 32, total: 100 }, badge: { type: 'sale' } },
    { id: 4, name: 'Xiaomi Redmi Note 13 Pro', price: '7.490.000đ', oldPrice: '8.990.000đ', discount: 17, stock: { sold: 56, total: 100 }, badge: { type: 'sale' } },
    { id: 5, name: 'vivo Y28s 5G', price: '5.490.000đ', oldPrice: '6.490.000đ', discount: 15, stock: { sold: 89, total: 100 }, badge: { type: 'sale' } },
  ],
  dienthoai: [
    { id: 6, name: 'iPhone 16 Pro Max 256GB', price: '34.990.000đ', oldPrice: '36.990.000đ', discount: 5, badge: { type: 'new' }, installment: true },
    { id: 7, name: 'Samsung Galaxy S24 Ultra', price: '29.990.000đ', oldPrice: '32.990.000đ', discount: 9, badge: { type: 'hot' }, installment: true },
    { id: 8, name: 'OPPO Find X8 Pro', price: '24.990.000đ', badge: { type: 'new' }, installment: true },
    { id: 9, name: 'vivo X100 Pro', price: '22.990.000đ', oldPrice: '25.990.000đ', discount: 12, installment: true },
    { id: 10, name: 'Xiaomi 14T Pro', price: '18.990.000đ', badge: { type: 'new' }, installment: true },
  ],
  apple: [
    { id: 11, name: 'iPhone 16 128GB', price: '22.990.000đ', badge: { type: 'new' }, installment: true },
    { id: 12, name: 'iPhone 15 Pro 128GB', price: '24.990.000đ', oldPrice: '27.990.000đ', discount: 11, installment: true },
    { id: 13, name: 'MacBook Air M3 13"', price: '27.990.000đ', badge: { type: 'new' }, installment: true },
    { id: 14, name: 'iPad Pro M4 11"', price: '24.990.000đ', oldPrice: '27.990.000đ', discount: 11, installment: true },
    { id: 15, name: 'Apple Watch Series 10', price: '9.990.000đ', badge: { type: 'new' }, installment: true },
  ],
  laptop: [
    { id: 16, name: 'MacBook Pro 14" M3 Pro', price: '45.990.000đ', badge: { type: 'new' }, installment: true },
    { id: 17, name: 'ASUS ROG Strix G16', price: '32.990.000đ', oldPrice: '39.990.000đ', discount: 18, installment: true },
    { id: 18, name: 'HP Victus 15', price: '18.990.000đ', oldPrice: '22.990.000đ', discount: 17, installment: true },
    { id: 19, name: 'Lenovo ThinkBook 16', price: '21.990.000đ', oldPrice: '25.990.000đ', discount: 15, installment: true },
    { id: 20, name: 'Dell Inspiron 15', price: '15.990.000đ', installment: true },
  ],
  phukien: [
    { id: 21, name: 'Tai nghe AirPods Pro 2', price: '5.990.000đ', oldPrice: '6.990.000đ', discount: 14, badge: { type: 'hot' } },
    { id: 22, name: 'Sạc dự phòng 20000mAh', price: '490.000đ', oldPrice: '690.000đ', discount: 29 },
    { id: 23, name: 'Cáp sạc Lightning', price: '290.000đ', oldPrice: '390.000đ', discount: 26 },
    { id: 24, name: 'Loa Bluetooth JBL Flip 6', price: '2.990.000đ', oldPrice: '3.490.000đ', discount: 14 },
    { id: 25, name: 'Chuột không dây Logitech', price: '350.000đ', oldPrice: '490.000đ', discount: 29 },
  ],
  dongho: [
    { id: 26, name: 'Apple Watch Series 10 45mm', price: '9.990.000đ', badge: { type: 'new' }, installment: true },
    { id: 27, name: 'Samsung Galaxy Watch 6', price: '6.990.000đ', oldPrice: '8.990.000đ', discount: 22, installment: true },
    { id: 28, name: 'Garmin Fenix 7', price: '14.990.000đ', installment: true },
    { id: 29, name: 'Huawei Watch GT 4', price: '5.990.000đ', oldPrice: '7.490.000đ', discount: 20 },
    { id: 30, name: 'Amazfit GTR 4', price: '3.990.000đ', oldPrice: '4.990.000đ', discount: 20 },
  ],
  pc: [
    { id: 31, name: 'Màn hình Samsung 27" 4K', price: '8.990.000đ', oldPrice: '10.990.000đ', discount: 18 },
    { id: 32, name: 'Màn hình LG 24" Full HD', price: '3.990.000đ', oldPrice: '4.990.000đ', discount: 20 },
    { id: 33, name: 'Máy in HP LaserJet', price: '4.990.000đ', oldPrice: '5.990.000đ', discount: 17 },
    { id: 34, name: 'PC Gaming RTX 4060', price: '19.990.000đ', badge: { type: 'hot' }, installment: true },
    { id: 35, name: 'PC Văn phòng Intel i5', price: '9.990.000đ', installment: true },
  ],
  online: [
    { id: 36, name: 'iPhone 14 Plus 128GB', price: '16.990.000đ', oldPrice: '19.990.000đ', discount: 15, badge: { type: 'sale' } },
    { id: 37, name: 'Samsung Galaxy Z Flip5', price: '17.990.000đ', oldPrice: '21.990.000đ', discount: 18, badge: { type: 'sale' } },
    { id: 38, name: 'OPPO Find N3 Flip', price: '19.990.000đ', oldPrice: '24.990.000đ', discount: 20, badge: { type: 'sale' } },
    { id: 39, name: 'vivo V29 5G', price: '9.990.000đ', oldPrice: '11.990.000đ', discount: 17, badge: { type: 'sale' } },
    { id: 40, name: 'POCO F6 Pro', price: '12.990.000đ', oldPrice: '14.990.000đ', discount: 13, badge: { type: 'sale' } },
  ],
};

function ProductTabs() {
  const [activeTab, setActiveTab] = useState('flashsale');
  const [countdown, setCountdown] = useState({ hours: 3, minutes: 59, seconds: 59 });

  return (
    <div className="product-section py-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-neutral-dark hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Flash Sale Countdown (chỉ hiện khi active flashsale) */}
      {activeTab === 'flashsale' && (
        <div className="bg-[#FFF6E3] rounded-lg p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span className="font-bold text-secondary">Flash Sale</span>
            <span className="text-sm text-gray-custom">Kết thúc sau:</span>
          </div>
          <div className="flex gap-2">
            <span className="bg-secondary text-white px-3 py-1 rounded font-bold text-lg min-w-[40px] text-center">
              {String(countdown.hours).padStart(2, '0')}
            </span>
            <span className="text-secondary font-bold">:</span>
            <span className="bg-secondary text-white px-3 py-1 rounded font-bold text-lg min-w-[40px] text-center">
              {String(countdown.minutes).padStart(2, '0')}
            </span>
            <span className="text-secondary font-bold">:</span>
            <span className="bg-secondary text-white px-3 py-1 rounded font-bold text-lg min-w-[40px] text-center">
              {String(countdown.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {(mockProducts[activeTab] || []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View More */}
      <div className="mt-6 text-center">
        <a
          href="/"
          className="inline-block px-6 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
        >
          Xem tất cả {tabs.find(t => t.id === activeTab)?.label}
        </a>
      </div>
    </div>
  );
}

export default ProductTabs;
