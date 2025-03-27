import Image from "next/image";
import Link from "next/link";

// Dữ liệu điểm đến
const destinations = [
  {
    id: 1,
    name: "Vịnh Hạ Long",
    description: "Kỳ quan thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
    price: "3.500.000 VND"
  },
  {
    id: 2,
    name: "Phố cổ Hội An",
    description: "Thành phố cổ quyến rũ với đèn lồng và kiến trúc độc đáo",
    image: "https://images.unsplash.com/photo-1535237661482-62a96a27459a",
    price: "2.800.000 VND"
  },
  {
    id: 3,
    name: "Sapa",
    description: "Thị trấn miền núi với ruộng bậc thang và văn hóa đồng bào dân tộc",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    price: "4.200.000 VND"
  }
];

// Dữ liệu gói tour
const pricingPlans = [
  {
    id: "basic",
    price: "2.900.000 VND",
    name: "Cơ bản",
    description: "Tour tiêu chuẩn với các điểm tham quan chính, phù hợp cho du khách lần đầu.",
    features: [
      "3 ngày 2 đêm",
      "Khách sạn 3 sao",
      "Bao gồm các bữa ăn chính"
    ],
    isPopular: false
  },
  {
    id: "standard",
    price: "4.900.000 VND",
    name: "Tiêu chuẩn",
    description: "Tour đầy đủ với nhiều điểm tham quan hơn, phù hợp cho gia đình.",
    features: [
      "5 ngày 4 đêm",
      "Khách sạn 4 sao",
      "Bao gồm tất cả các bữa ăn"
    ],
    isPopular: true
  },
  {
    id: "premium",
    price: "9.900.000 VND",
    name: "Cao cấp",
    description: "Tour sang trọng với trải nghiệm độc quyền và dịch vụ VIP.",
    features: [
      "7 ngày 6 đêm",
      "Khách sạn 5 sao",
      "Hướng dẫn viên riêng"
    ],
    isPopular: false
  }
];

// Dữ liệu tính năng
const features = [
  {
    id: "price",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    ),
    title: "Giá tốt nhất",
    description: "Chúng tôi cam kết mang đến mức giá tốt nhất thị trường với chất lượng dịch vụ cao cấp"
  },
  {
    id: "safety",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    title: "An toàn & Tin cậy",
    description: "An toàn của khách hàng là ưu tiên hàng đầu, đội ngũ hỗ trợ 24/7 luôn sẵn sàng phục vụ"
  },
  {
    id: "experience",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    ),
    title: "Trải nghiệm tuyệt vời",
    description: "Chúng tôi tạo ra những chuyến đi độc đáo, khám phá văn hóa địa phương và cảnh quan tuyệt đẹp"
  }
];

// Dữ liệu đánh giá
const testimonials = [
  {
    id: 1,
    content: "Chuyến du lịch Hạ Long với TravelViet là một trong những kỷ niệm đáng nhớ nhất của gia đình tôi!",
    author: "Nguyễn Thị Hoa",
    location: "Hà Nội",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: 2,
    content: "Tour guide rất nhiệt tình và am hiểu. Đặc biệt ẩm thực địa phương được giới thiệu rất tuyệt vời.",
    author: "Trần Văn Nam",
    location: "TP. Hồ Chí Minh",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 3,
    content: "Đặt tour online rất dễ dàng, giá cả hợp lý và dịch vụ tuyệt vời. Chắc chắn sẽ quay lại!",
    author: "Lê Thị Mai",
    location: "Đà Nẵng",
    avatar: "https://images.unsplash.com/photo-1573497019236-61e1fc566b42"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
        <Image
            src="https://images.unsplash.com/photo-1528127269322-539801943592"
            alt="Vietnam landscape"
            fill
            className="object-cover -z-10"
          priority
        />
        </div>
        <div className="relative h-full max-w-7xl mx-auto flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4 text-center text-white">Khám phá Việt Nam tươi đẹp</h1>
          <p className="text-xl mb-8 max-w-2xl text-center">
            Trải nghiệm những chuyến du lịch tuyệt vời đến những điểm đến hấp dẫn nhất của Việt Nam
          </p>
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl flex">
            <input 
              type="text" 
              placeholder="Bạn muốn đi đâu?"
              className="flex-1 p-3 outline-none text-gray-700"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors">
              Tìm kiếm
            </button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Điểm đến phổ biến</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div 
                key={destination.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64">
          <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">{destination.name}</h3>
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
          <div className="text-center mt-10">
            <Link 
              href="/destinations"
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors inline-block"
            >
              Xem tất cả điểm đến
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Lựa chọn gói tour phù hợp với bạn</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>

          <div className="flex justify-center mb-6 relative">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button className="py-2 px-6 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all">
                Thanh toán hàng tháng
              </button>
              <button className="py-2 px-6 rounded-full text-gray-700 hover:bg-gray-200 transition-all">
                Thanh toán hàng năm
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-white p-8 rounded-lg shadow-md border ${plan.isPopular ? 'border-2 border-blue-500 transform scale-105' : 'border-gray-200'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                {plan.isPopular && (
                  <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold w-fit mx-auto -mt-12 mb-4">
                    Phổ biến nhất
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-1 text-gray-800">{plan.price}</h3>
                  <p className="text-gray-500">/người</p>
                  <div className="mt-4 font-semibold text-lg text-blue-600">{plan.name}</div>
                </div>
                <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center group text-black">
                      <svg className="w-5 h-5 text-green-500 mr-2 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="group-hover:text-blue-600 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full ${plan.isPopular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'} transition-all duration-300 hover:shadow-lg transform hover:scale-105`}>
                  Chọn gói
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Tại sao chọn TravelViet?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="text-center  text-black   bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-100 p-4 inline-block rounded-full mb-4">
                  <svg
                    className="w-10 h-10 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Khách hàng nói gì về chúng tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-yellow-400 flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-500 rounded-lg p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Sẵn sàng cho chuyến đi tiếp theo của bạn?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Đặt tour ngay hôm nay và nhận ưu đãi giảm 15% cho lần đặt đầu tiên
            </p>
            <Link
              href="/destinations"
              className="bg-white text-blue-500 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors inline-block hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Khám phá ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
