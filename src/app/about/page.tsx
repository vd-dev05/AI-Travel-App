import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
          <Image
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6"
            alt="Đội ngũ TravelViet"
            fill
            className="object-cover -z-10"
            priority
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Về Chúng Tôi</h1>
          <p className="text-lg max-w-2xl text-center">
            Đồng hành cùng bạn khám phá Việt Nam tươi đẹp
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Câu Chuyện Của Chúng Tôi</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
                  alt="Thành lập TravelViet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                TravelViet được thành lập vào năm 2010 bởi những người trẻ đam mê du lịch và mong muốn giới thiệu vẻ đẹp của Việt Nam đến với du khách trong và ngoài nước.
              </p>
              <p className="text-gray-700 mb-4">
                Sau hơn 10 năm hoạt động, chúng tôi tự hào đã phục vụ hơn 100,000 khách hàng và tổ chức thành công hàng nghìn tour du lịch đến các địa điểm nổi tiếng trên khắp Việt Nam.
              </p>
              <p className="text-gray-700">
                Với đội ngũ nhân viên giàu kinh nghiệm và đam mê, chúng tôi cam kết mang đến cho khách hàng những trải nghiệm du lịch tuyệt vời, an toàn và đáng nhớ.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Sứ Mệnh Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Trải Nghiệm Chất Lượng</h3>
              <p className="text-gray-600 text-center">
                Mang đến dịch vụ du lịch chất lượng cao với giá cả hợp lý, đảm bảo mọi khách hàng đều có thể tận hưởng kỳ nghỉ tuyệt vời.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">An Toàn Là Ưu Tiên</h3>
              <p className="text-gray-600 text-center">
                Đảm bảo an toàn tuyệt đối cho khách hàng trong suốt hành trình với đội ngũ hướng dẫn viên chuyên nghiệp và các đối tác uy tín.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Du Lịch Bền Vững</h3>
              <p className="text-gray-600 text-center">
                Phát triển du lịch bền vững, tôn trọng môi trường và văn hóa địa phương, góp phần bảo tồn vẻ đẹp tự nhiên của Việt Nam.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Đội Ngũ Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Nguyễn Văn A</h3>
                <p className="text-blue-500 mb-3">Giám đốc điều hành</p>
                <p className="text-gray-600 text-sm">
                  Hơn 15 năm kinh nghiệm trong ngành du lịch, đam mê khám phá và sáng tạo.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                  alt="Marketing Director"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Trần Thị B</h3>
                <p className="text-blue-500 mb-3">Giám đốc Marketing</p>
                <p className="text-gray-600 text-sm">
                  Chuyên gia Marketing với hơn 10 năm kinh nghiệm trong ngành du lịch.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt="Tour Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Lê Văn C</h3>
                <p className="text-blue-500 mb-3">Quản lý Tour</p>
                <p className="text-gray-600 text-sm">
                  8 năm kinh nghiệm tổ chức và điều hành các tour du lịch trong và ngoài nước.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                  alt="Customer Support Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Phạm Thị D</h3>
                <p className="text-blue-500 mb-3">Quản lý CSKH</p>
                <p className="text-gray-600 text-sm">
                  Chuyên gia chăm sóc khách hàng với tinh thần tận tâm và trách nhiệm cao.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Khách Hàng Nói Về Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
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
              </div>
              <p className="text-gray-600 italic mb-6">
                "Chuyến du lịch Hạ Long với TravelViet là một trong những kỷ niệm đáng nhớ nhất của gia đình tôi. Dịch vụ chuyên nghiệp, hướng dẫn viên thân thiện và lịch trình hợp lý."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                      alt="Customer"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Nguyễn Thị Hương</h4>
                  <p className="text-gray-500 text-sm">Hà Nội</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
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
              </div>
              <p className="text-gray-600 italic mb-6">
                "Đã đi Đà Nẵng - Hội An với TravelViet 2 lần và đều rất hài lòng. Giá cả hợp lý, khách sạn tốt và đặc biệt là tour guide rất am hiểu về lịch sử và văn hóa địa phương."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                      alt="Customer"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Trần Văn Minh</h4>
                  <p className="text-gray-500 text-sm">TP. Hồ Chí Minh</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
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
              </div>
              <p className="text-gray-600 italic mb-6">
                "Chuyến đi Sapa với TravelViet thật tuyệt vời. Được trải nghiệm văn hóa dân tộc H'Mông, ngắm nhìn ruộng bậc thang và tận hưởng không khí trong lành miền núi."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019236-61e1fc566b42"
                      alt="Customer"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Lê Thị Mai</h4>
                  <p className="text-gray-500 text-sm">Cần Thơ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 