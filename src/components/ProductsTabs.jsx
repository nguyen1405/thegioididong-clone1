const productsTabs = [
  {
    id: 'flashsale',
    isFlashSale: true,
    groupId: -1,
    img: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/8a/5c/8a5c223deb851bcc8f713215485e4159.png',
    alt: 'FlashSale'
  },
  {
    id: 'flashsaleCross',
    groupId: 10962,
    img: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/3f/16/3f1607215d3087712b9749c27ca9c5f2.png',
    alt: 'Flashsale'
  },
  {
    id: 'onlineOnly',
    groupId: 9788,
    img: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/7a/e0/7ae0723d3d978fd4c8a2c77f3bf4bd3a.png',
    alt: 'Online Only'
  },
  {
    id: 'dienthoai',
    groupId: 9776,
    label: 'Điện Thoại'
  },
  {
    id: 'apple',
    groupId: 9845,
    label: 'Apple'
  },
  {
    id: 'laptop',
    groupId: 9777,
    label: 'Laptop'
  },
  {
    id: 'phukien',
    groupId: 9778,
    label: 'Phụ Kiện'
  },
  {
    id: 'dongho',
    groupId: 9846,
    label: 'Đồng Hồ'
  },
  {
    id: 'pc',
    groupId: 10528,
    label: 'PC, Máy in'
  }
];

function ProductsTabs({ activeTab, onTabChange }) {
  return (
    <ul className="products-tabs col9">
      {productsTabs.map((tab, index) => (
        <li
          key={tab.id}
          className={`fs-new-item ${activeTab === tab.id ? 'active-tab' : ''}`}
          data-groupid={tab.groupId}
          data-id={tab.id}
          data-is-flashsale-tab={tab.isFlashSale ? 'true' : 'false'}
          onClick={() => onTabChange(tab.id)}
        >
          <a href="javascript:;" className="fs-new-item-title">
            {tab.img ? (
              <img src={tab.img} alt={tab.alt} />
            ) : (
              <span className="allimg">{tab.label}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ProductsTabs;
