function VendorSection() {
  const vendors = [
    { id: 1, name: 'Apple Authorised', image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/25/apple-150x150-202411251018019192.png', link: '/' },
    { id: 2, name: 'Samsung', image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/25/samsung-150x150-202411251018019192.png', link: '/' },
    { id: 3, name: 'OPPO', image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/25/oppo-150x150-202411251018019192.png', link: '/' },
    { id: 4, name: 'Xiaomi', image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/25/xiaomi-150x150-202411251018019192.png', link: '/' },
    { id: 5, name: 'vivo', image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/25/vivo-150x150-202411251018019192.png', link: '/' },
    { id: 6, name: 'Realme', image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/25/realme-150x150-202411251018019192.png', link: '/' },
    { id: 7, name: 'Nokia', image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/25/nokia-150x150-202411251018019192.png', link: '/' },
    { id: 8, name: 'Tecno', image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/2024/11/25/tecno-150x150-202411251018019192.png', link: '/' },
  ];

  return (
    <div className="vendor-section py-6">
      <h2 className="text-xl font-bold mb-4 text-neutral-dark">Gian hàng ưu đãi</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {vendors.map((vendor) => (
          <a 
            key={vendor.id} 
            href={vendor.link} 
            className="bg-white p-3 rounded-lg border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center"
          >
            <img 
              src={vendor.image} 
              alt={vendor.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-xs text-center text-gray-600">{vendor.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default VendorSection;
