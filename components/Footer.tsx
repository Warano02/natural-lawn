"use client"
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#EAEFDD] w-full py-10 mt-12">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col items-center gap-6">
          <Image src="/logo.png" alt="Natural Lawn Installation" width={160} height={70} className="object-contain" />
          <Link href="/contact-us" className="bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200">
            Request a Free Quote
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a href="tel:07833645977" className="flex items-center gap-2 text-gray-700 text-sm hover:text-primary transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span>Call us today on: <span className="font-semibold">07833 645 977</span></span>
            </a>
            <a href="mailto:info@natural-lawn.co.uk" className="flex items-center gap-2 text-gray-700 text-sm hover:text-primary transition-colors duration-200">
              <Mail className="w-4 h-4" />
              <span>Email: <span className="font-semibold">info@natural-lawn.co.uk</span></span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" aria-label="Facebook">
              <svg className="w-5 h-5 fill-gray-600 hover:fill-primary transition-colors duration-200" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <svg className="w-5 h-5 fill-none stroke-gray-600 hover:stroke-primary transition-colors duration-200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-gray-600 hover:fill-primary transition-colors duration-200" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </Link>
            <Image src="/assets/images/beekeeper.png" alt="Lantra certification" width={44} height={44} className="object-contain" />
            <Image src="/assets/images/cityGuilds.png" alt="City & Guilds NPTC" width={60} height={44} className="object-contain" />
          </div>
        </div>
      </div>
      <div className="bg-[#636363] w-full">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex  items-center justify-center py-3 gap-2">

          <p className="text-white/80 text-xs">© Copyright - Natural Lawn Installation {new Date().getFullYear()} </p>
        </div>
      </div>
    </footer>
  );
}