"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Destination = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  region: string;
  priceNumeric: number;
};

type RelatedDestinationsProps = {
  currentId: number;
  destinations: Destination[];
};

export default function RelatedDestinations({ currentId, destinations }: RelatedDestinationsProps) {
  const [relatedFilter, setRelatedFilter] = useState("all");
  
  // Lọc điểm đến liên quan dựa trên bộ lọc
  const getRelatedDestinations = () => {
    let relatedDests = destinations.filter(d => d.id !== currentId);
    
    if (relatedFilter === "region") {
      // Lọc theo cùng khu vực
      const currentDestination = destinations.find(d => d.id === currentId);
      if (currentDestination) {
        const region = currentDestination.region;
        relatedDests = destinations.filter(d => d.id !== currentId && d.region === region);
      }
    } else if (relatedFilter === "price") {
      // Lọc theo mức giá tương tự (±1 triệu)
      const currentDestination = destinations.find(d => d.id === currentId);
      if (currentDestination) {
        const price = currentDestination.priceNumeric;
        relatedDests = destinations.filter(
          d => d.id !== currentId && Math.abs(d.priceNumeric - price) <= 1000000
        );
      }
    }
    
    // Giới hạn kết quả tối đa 3 điểm đến
    return relatedDests.slice(0, 3);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-center md:text-left">Các điểm đến khác</h2>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-600">Lọc theo:</span>
            <select 
              className="border rounded-md p-2 outline-none hover:border-blue-500 transition-colors"
              value={relatedFilter}
              onChange={(e) => setRelatedFilter(e.target.value)}
            >
              <option value="all">Tất cả</option>
              <option value="region">Cùng khu vực</option>
              <option value="price">Giá tương tự</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getRelatedDestinations().length > 0 ? (
            getRelatedDestinations().map((otherDestination) => (
              <div 
                key={otherDestination.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
              >
                <div className="relative h-64">
                  <Image
                    src={otherDestination.image}
                    alt={otherDestination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                    {otherDestination.region === "north" && "Miền Bắc"}
                    {otherDestination.region === "central" && "Miền Trung"}
                    {otherDestination.region === "south" && "Miền Nam"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{otherDestination.name}</h3>
                  <p className="text-gray-600 mb-4">{otherDestination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-500 font-bold">{otherDestination.price}</span>
                    <Link
                      href={`/destinations/${otherDestination.id}`}
                      className="text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-gray-500">Không tìm thấy điểm đến phù hợp với bộ lọc.</p>
              <button 
                onClick={() => setRelatedFilter("all")}
                className="mt-4 text-blue-500 hover:underline"
              >
                Xem tất cả
              </button>
            </div>
          )}
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
  );
} 