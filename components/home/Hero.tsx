"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
    { src: "/assets/images/header-1.jpg", alt: "Beautiful lawn installation 1" },
    { src: "/assets/images/header-2.jpg", alt: "Beautiful lawn installation 2" },
    { src: "/assets/images/header-3.jpg", alt: "Beautiful lawn installation 3" },
    { src: "/assets/images/header-4.jpg", alt: "Beautiful lawn installation 4" },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative w-full h-[90vh] ">
            {slides.map((slide, i) => (
                <div key={slide.src} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
                    <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={i === 0} />
                </div>
            ))}
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8">
                <Image src="/logo-large.png" alt="Natural Lawn Installation" width={420} height={180} className="object-contain drop-shadow-xl" />
                <div className="flex items-center gap-4">
                    <Link href="/contact-us" className="px-7 py-3 rounded-full border-2 border-white text-white text-sm font-medium backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-200">
                        Request a Free Quote Warano
                    </Link>
                    <Link href="/about-us" className="px-7 py-3 rounded-full border-2 border-white text-white text-sm font-medium backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-200">
                        About Us
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "bg-primary scale-110" : "bg-white/70 hover:bg-white"}`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-30 rounded-full h-20  flex items-center justify-center">
                <Image src="/dividerlogo.png" alt="Natural Lawn" fill className="object-contain" />
            </div>
        </section>
    );
}