import ProductCard from './ProductCard';

function BannerPromotion() {
  const products = [
    { id: 1, name: 'iPhone 16 Pro Max 256GB', price: '34.990.000đ', oldPrice: '36.990.000đ', discount: 5, badge: { type: 'new' }, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/335038/iphone-16-pro-max-black-thumbai-600x600.jpg' },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: '29.990.000đ', oldPrice: '32.990.000đ', discount: 9, badge: { type: 'hot' }, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/329705/galaxy-s24-ultra-grey-1-600x600.jpg' },
    { id: 3, name: 'MacBook Pro 14" M3', price: '45.990.000đ', badge: { type: 'new' }, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/316282/macbookpro14-2023-600x600.jpg' },
    { id: 4, name: 'iPad Pro M4 11"', price: '24.990.000đ', oldPrice: '27.990.000đ', discount: 11, badge: { type: 'new' }, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/328610/ipad-pro-11-2024-m4-black-thumbai-600x600.jpg' },
    { id: 5, name: 'Apple Watch Series 10', price: '9.990.000đ', badge: { type: 'new' }, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/335043/apple-watch-series-10-gps-46mm-vien-nhom-den-600x600.jpg' },
    { id: 6, name: 'OPPO Find X8 Pro', price: '24.990.000đ', badge: { type: 'new' }, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/334870/oppo-find-x8-pro-600x600.jpg' },
    { id: 7, name: 'vivo X100 Pro', price: '22.990.000đ', oldPrice: '25.990.000đ', discount: 12, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/321025/vivo-x100-pro-600x600.jpg' },
    { id: 8, name: 'Xiaomi 14T Pro', price: '18.990.000đ', badge: { type: 'new' }, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/332494/xiaomi-14t-pro-600x600.jpg' },
    { id: 9, name: 'Samsung Galaxy Z Fold6', price: '41.990.000đ', oldPrice: '44.990.000đ', discount: 7, badge: { type: 'hot' }, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/329703/galaxy-z-fold6-white-600x600.jpg' },
    { id: 10, name: 'iPhone 16 128GB', price: '22.990.000đ', badge: { type: 'new' }, installment: true, image: 'https://cdn.tgdd.vn/Products/Images/42/335039/iphone-16-white-thumbai-600x600.jpg' },
  ];

  return (
    <div className="promotion-banner py-4">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white text-xl font-bold">Lễ hội trả chậm</h2>
            <p className="text-white/80 text-sm">Trả góp 0% lãi suất - Đồng hành cùng bạn</p>
          </div>
          <a href="/" className="text-white text-sm font-medium hover:underline">
            Xem tất cả →
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BannerPromotion;
