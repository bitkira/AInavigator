import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI导航站 - 精选优质AI工具",
  description: "收录最新最全的AI工具，包括AI对话、编程、绘画、写作等优质工具导航",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-mini-screen w-screen flex bg-slate-50`}
      >
        <div className="w-60 h-screen">
          <Navbar />
        </div>

        <div className="flex-1">
          {children}
        </div>

      </body>
    </html>
  );
}
