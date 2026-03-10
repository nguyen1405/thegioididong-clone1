function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      {/* Footer Top */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cột 1: Tổng đài hỗ trợ */}
          <div className="footer__col">
            <div className="f-listtel">
              <p className="font-bold text-lg mb-4 text-white">Tổng đài hỗ trợ</p>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-custom">Gọi mua:</span>
                  <a href="tel:1900232460" className="text-primary font-medium ml-2 hover:underline">
                    1900 232 460
                  </a>
                </div>
                <div>
                  <span className="text-gray-custom">Khiếu nại:</span>
                  <a href="tel:18001062" className="text-primary font-medium ml-2 hover:underline">
                    1800.1062
                  </a>
                </div>
                <div>
                  <span className="text-gray-custom">Bảo hành:</span>
                  <a href="tel:1900232464" className="text-primary font-medium ml-2 hover:underline">
                    1900 232 464
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Cột 2: Về công ty */}
          <div className="footer__col">
            <p className="font-bold text-lg mb-4 text-white">Về công ty</p>
            <ul className="space-y-2">
              <li>
                <a href="https://mwg.vn" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Giới thiệu công ty (MWG.vn)
                </a>
              </li>
              <li>
                <a href="https://vieclam.thegioididong.com" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="/lien-he" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Gửi góp ý, khiếu nại
                </a>
              </li>
              <li>
                <a href="/he-thong-sieu-thi" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Tìm siêu thị (2.956 shop)
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Chính sách */}
          <div className="footer__col">
            <p className="font-bold text-lg mb-4 text-white">Chính sách</p>
            <ul className="space-y-2">
              <li>
                <a href="/chinh-sach-bao-hanh" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Chính sách bảo hành
                </a>
              </li>
              <li>
                <a href="/chinh-sach-doi-tra" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="/chinh-sach-bao-mat" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="/chinh-sach-van-chuyen" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Vận chuyển
                </a>
              </li>
              <li>
                <a href="/chinh-sach-tra-gop" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Trả góp
                </a>
              </li>
              <li>
                <a href="/dieu-khoan" className="text-gray-custom hover:text-primary transition-colors text-sm">
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Website cùng tập đoàn + Mạng xã hội */}
          <div className="footer__col">
            {/* Website cùng tập đoàn */}
            <div className="mb-6">
              <p className="font-bold text-lg mb-4 text-white">Website cùng tập đoàn</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.topzone.vn/" className="bg-white p-2 rounded hover:opacity-80 transition-opacity" title="TopZone">
                  <span className="text-xs font-bold text-purple-600">TopZone</span>
                </a>
                <a href="https://www.dienmayxanh.com/" className="bg-white p-2 rounded hover:opacity-80 transition-opacity" title="Điện máy xanh">
                  <span className="text-xs font-bold text-blue-600">ĐMX</span>
                </a>
                <a href="https://www.bachhoaxanh.com/" className="bg-white p-2 rounded hover:opacity-80 transition-opacity" title="Bách hóa xanh">
                  <span className="text-xs font-bold text-green-600">BHX</span>
                </a>
                <a href="https://www.nhathuocankhang.com/" className="bg-white p-2 rounded hover:opacity-80 transition-opacity" title="Nhà thuốc An Khang">
                  <span className="text-xs font-bold text-red-600">AnKhang</span>
                </a>
                <a href="https://www.avakids.com/" className="bg-white p-2 rounded hover:opacity-80 transition-opacity" title="AvaKids">
                  <span className="text-xs font-bold text-pink-600">AvaKids</span>
                </a>
              </div>
            </div>

            {/* Mạng xã hội */}
            <div className="mb-6">
              <p className="font-bold text-lg mb-4 text-white">Kết nối với chúng tôi</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/thegioididongcom" 
                  className="flex items-center gap-2 text-gray-custom hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">f</span>
                  </div>
                  <span className="text-sm">3.8M Fan</span>
                </a>
                <a 
                  href="https://www.youtube.com/user/TGDDVideoReviews" 
                  className="flex items-center gap-2 text-gray-custom hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">▶</span>
                  </div>
                  <span className="text-sm">876K Đăng ký</span>
                </a>
              </div>
            </div>

            {/* Chứng nhận */}
            <div className="flex gap-3">
              <a href="http://online.gov.vn/Home/WebDetails/20090" className="border border-gray-500 p-1 rounded hover:opacity-80 transition-opacity" title="Đã đăng ký Bộ Công Thương">
                <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">CT</span>
                </div>
              </a>
              <a href="/giai-quyet-khieu-nai" className="border border-gray-500 p-1 rounded hover:opacity-80 transition-opacity" title="Giải quyết khiếu nại">
                <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-custom text-sm">
            © 2018. Công Ty Cổ Phần Đầu Tư Điện Máy Xanh. All rights reserved.
          </p>
          <p className="text-center text-gray-custom text-xs mt-1">
            Địa chỉ: Số 1 Điện Biên Phủ, P.4, Q.5, TP. Hồ Chí Minh. GP số 47/GP-TTĐT do sở TTTT TP. HCM cấp 28/11/2022
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
