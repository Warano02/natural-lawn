"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <div className="bg-primary w-full">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" aria-label="Facebook">
              <svg className="w-4 h-4 text-white fill-white hover:opacity-75 transition-opacity" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <svg className="w-4 h-4 text-white fill-none stroke-white hover:opacity-75 transition-opacity" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <svg className="w-4 h-4 text-white fill-white hover:opacity-75 transition-opacity" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:07833645977" className="flex items-center gap-2 text-white text-sm hover:opacity-75 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>Call us today on: <span className="text-[#90ee90] font-semibold">07833 645 977</span></span>
            </a>
            <a href="mailto:info@natural-lawn.co.uk" className="flex items-center gap-2 text-white text-sm hover:opacity-75 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>Email: <span className="text-[#90ee90] font-semibold">info@natural-lawn.co.uk</span></span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white w-full sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex items-center justify-between py-3">
          <Link href="/">
            <Image src="/logo.png" alt="Natural Lawn Installation" width={140} height={60} className="object-contain" />
          </Link>
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:text-white hover:bg-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}