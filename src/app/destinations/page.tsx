"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Dữ liệu điểm đến
const destinations = [
  {
    id: 1,
    name: "Vịnh Hạ Long",
    description: "Kỳ quan thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
    price: "3.500.000 VND",
    priceNumeric: 3500000,
    region: "north",
    popularity: 98
  },
  {
    id: 2,
    name: "Phố cổ Hội An",
    description: "Thành phố cổ quyến rũ với đèn lồng và kiến trúc độc đáo",
    image: "https://images.unsplash.com/photo-1535237661482-62a96a27459a",
    price: "2.800.000 VND",
    priceNumeric: 2800000,
    region: "central",
    popularity: 95
  },
  {
    id: 3,
    name: "Sapa",
    description: "Thị trấn miền núi với ruộng bậc thang và văn hóa đồng bào dân tộc",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    price: "4.200.000 VND",
    priceNumeric: 4200000,
    region: "north",
    popularity: 92
  },
  {
    id: 4,
    name: "Huế",
    description: "Cố đô với các di tích lịch sử và ẩm thực truyền thống",
    image: "https://images.unsplash.com/photo-1599708153386-62bbca61ceb7",
    price: "3.200.000 VND",
    priceNumeric: 3200000,
    region: "central",
    popularity: 88
  },
  {
    id: 5,
    name: "Phú Quốc",
    description: "Đảo ngọc với bãi biển cát trắng và nước biển trong xanh",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff",
    price: "5.500.000 VND",
    priceNumeric: 5500000,
    region: "south",
    popularity: 96
  },
  {
    id: 6,
    name: "Mũi Né",
    description: "Thiên đường nghỉ dưỡng với đồi cát và bãi biển đẹp",
    image: "https://images.unsplash.com/photo-1524097967583-e599b664db48",
    price: "2.900.000 VND",
    priceNumeric: 2900000,
    region: "south",
    popularity: 85
  }
];

export default function DestinationsPage() {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [regionFilter, setRegionFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);

  // Xử lý lọc và sắp xếp
  useEffect(() => {
    let result = [...destinations];

    // Lọc theo khu vực
    if (regionFilter) {
      result = result.filter(item => item.region === regionFilter);
    }

    // Lọc theo giá
    if (priceFilter) {
      switch (priceFilter) {
        case "low":
          result = result.filter(item => item.priceNumeric < 3000000);
          break;
        case "medium":
          result = result.filter(item => item.priceNumeric >= 3000000 && item.priceNumeric <= 5000000);
          break;
        case "high":
          result = result.filter(item => item.priceNumeric > 5000000);
          break;
      }
    }

    // Sắp xếp
    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case "price-asc":
        result.sort((a, b) => a.priceNumeric - b.priceNumeric);
        break;
      case "price-desc":
        result.sort((a, b) => b.priceNumeric - a.priceNumeric);
        break;
    }

    setFilteredDestinations(result);
  }, [regionFilter, priceFilter, sortBy]);

  // Xử lý sự kiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      // Hiển thị nút cuộn lên đầu trang khi cuộn xuống quá 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Cố định thanh lọc khi cuộn qua header
      if (window.scrollY > 300) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    // Tải thêm sản phẩm khi cuộn xuống cuối trang
    const handleScrollEnd = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        visibleItems < filteredDestinations.length
      ) {
        setVisibleItems(prev => Math.min(prev + 2, filteredDestinations.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, [visibleItems, filteredDestinations.length]);

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
          <Image
            src="https://images.unsplash.com/photo-1599708153386-62bbca61ceb7"
            alt="Vietnam destinations"
            fill
            className="object-cover -z-10"
            priority
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Tất cả điểm đến</h1>
          <p className="text-xl max-w-2xl text-center">
            Khám phá những điểm đến hấp dẫn nhất tại Việt Nam
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`py-8 bg-white shadow-md transition-all duration-300 ${isHeaderFixed ? 'sticky top-0 z-10 animate-slideDown' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Lọc theo:</span>
              <select 
                className="border rounded-md p-2 outline-none hover:border-blue-500 transition-colors"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                <option value="">Tất cả khu vực</option>
                <option value="north">Miền Bắc</option>
                <option value="central">Miền Trung</option>
                <option value="south">Miền Nam</option>
              </select>
              <select 
                className="border rounded-md p-2 outline-none hover:border-blue-500 transition-colors"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="">Mức giá</option>
                <option value="low">Dưới 3 triệu</option>
                <option value="medium">3 - 5 triệu</option>
                <option value="high">Trên 5 triệu</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium">Sắp xếp:</span>
              <select 
                className="border rounded-md p-2 outline-none hover:border-blue-500 transition-colors"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Phổ biến nhất</option>
                <option value="price-asc">Giá thấp đến cao</option>
                <option value="price-desc">Giá cao đến thấp</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Hiển thị <span className="font-semibold">{Math.min(visibleItems, filteredDestinations.length)}</span> trên <span className="font-semibold">{filteredDestinations.length}</span> điểm đến
            </p>
            {filteredDestinations.length === 0 && (
              <p className="text-red-500">Không tìm thấy điểm đến phù hợp. Vui lòng thử lại với bộ lọc khác.</p>
            )}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.slice(0, visibleItems).map((destination, index) => (
                <div 
                  key={destination.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                      {destination.region === "north" && "Miền Bắc"}
                      {destination.region === "central" && "Miền Trung"}
                      {destination.region === "south" && "Miền Nam"}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="text-sm ml-1">{destination.popularity / 20}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-500 font-bold">{destination.price}</span>
                      <Link
                        href={`/destinations/${destination.id}`}
                        className="text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <svg className="w-20 h-20 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-xl font-semibold text-gray-600">Không tìm thấy kết quả nào</p>
              <p className="text-gray-500 mb-6">Thử thay đổi các bộ lọc để tìm kiếm lại</p>
              <button 
                onClick={() => {
                  setRegionFilter("");
                  setPriceFilter("");
                  setSortBy("popular");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}

          {/* Nút tải thêm */}
          {visibleItems < filteredDestinations.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleItems(prev => Math.min(prev + 3, filteredDestinations.length))}
                className="bg-white border border-blue-500 text-blue-500 px-6 py-3 rounded hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <span>Xem thêm</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Nút cuộn lên đầu trang */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all duration-300 animate-fadeIn z-50"
          aria-label="Cuộn lên đầu trang"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
    </div>
  );
} 