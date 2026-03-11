import { useEffect, useState } from 'react';

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowMenu(true);
      } else if (currentScrollY > lastScrollY) {
        // scroll down
        setShowMenu(false);
      } else {
        // scroll up
        setShowMenu(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 1, name: 'Điện thoại', href: '/dtdd', icon: 'https://cdn.tgdd.vn/content/phonne-24x24.png', hasMega: false },
    { id: 2, name: 'Laptop', href: '/laptop', icon: 'https://cdn.tgdd.vn/content/laptop-24x24.png', hasMega: false },
    { 
      id: 3, name: 'Phụ kiện', href: '/phu-kien', icon: 'https://cdn.tgdd.vn/content/phu-kien-24x24.png', hasMega: true,
      megaMenu: [
        { title: 'Phụ kiện di động', items: [
          { name: 'Sạc dự phòng', href: '/sac-dtdd', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/99/61/9961578164909f8a9ee7678dc95feeb0.png' },
          { name: 'Sạc, cáp', href: '/sac-cap', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/6b/64/6b646ec5f1e9a726933ee31b86a32524.png' },
          { name: 'Ốp lượng điện thoại', href: '/op-lung-flipcover', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/34/02/3402dd9ba3457b84482572d10bcae84e.png' },
          { name: 'Miếng dán', href: '/mieng-dan-man-hinh', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/72/f4/72f4b3ee8f5c1b1a170d590b3a07256d.png' },
        ]},
        { title: 'Phụ kiện laptop, PC', items: [
          { name: 'Hub, cáp chuyển đổi', href: '/hub-chuyen-doi', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/e1/2d/e12deafa7615646e9cafc5bbd0667da8.png' },
          { name: 'Chuột máy tính', href: '/chuot-may-tinh', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/53/a6/53a6599a6fc414025b42c5435928008f.png' },
          { name: 'Bàn phím', href: '/ban-phim', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/7a/d3/7ad3598d5e291815bc6c7f98bb73d078.png' },
        ]},
        { title: 'Thiết bị âm thanh', items: [
          { name: 'Tai nghe Bluetooth', href: '/tai-nghe-bluetooth', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/7c/09/7c09cbc92ef23816aa7d857ba8e0e194.png' },
          { name: 'Tai nghe dây', href: '/tai-nghe-co-day', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/12/1c/121cd7cb1fc1750893b3f41436b12c85.png' },
          { name: 'Loa', href: '/loa-bluetooth', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/76/6b/766be9586a3a82491ba8106b7e558605.png' },
        ]},
        { title: 'Camera', items: [
          { name: 'Camera Giám Sát', href: '/camera-giam-sat', img: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Common/af/70/af70e11a54ceeda4d04c41298016f615.png' },
          { name: 'Camera hành trình', href: '/camera-hanh-trinh-hanh-dong', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/f4/2a/f42aa8a01e29d247b177a997c808c990.png' },
        ]},
        { title: 'Gaming', items: [
          { name: 'Chuột gaming', href: '/chuot-may-tinh-chuot-gaming', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/4d/c5/4dc5692050284aa3119430c8b77a1a41.png' },
          { name: 'Bàn phím gaming', href: '/ban-phim-gaming', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/7c/f2/7cf2df3939fd6d8966c1965cc781d02b.png' },
          { name: 'Tai nghe gaming', href: '/tai-nghe-gaming', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/25/71/2571e5bc85393230a9d8c793c0fb6ad3.png' },
        ]},
        { title: 'Thương hiệu', items: [
          { name: 'Apple', href: '/phu-kien/apple', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/6a/6a/6a6a116227ceaf2f407f5573f44069ec.png' },
          { name: 'Samsung', href: '/phu-kien/samsung', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/ea/1d/ea1d0470faaea58604610926a4f45fcb.png' },
        ]},
        { title: 'Phụ kiện khác', items: [
          { name: 'Máy chiếu', href: '/may-chieu', img: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Common/32/2f/322fcac70beaf1bb7c5925f0dc8663ac.png' },
          { name: 'Pin tiểu', href: '/pin', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/d9/89/d9895ecb4c3fe80fa6a5788548c0d40d.png' },
        ]},
      ]
    },
    { id: 4, name: 'Smartwatch', href: '/dong-ho-thong-minh', icon: 'https://cdn.tgdd.vn/content/smartwatch-24x24.png', hasMega: false },
    { id: 5, name: 'Đồng hồ', href: '/dong-ho', icon: 'https://cdn.tgdd.vn/content/watch-24x24.png', hasMega: false },
    { id: 6, name: 'Tablet', href: '/may-tinh-bang', icon: 'https://cdn.tgdd.vn/content/tablet-24x24.png', hasMega: false },
    { id: 7, name: 'Máy cũ, Thu cũ', href: '/may-doi-tra', icon: 'https://cdn.tgdd.vn/content/may-cu-24x24.png', hasMega: true,
      megaMenu: [{ title: 'Máy cũ, Thu cũ', items: [
        { name: 'Máy cũ giá tốt', href: '/may-doi-tra', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/47/1b/471b8073fdb15619b6c958e5316e7f61.png' },
        { name: 'Thu cũ đổi mới', href: '/thu-cu-doi-moi', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/4e/b2/4eb2cac00f6019e50875c3d1d4f74d6b.png' },
      ]}]
    },
    { id: 8, name: 'Màn hình, Máy in', href: '/pc-may-in', icon: 'https://cdn.tgdd.vn/content/PC-24x24.png', hasMega: true,
      megaMenu: [
        { title: 'PC, Màn hình', items: [
          { name: 'Máy tính để bàn', href: '/may-tinh-de-ban', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/5c/20/5c20902d35f326dc8947e3a6b2adc178.png' },
          { name: 'Màn hình máy tính', href: '/man-hinh-may-tinh', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/b6/76/b676088f8fa091112be65b0b4e8bb786.png' },
        ]},
        { title: 'Máy in, Mực in', items: [
          { name: 'Máy in', href: '/may-in', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/24/b3/24b303278d3d03de8b3fa3a31c2a1820.png' },
          { name: 'Mực in', href: '/muc-in', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/38/76/3876a43c46810299826ada7874b1cf6b.png' },
        ]}
      ]
    },
    { id: 9, name: 'Sim, Thẻ cào', href: '/sim-so-dep', icon: 'https://cdn.tgdd.vn/content/sim-24x24.png', hasMega: true,
      megaMenu: [{ title: 'Sim, Thẻ cào', items: [
        { name: 'Sim, thẻ cào', href: '/sim-so-dep', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/54/96/54965e9976059f689c8905bfa5696b61.png' },
        { name: 'eSim du lịch', href: '/phan-mem-esim-du-lich', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/5a/48/5a48d18da9b8282909939cfbd156ef1a.png' },
      ]}]
    },
    { id: 10, name: 'Dịch vụ tiện ích', href: '/tien-ich/thanh-toan-tra-gop', icon: 'https://cdn.tgdd.vn/content/tien-ich-24x24.png', hasMega: true,
      megaMenu: [
        { title: 'Thanh toán hóa đơn', items: [
          { name: 'Đóng tiền trả góp', href: '/tien-ich/thanh-toan-tra-gop', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/61/b6/61b6e80c07684c4846aeff658fdba88a.png' },
          { name: 'Đóng tiền điện', href: '/tien-ich/thanh-toan-tien-dien', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/8e/96/8e9685acf415892e991723bd885a7696.png' },
          { name: 'Đóng tiền nước', href: '/tien-ich/thanh-toan-tien-nuoc', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/43/fb/43fb3b248d0417ac1936c21ba9c03aef.png' },
        ]},
        { title: 'Tiện ích viễn thông', items: [
          { name: 'Mua gói data 3G, 4G', href: '/tien-ich/goi-cuoc-data', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/34/92/349219728cb261aa4355e65b8eb600f8.png' },
          { name: 'Nạp tiền trả trước', href: '/tien-ich/nap-tien-dien-thoai', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/f5/c7/f5c7e0f1d65e60f1b832eddcbc8dc2ad.png' },
          { name: 'Thẻ cào game', href: '/tien-ich/the-cao-game', img: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/b2/13/b2135863df0735405d466c06222b45ab.png' },
        ]}
      ]
    },
  ];

  return (
    <header className="header-wrapper">
      <header className="header v2024" data-sub="0">
        <div className="header__top">
          <div>
            {/* Logo */}
            <a href="/" className="header__logo" aria-label="logo">
              <img 
                src="https://cdn.tgdd.vn/content/Logo-TheGioiDiDong-09-09-2024.png" 
                alt="Thegioididong.com" 
                width="170" 
                height="40"
                className="logo-img"
              />
            </a>
            
            {/* Search */}
            <form action="/tim-kiem" className="header__search">
              <input 
                id="skw" 
                type="text" 
                className="input-search" 
                placeholder="Bạn tìm gì..." 
                name="key" 
                autoComplete="off" 
                maxLength="100"
              />
              <button type="submit" className="search-btn" aria-label="button suggest search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              <div id="search-result"></div>
            </form>
            
            {/* Profile - Login */}
            <div className="profile">
              <a href="/lich-su-mua-hang" className="name-order active">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Đăng nhập</span>
              </a>
            </div>
            
            {/* Cart */}
            <a href="/cart" className="header__cart menu-info" id="cart-box">
              <div className="box-cart">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <span className="cart-number">0</span>
              </div>
              <span className="cart-text">Giỏ hàng</span>
              <div className="view-cart">
                <span>Hiện chưa có sản phẩm</span>
              </div>
            </a>
            
            {/* Location */}
            <a href="javascript:;" className="header__address">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A896" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              
              <span className="current-location">Hồ Chí Minh</span>
            </a>
          </div>
        </div>

        {/* Main Menu - Yellow Bar */}
        <div
          className={`header__main ${showMenu ? 'visible' : 'hidden'}`}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div>
            <ul className="main-menu">
              {menuItems.map((item) => (
                <li 
                  key={item.id} 
                  className={item.hasMega ? 'has-list' : ''}
                  onMouseEnter={() => item.hasMega && setActiveMenu(item.id)}
                >
                  <a href={item.href}>
                    <i><img src={item.icon} alt={`icon ${item.name}`} width="24" height="24" /></i>
                    <span className={item.hasMega ? 'has-child' : ''}>{item.name}</span>
                  </a>

                  {item.hasMega && activeMenu === item.id && item.megaMenu && (
                    <div className="navmwg">
                      {item.megaMenu.map((col, idx) => (
                        <div key={idx} className="item-child">
                          <strong>{col.title}</strong>
                          {col.items.map((subItem, subIdx) => (
                            <a key={subIdx} href={subItem.href}>
                              {subItem.img && (
                                <img className="lazy-menu" src={subItem.img} alt="thumb menu" width="25" />
                              )}
                              <h3>{subItem.name}</h3>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </header>
  );
}

export default Header;
