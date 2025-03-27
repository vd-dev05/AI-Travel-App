import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarClient from "./components/NavbarClient";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Việt Nam - Khám phá vẻ đẹp Việt Nam",
  description: "Trang web du lịch hàng đầu Việt Nam với các tour độc đáo và giá cả hợp lý",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <NavbarClient />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
