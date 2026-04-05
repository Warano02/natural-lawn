import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const geistMonserat = Montserrat({
  variable: "--font-geist-monserat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Natural Lawns - Local lawn and wild flower turf laying specialist - Sussex",
  description: "Local expert lawn installer in Sussex, lawn replacement service, creating and maintaining native wildflower turf meadows",
  keywords: "lawn installation, lawn replacement, wildflower turf, Sussex, local specialist, native plants, sustainable gardening, eco-friendly landscaping,local turf lawn layers,loam,topsoil,formal,croquet,tennis,wild flower,wildflowers,mowing specialistsussex,surrey,kent,free quote",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={` ${geistMonserat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
