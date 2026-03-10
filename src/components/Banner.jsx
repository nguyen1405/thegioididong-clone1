function Banner() {
  const banners = [
    { id: 1, text: 'Khuyến mãi mùa hè - Giảm đến 30%', bg: 'bg-gradient-to-r from-primary to-primary-dark' },
    { id: 2, text: 'iPhone 15 Series - Đặt ngay', bg: 'bg-neutral-dark' },
    { id: 3, text: 'Laptop Gaming - Sale sốc', bg: 'bg-secondary' },
  ];

  return (
    <div className="banner-container mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <div className="bg-gradient-to-r from-primary to-primary-dark h-64 rounded-xl flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">Banner quảng cáo chính</h2>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-accent h-30 rounded-xl flex items-center justify-center p-4">
            <p className="text-neutral-dark font-bold text-center">⭐ Giá tốt nhất</p>
          </div>
          <div className="bg-secondary h-30 rounded-xl flex items-center justify-center p-4">
            <p className="text-white font-bold text-center">🔥 Hot Sale</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
