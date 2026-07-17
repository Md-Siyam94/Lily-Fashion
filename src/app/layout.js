import { Geist } from "next/font/google";
import "./globals.css";
import CartProvider from "@/contex/CartProvider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lily Fashion",
  description: "A Fashion base e-commerce platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body ><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
