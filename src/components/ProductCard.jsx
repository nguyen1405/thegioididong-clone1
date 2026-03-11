function ProductCard({ product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
  };

  const discountPercent = product.oldPrice 
    ? Math.round((1 - product.price / product.oldPrice) * 100) 
    : 0;

  return (
    <div className="item" data-id={product.id} data-pos={product.position}>
      <a href={product.url} className="remain_quantity main-contain">
        <div className="item-img">
          <img src={product.image} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <strong className="price">
          {formatPrice(product.price)}
        </strong>
        {product.oldPrice && (
          <div className="price-discount">
            <span className="price-old">{formatPrice(product.oldPrice)}</span>
            <small className="discount-tag">-{discountPercent}%</small>
          </div>
        )}

        {product.soldQuantity !== undefined && (
          <div className="fs-contain">
            <span className="rq_count fscount">
              <span className="fs-icon" style={{ background: `linear-gradient(90deg, #F79009 ${product.soldQuantity}%, #e0e0e0 ${product.soldQuantity}%)` }}></span>
              <b>{product.soldLabel}</b>
            </span>
          </div>
        )}
      </a>
      <div className="btn-buy">
        <a href={product.url} className="see-detail">Xem chi tiết</a>
        <a href={product.buyUrl} className="buy-now">Mua ngay</a>
      </div>
    </div>
  );
}

export default ProductCard;
