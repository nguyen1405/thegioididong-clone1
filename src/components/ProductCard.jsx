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
          {product.oldPrice && (
            <span className="price-and-discount">
              <label className="price-old black">{formatPrice(product.oldPrice)}</label>
              <small>-{discountPercent}%</small>
            </span>
          )}
        </strong>

        {product.soldQuantity !== undefined && (
          <div className="fs-contain">
            <img 
              width="15" 
              height="15" 
              src="//cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/homev2/flash-sale.png" 
              alt="icon flashsale" 
            />
            <span className="rq_count fscount">
              <i style={{ width: `${product.soldQuantity}%` }} className="fs-iconfire"></i>
              <b>{product.soldLabel}</b>
            </span>
          </div>
        )}
      </a>
      <div className="btn-buy">
        <a href={product.url} className="see-detail hide">Xem chi tiết</a>
        <a href={product.buyUrl} className="buy-now">Mua ngay</a>
      </div>
    </div>
  );
}

export default ProductCard;
