import { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Điện thoại', href: '/dtdd', icon: '📱' },
  { id: 2, name: 'Laptop', href: '/laptop', icon: '💻' },
  { id: 3, name: 'Phụ kiện', href: '/phu-kien', icon: '🎧', hasMega: true },
  { id: 4, name: 'Smartwatch', href: '/dong-ho-thong-minh', icon: '⌚' },
  { id: 6, name: 'Tablet', href: '/may-tinh-bang', icon: '📲' },
  { id: 7, name: 'Máy cũ', href: '/may-doi-tra', icon: '🔄' },
  { id: 8, name: 'Màn hình', href: '/man-hinh', icon: '🖥️' },
  { id: 9, name: 'Sim, Thẻ', href: '/sim-the', icon: '📶' },
  { id: 10, name: 'Tiện ích', href: '/tien-ich', icon: '⚡' },
];

const megaMenuData = {
  'Phụ kiện': {
    columns: [
      {
        title: 'Phụ kiện di động',
        items: [
          { name: 'Sạc dự phòng', href: '/sac-du-phong' },
          { name: 'Cáp sạc', href: '/cap-sac' },
          { name: 'Tai nghe', href: '/tai-nghe' },
          { name: 'Loa bluetooth', href: '/loa-bluetooth' },
          { name: 'Chuột', href: '/chuot' },
          { name: 'Bàn phím', href: '/ban-phim' },
        ]
      },
      {
        title: 'Phụ kiện Apple',
        items: [
          { name: 'AirPods', href: '/airpods' },
          { name: 'Apple Watch', href: '/apple-watch' },
          { name: 'MagSafe', href: '/magsafe' },
          { name: 'Cable Apple', href: '/cable-apple' },
        ]
      },
      {
        title: 'Phụ kiện Samsung',
        items: [
          { name: 'Galaxy Buds', href: '/galaxy-buds' },
          { name: 'Samsung Watch', href: '/samsung-watch' },
        ]
      },
    ]
  }
};

function MainMenu() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="header__main bg-white border-t" 
         onMouseLeave={() => setActiveMenu(null)}>
      <div className="container mx-auto px-4">
        <ul className="main-menu flex gap-2 py-3">
          {menuItems.map((item) => (
            <li 
              key={item.id} 
              className={`relative ${item.hasMega ? 'has-list' : ''}`}
              onMouseEnter={() => item.hasMega && setActiveMenu(item.id)}
            >
              <a 
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-dark hover:text-primary transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>

              {item.hasMega && activeMenu === item.id && (
                <div className="navmwg absolute top-full left-0 w-[800px] bg-white shadow-xl rounded-b-lg z-50 border-t-2 border-primary">
                  <div className="p-4 grid grid-cols-3 gap-4">
                    {megaMenuData[item.name]?.columns.map((col, idx) => (
                      <div key={idx} className="item-child">
                        <strong className="block text-primary font-semibold mb-3 pb-2 border-b">
                          {col.title}
                        </strong>
                        <ul className="space-y-2">
                          {col.items.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <a 
                                href={subItem.href}
                                className="text-sm text-gray-custom hover:text-primary transition-colors"
                              >
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;
