const searchTrends = [
  "laptop", "tai nghe", "đồng hồ", "pc", "macbook", 
  "dell", "asus", "điện thoại xiaomi", "máy tính bảng lenovo", "orient star",
  "loa marshall", "loa jbl", "đồng hồ movado", "laptop gaming", "chuột gaming",
  "gaming phone", "đồng hồ đôi", "laptop đồ họa", "iphone 14", "iphone 15",
  "iphone 16", "iphone 17", "lenovo legion", "lenovo thinkpad", "macbook pro m5",
  "ipad pro m5", "asus tuf gaming", "iphone 17 pro", "iphone 17 256gb", "iphone 17 pro max",
  "g304", "jbl charge 5", "dell g15 5530", "hp spectre x360", "msi katana 15",
  "garmin fenix 8", "garmin forerunner 55", "Máy chạy bộ", "máy lọc nước", "iPhone 16 Plus",
  "iPhone 16 Pro Max", "iPhone 16e", "tủ lạnh", "samsung galaxy s26 series", "samsung galaxy s26",
  "samsung galaxy s26 plus", "samsung galaxy s26 ultra", "iphone 17e"
];

function SearchTrend() {
  return (
    <section className="search-trend">
      <div className="container-custom">
        <div className="bottom-search">
          <p className="bottom-search__title">Mọi người cũng tìm kiếm</p>
          <div className="bottom-search__container">
            <ul>
              {searchTrends.map((keyword, index) => (
                <li key={index}>
                  <a href={`/search? keyword=${encodeURIComponent(keyword)}`}>{keyword}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchTrend;