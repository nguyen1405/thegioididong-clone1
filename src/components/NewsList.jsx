const newsItems = [
  {
    id: 1,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/News/Thumb/1589866/moto-signanture-17639072022475603833.jpg",
    title: "Trên tay motorola Signature: Flagship với thiết kế mỏng nhẹ, chip Snapdragon 8 Gen 5 mạnh mẽ",
    url: "/tin-tuc/tren-tay-motorola-signature-1589866"
  },
  {
    id: 2,
    image: "https://cdnv2.tgdd.vn/mwg-static/common/Common/ios-26-4-beta-4-co-gi-moi-thumb.jpg",
    title: "iOS 26.4 Beta 4 có gì mới? Có trên iPhone nào? Cách cập nhật",
    url: "/hoi-dap/ios-26-4-beta-4-co-gi-moi-1590738"
  },
  {
    id: 3,
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/News/Thumb/1587878/moto-edge-70-t639027737761255379.jpg",
    title: "Trên tay motorola Edge 70: Cận cao cấp với độ mỏng 6 mm, Snapdragon 7 Gen 4 và pin 5.000 mAh",
    url: "/tin-tuc/tren-tay-motorola-edge-70-1587878"
  },
  {
    id: 4,
    image: "https://cdnv2.tgdd.vn/mwg-static/common/Common/so-sanh-ipad-air-m4-va-ipad-pro-m4-thumb.jpg",
    title: "So sánh iPad Air M4 và iPad Pro M4: Chip M4 đối đầu, chọn Air hay Pro?",
    url: "/hoi-dap/so-sanh-ipad-air-m4-va-ipad-pro-m4-1590629"
  }
];

function NewsList() {
  return (
    <section className="home-news">
      <div className="container-custom">
        <h2 className="title-news">Mạng xã hội thegioididong.com</h2>
        <div className="box-listing-news">
          <div className="listing-news">
            {newsItems.map((item) => (
              <div key={item.id} className="item-news">
                <a href={item.url}>
                  <img className="lazyloaded" loading="lazy" src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="show-more-news">
          <a href="/tin-tuc"><strong>Xem thêm</strong></a>
        </div>
      </div>
    </section>
  );
}

export default NewsList;