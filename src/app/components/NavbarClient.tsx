"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavbarClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Đóng menu mobile khi đường dẫn thay đổi
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image
                  src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=100&h=100&fit=crop"
                  alt="TravelViet Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-bold text-blue-600">TravelViet</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`text-gray-700 hover:text-blue-500 transition-colors ${pathname === '/' ? 'text-blue-500 font-medium' : ''}`}>
                Trang chủ
              </Link>
              <Link href="/destinations" className={`text-gray-700 hover:text-blue-500 transition-colors ${pathname === '/destinations' || pathname.startsWith('/destinations/') ? 'text-blue-500 font-medium' : ''}`}>
                Điểm đến
              </Link>
              <Link href="/about" className={`text-gray-700 hover:text-blue-500 transition-colors ${pathname === '/about' ? 'text-blue-500 font-medium' : ''}`}>
                Giới thiệu
              </Link>
              <Link href="/contact" className={`text-gray-700 hover:text-blue-500 transition-colors ${pathname === '/contact' ? 'text-blue-500 font-medium' : ''}`}>
                Liên hệ
              </Link>
              <Link
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Đăng nhập
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
                aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden animate-fadeIn">
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center space-y-6 w-full px-4">
              <Link 
                href="/" 
                className={`text-2xl text-gray-700 hover:text-blue-500 transition-colors w-full text-center py-3 border-b ${pathname === '/' ? 'text-blue-500 font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link 
                href="/destinations" 
                className={`text-2xl text-gray-700 hover:text-blue-500 transition-colors w-full text-center py-3 border-b ${pathname === '/destinations' || pathname.startsWith('/destinations/') ? 'text-blue-500 font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Điểm đến
              </Link>
              <Link 
                href="/about" 
                className={`text-2xl text-gray-700 hover:text-blue-500 transition-colors w-full text-center py-3 border-b ${pathname === '/about' ? 'text-blue-500 font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Giới thiệu
              </Link>
              <Link 
                href="/contact" 
                className={`text-2xl text-gray-700 hover:text-blue-500 transition-colors w-full text-center py-3 border-b ${pathname === '/contact' ? 'text-blue-500 font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ
              </Link>
              <Link
                href="/login"
                className="bg-blue-500 text-white px-8 py-3 rounded-full text-xl hover:bg-blue-600 transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Đăng nhập
              </Link>
            </nav>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2"
              aria-label="Đóng menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
} 