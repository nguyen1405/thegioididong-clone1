function BannerOffers() {
  const bannerItems = [
    {
      id: 110337,
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/85/0d/850d52d9d6dffd2db97c31f9fb74b971.png",
      alt: "Gian Hàng Ưu Đãi",
      href: "https://www.thegioididong.com/dtdd/samsung-galaxy-s26-ultra-12gb-256gb?rg=1"
    },
    {
      id: 109396,
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/cd/5e/cd5e139005ded311bd0710df4df64877.png",
      alt: "Gian hàng ưu đãi",
      href: "https://www.thegioididong.com/khuyen-mai-laptop-gaming"
    },
    {
      id: 110409,
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/e0/55/e055e2164c7b0442dd2b49dd9ff59974.png",
      alt: "Gian hàng ưu đãi",
      href: "https://www.thegioididong.com/dtdd/oppo-a6-8gb-128gb"
    },
    {
      id: 110433,
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/62/25/6225ae5c3a2dc155e5a75f03b1e8a356.png",
      alt: "Gian Hàng Ưu Đãi",
      href: "https://www.thegioididong.com/dtdd/motorola-edge-70-8gb-256gb"
    }
  ];

  return (
    <section className="banner-offers">
      <div className="container-custom">
        <div className="box-banner-title">Gian Hàng Ưu Đãi</div>
        <div className="box-banner-offers banner-listing">
          {bannerItems.map((item) => (
            <div key={item.id} data-banner={item.id} className="banner-offers-item">
              <a aria-label="slide" data-cate="0" data-place="7808" href={item.href}>
                <img loading="lazy" src={item.image} alt={item.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BannerOffers;