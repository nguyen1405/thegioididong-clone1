import ProductCard from './ProductCard';

function ProductList({ title = "Sản phẩm nổi bật" }) {
  const products = [
    { id: 1, name: 'iPhone 15 Pro Max', price: '34.990.000đ', oldPrice: '39.990.000đ', discount: 10 },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: '29.990.000đ', oldPrice: '32.990.000đ', discount: 15 },
    { id: 3, name: 'MacBook Pro M3', price: '45.990.000đ', oldPrice: '49.990.000đ', discount: 8 },
    { id: 4, name: 'iPad Pro M2', price: '24.990.000đ', oldPrice: '27.990.000đ', discount: 12 },
  ];

  return (
    <div className="product-list py-8">
      <h2 className="text-2xl font-bold mb-6 text-neutral-dark">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
