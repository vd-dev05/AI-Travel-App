import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedDestinations from "./RelatedDestinations"; 
// import { use } from "react";

// Dữ liệu điểm đến
const destinations = [
  {
    id: 1,
    name: "Vịnh Hạ Long",
    description: "Kỳ quan thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi",
    fullDescription: "Vịnh Hạ Long là một trong những kỳ quan thiên nhiên nổi tiếng nhất của Việt Nam, được UNESCO công nhận là Di sản Thiên nhiên Thế giới. Vịnh có hàng nghìn hòn đảo đá vôi với nhiều hình dạng độc đáo, hang động kỳ thú và các bãi biển hoang sơ. Du khách có thể tham gia tour thuyền để khám phá vẻ đẹp của vịnh, tham quan các làng chài nổi, hay tham gia các hoạt động như chèo thuyền kayak, lặn biển và leo núi.",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
    images: [
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
      "https://images.unsplash.com/photo-1578510879285-4adb7af92ca5",
      "https://images.unsplash.com/photo-1573270695497-da2fb2c64751",
      "https://images.unsplash.com/photo-1630133376517-76aa8b3ec07f"
    ],
    price: "3.500.000 VND",
    priceNumeric: 3500000,
    region: "north",
    duration: "3 ngày 2 đêm",
    location: "Quảng Ninh, Việt Nam",
    rating: 4.7,
    reviews: 128,
    features: [
      "Khám phá hang động Sửng Sốt",
      "Ngắm hoàng hôn trên vịnh",
      "Tham quan làng chài Cửa Vạn",
      "Chèo thuyền kayak khám phá các hòn đảo"
    ],
    schedule: [
      {
        day: "Ngày 1",
        activities: [
          "Khởi hành từ Hà Nội đến Hạ Long",
          "Lên thuyền, nhận phòng và dùng bữa trưa",
          "Thăm hang Sửng Sốt",
          "Tự do bơi lội hoặc chèo thuyền kayak",
          "Dùng bữa tối và nghỉ đêm trên thuyền"
        ]
      },
      {
        day: "Ngày 2",
        activities: [
          "Ngắm bình minh và tập Tai Chi trên thuyền",
          "Thăm làng chài Cửa Vạn",
          "Tham quan vịnh Lan Hạ",
          "Tự do bơi lội tại bãi biển Ba Trái Đào",
          "Dùng bữa tối và nghỉ đêm trên thuyền"
        ]
      },
      {
        day: "Ngày 3",
        activities: [
          "Thăm hang Luồn bằng thuyền tre",
          "Trả phòng và dùng bữa trưa",
          "Trở về Hà Nội"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Phố cổ Hội An",
    description: "Thành phố cổ quyến rũ với đèn lồng và kiến trúc độc đáo",
    fullDescription: "Phố cổ Hội An là một thành phố cổ nằm ở tỉnh Quảng Nam, Việt Nam. Hội An từng là một cảng thương mại quốc tế sầm uất trong các thế kỷ 16-18 và được UNESCO công nhận là Di sản Văn hóa Thế giới. Nổi tiếng với những dãy phố đèn lồng rực rỡ, kiến trúc cổ độc đáo kết hợp giữa Việt Nam, Trung Quốc và Nhật Bản, cùng với các hoạt động văn hóa đặc sắc và ẩm thực phong phú.",
    image: "https://images.unsplash.com/photo-1535237661482-62a96a27459a",
    images: [
      "https://images.unsplash.com/photo-1535237661482-62a96a27459a",
      "https://images.unsplash.com/photo-1540998437095-b40791865dd2",
      "https://images.unsplash.com/photo-1580655653885-65763b2597d0",
      "https://images.unsplash.com/photo-1571424161765-c98d832635e7"
    ],
    price: "2.800.000 VND",
    priceNumeric: 2800000,
    region: "central",
    duration: "2 ngày 1 đêm",
    location: "Quảng Nam, Việt Nam",
    rating: 4.8,
    reviews: 156,
    features: [
      "Tham quan phố cổ Hội An",
      "Thả đèn hoa đăng trên sông Hoài",
      "Trải nghiệm ẩm thực địa phương",
      "Học làm đèn lồng truyền thống"
    ],
    schedule: [
      {
        day: "Ngày 1",
        activities: [
          "Di chuyển từ Đà Nẵng đến Hội An",
          "Tham quan các điểm di tích: Chùa Cầu, Nhà cổ Tấn Ký, Hội quán Phúc Kiến",
          "Dùng bữa trưa với đặc sản Hội An: Cao lầu, bánh mì, hoành thánh",
          "Mua sắm tại chợ Hội An",
          "Thả đèn hoa đăng trên sông Hoài vào buổi tối"
        ]
      },
      {
        day: "Ngày 2",
        activities: [
          "Tham gia lớp học nấu ăn buổi sáng",
          "Tham quan làng gốm Thanh Hà",
          "Thăm Rừng Dừa Bảy Mẫu",
          "Quay về Đà Nẵng"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Sapa",
    description: "Thị trấn miền núi với ruộng bậc thang và văn hóa đồng bào dân tộc",
    fullDescription: "Sapa là một thị trấn miền núi thuộc tỉnh Lào Cai, nằm ở độ cao khoảng 1500m so với mực nước biển. Nơi đây nổi tiếng với khung cảnh thiên nhiên tuyệt đẹp của những thửa ruộng bậc thang trải dài trên sườn núi, những ngọn núi hùng vĩ trong đó có Fansipan - \"nóc nhà Đông Dương\", và đặc biệt là nền văn hóa đa dạng của các dân tộc thiểu số như H'Mông, Dao, Tày, Giáy.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    images: [
      "https://images.unsplash.com/photo-1528127269322-539801943592",
      "https://images.unsplash.com/photo-1512793988391-867e9b028bdd",
      "https://images.unsplash.com/photo-1561084045-1956278e0888",
      "https://images.unsplash.com/photo-1587286930580-97905737923c"
    ],
    price: "4.200.000 VND",
    priceNumeric: 4200000,
    region: "north",
    duration: "3 ngày 2 đêm",
    location: "Lào Cai, Việt Nam",
    rating: 4.6,
    reviews: 95,
    features: [
      "Khám phá ruộng bậc thang",
      "Tham quan bản làng dân tộc",
      "Chinh phục đỉnh Fansipan",
      "Trải nghiệm văn hóa địa phương"
    ],
    schedule: [
      {
        day: "Ngày 1",
        activities: [
          "Di chuyển từ Hà Nội đến Sapa bằng xe khách hoặc tàu hỏa",
          "Tham quan thị trấn Sapa",
          "Thăm Nhà thờ Đá và Quảng trường trung tâm",
          "Dùng bữa tối và nghỉ đêm tại khách sạn"
        ]
      },
      {
        day: "Ngày 2",
        activities: [
          "Trekking đến Bản Cát Cát",
          "Tham quan ruộng bậc thang Lao Chải - Tả Van",
          "Giao lưu cùng người dân địa phương",
          "Dùng bữa trưa picnic",
          "Quay về Sapa nghỉ ngơi"
        ]
      },
      {
        day: "Ngày 3",
        activities: [
          "Chinh phục Fansipan bằng cáp treo",
          "Tham quan Khu du lịch Hàm Rồng",
          "Mua sắm đặc sản và quà lưu niệm",
          "Quay về Hà Nội"
        ]
      }
    ]
  }
];

// Định nghĩa đúng kiểu dữ liệu cho tham số
// type Props = Promise<{
//   params: {
//     id: string;
//   };
//   searchParams: { [key: string]: string | string[] | undefined };
// }>;

export default async function DestinationDetailPage({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const destination = destinations.find(d => d.id === parseInt(id));

  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover -z-10"
            priority
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4 text-center">{destination.name}</h1>
          <p className="text-xl max-w-2xl text-center">
            {destination.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Giới thiệu</h2>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {destination.fullDescription}
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Lịch trình</h2>
                <div className="space-y-8">
                  {destination.schedule.map((day, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-xl font-semibold mb-3">{day.day}</h3>
                      <ul className="space-y-2">
                        {day.activities.map((activity, actIdx) => (
                          <li key={actIdx} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Images Gallery */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Hình ảnh</h2>
                <div className="grid grid-cols-2 gap-4">
                  {destination.images.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${destination.name} ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking & Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-blue-600">{destination.price}</span>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span className="ml-1 font-medium">{destination.rating}</span>
                      <span className="text-gray-500 ml-1">({destination.reviews} đánh giá)</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-b py-4 mb-6">
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Thời gian:</span>
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Địa điểm:</span>
                    <span className="font-medium">{destination.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Điểm nổi bật:</h3>
                  <ul className="space-y-2">
                    {destination.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    Đặt ngay
                  </button>
                  <button className="w-full border border-blue-500 text-blue-500 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Destinations */}
      <RelatedDestinations currentId={parseInt(id)} destinations={destinations} />
    </div>
  );
} 