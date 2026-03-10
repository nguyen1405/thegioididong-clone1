function CategoryList() {
  const categories = [
    { id: 1, name: 'Điện thoại', icon: '📱' },
    { id: 2, name: 'Laptop', icon: '💻' },
    { id: 3, name: 'Máy tính bảng', icon: '📲' },
    { id: 4, name: 'Đồng hồ', icon: '⌚' },
    { id: 5, name: 'Phụ kiện', icon: '🎧' },
    { id: 6, name: 'Tai nghe', icon: '🎵' },
  ];

  return (
    <div className="category-list mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 py-4">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="text-center p-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-primary/5 hover:border-primary hover:shadow-md transition-all duration-300"
          >
            <div className="text-3xl mb-2">{cat.icon}</div>
            <p className="font-medium text-neutral-dark">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
