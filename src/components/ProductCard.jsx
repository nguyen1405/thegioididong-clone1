function ProductCard({ product }) {
  const { 
    name = 'Sản phẩm', 
    price = 'Liên hệ', 
    oldPrice = null, 
    discount = null,
    image = null,
    rating = null,
    reviews = null,
    installment = false,
    badge = null,
    stock = null
  } = product || {};

  return (
    <div className="product-item group">
      <a href="/" className="block bg-white border border-gray-100 rounded-lg p-4 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
        {/* Badge */}
        {badge && (
          <div className="mb-2">
            {badge.type === 'sale' && (
              <span className="bg-secondary text-white text-xs font-medium px-2 py-0.5 rounded">
                Giảm {discount}%
              </span>
            )}
            {badge.type === 'new' && (
              <span className="bg-primary text-white text-xs font-medium px-2 py-0.5 rounded">
                Mới
              </span>
            )}
            {badge.type === 'hot' && (
              <span className="bg-accent text-neutral-dark text-xs font-medium px-2 py-0.5 rounded">
                Hot
              </span>
            )}
          </div>
        )}

        {/* Image */}
        <div className="relative mb-3">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-48 object-contain"
            />
          ) : (
            <div className="w-full h-48 bg-neutral-light rounded-md flex items-center justify-center">
              <span className="text-gray-custom text-sm">Hình ảnh sản phẩm</span>
            </div>
          )}
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-neutral-dark text-sm mb-2 line-clamp-2 h-10">
          {name}
        </h3>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star} 
                  className={`text-xs ${star <= rating ? 'text-accent' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-custom text-xs">({reviews})</span>
          </div>
        )}

        {/* Price */}
        <div className="mb-2">
          <strong className="text-lg font-bold text-secondary block">
            {price}
          </strong>
          {oldPrice && (
            <div className="flex items-center gap-2">
              <span className="text-gray-custom text-sm line-through">
                {oldPrice}
              </span>
              {discount && (
                <span className="text-xs text-primary font-medium">
                  -{discount}%
                </span>
              )}
            </div>
          )}
        </div>

        {/* Installment */}
        {installment && (
          <p className="text-xs text-gray-custom mb-2">
            Trả góp 0%
          </p>
        )}

        {/* Stock Progress */}
        {stock && (
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-custom">Còn {stock.sold}/{stock.total}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                style={{ width: `${(stock.sold / stock.total) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </a>

      {/* Buy Button */}
      <div className="mt-2">
        <a 
          href="/"
          className="block w-full bg-primary text-white text-center py-2 rounded-lg font-medium text-sm hover:bg-primary-dark transition-colors"
        >
          Mua ngay
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
