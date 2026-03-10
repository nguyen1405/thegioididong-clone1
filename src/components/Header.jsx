import { Search, ShoppingCart, User, Phone, MapPin } from 'lucide-react';
import MainMenu from './MainMenu';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Banner Top */}
      <div className="bg-[#FFD400] py-1 text-center text-sm">
        <a href="/" className="text-neutral-dark font-medium">
          📢 Khuyến mãi mùa hè - Giảm đến 30% cho đơn hàng từ 2 triệu!
        </a>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Top */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-primary flex-shrink-0">
            TGDD
          </a>
          
          {/* Search */}
          <div className="flex-1 mx-8 max-w-x1">
            <form className="relative">
              <input
                type="text"
                id="skw"
                placeholder="Bạn tìm gì hôm nay?"
                className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-1.5 rounded-full hover:bg-primary-dark transition-colors"
              >
                <Search size={16} />
              </button>
            </form>
          </div>
          
          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Phone */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              <Phone className="text-primary" size={18} />
              <span className="font-medium text-neutral-dark">1800.1060</span>
            </div>
            
            {/* Location */}
            <a href="#" className="hidden lg:flex items-center gap-1 text-sm text-gray-custom hover:text-primary transition-colors">
              <MapPin size={18} />
              <span className="max-w-[150px] truncate">Hồ Chí Minh</span>
            </a>
            
            {/* Profile */}
            <a href="#" className="flex items-center gap-1 text-sm text-neutral-dark hover:text-primary transition-colors">
              <User size={20} />
              <span className="hidden md:inline">Đăng nhập</span>
            </a>
            
            {/* Cart */}
            <a href="/cart" className="relative flex items-center gap-1 text-sm text-neutral-dark hover:text-primary transition-colors">
              <div className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
              </div>
              <span className="hidden md:inline">Giỏ hàng</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <MainMenu />
    </header>
  );
}

export default Header;
