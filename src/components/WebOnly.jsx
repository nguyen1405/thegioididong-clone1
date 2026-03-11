const webOnlyItems = [
  {
    id: 1,
    image: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/3b/32/3b324369446604e2db060cc4b6e460e8.gif',
    description: 'Ưu Đãi Mở Bán!',
    url: 'https://www.thegioididong.com/khuyen-mai-campaign'
  },
  {
    id: 2,
    image: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/dd/d0/ddd0e3f4f115cc55463f447c58e4ee65.png',
    description: 'Trạm Sắc Màu Bảo Hành 2 Năm',
    url: 'https://www.thegioididong.com/khuyen-mai-micropack'
  },
  {
    id: 3,
    image: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/bd/6e/bd6e80a4b237e125d19a12c457b1a274.png',
    description: 'Bật nhạc cực đã Ưu đãi 40%+',
    url: 'https://www.thegioididong.com/khuyen-mai-earfun'
  },
  {
    id: 4,
    image: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/74/11/74118ae453ca5a55ae9f815a616d4980.png',
    description: 'Chạm là khác Khám phá Dekey',
    url: 'https://www.thegioididong.com/khuyen-mai-dekey'
  },
  {
    id: 5,
    image: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/a1/7b/a17b1dc9313192f9f70535dd17d258d6.png',
    description: 'Phụ kiện chuẩn gu Mua ngay!',
    url: 'https://www.thegioididong.com/khuyen-mai-tucano-idmix'
  },
  {
    id: 6,
    image: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/d7/d6/d7d643e840cad128787dadc04b050251.png',
    description: 'Chuẩn công nghệ Giảm tới 50%+',
    url: 'https://www.thegioididong.com/khuyen-mai-aukey'
  },
  {
    id: 7,
    image: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/2d/2e/2d2ea1b0e5a8217305f6e58b30497d74.png',
    description: 'Chiến Game Đỉnh  Săn Deal Hời',
    url: 'https://www.thegioididong.com/khuyen-mai-corsair'
  }
];

function WebOnly() {
  return (
    <section className="web-only">
      <div className="container-custom">
        <h2 className="web-only__title">Mua Online - Hàng chuẩn, giá mê</h2>
        <div className="web-only__list">
          {webOnlyItems.map((item) => (
            <div key={item.id} className="web-only__item">
              <a href={item.url} className="web-only__image">
                <img 
                  className="web-only__product-image" 
                  src={item.image} 
                  alt={item.description}
                />
              </a>
              <div className="web-only__description">
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebOnly;
