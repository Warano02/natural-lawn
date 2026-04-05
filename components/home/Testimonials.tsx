"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        quote: "We use Natural Lawn Installation for all our soft landscaping needs on our premium coastal new builds. They're easy to deal with and always provide a quality finish.",
        author: "Roots Construction Ltd, Sussex",
        stars: 5,
    },
    {
        quote: "Absolutely transformed our garden. Professional, punctual and the results were beyond what we expected. Highly recommend to anyone.",
        author: "Sarah M., Surrey",
        stars: 5,
    },
    {
        quote: "From the initial quote to the finished lawn, the whole experience was seamless. The team clearly know their craft.",
        author: "James T., West Sussex",
        stars: 5,
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);
    const t = testimonials[current];
    return (
        <section className="w-full grid grid-cols-2">
            <div className="relative flex flex-col">
                <div className="grid grid-cols-1  h-56">
                    <div className="relative">
                        <Image src="/assets/images/testimonialLeftImages.jpg" alt="Customer project 1" fill className="object-cover" />
                    </div>

                </div>
                <div className="bg-primary flex-1 p-10 flex flex-col gap-4">
                    <h2 className="text-white font-bold text-3xl">Our Customers</h2>
                    <p className="text-white/90 text-base leading-relaxed">
                        Our day to day projects range from small family lawns, through to country estates, wild flower meadows and architecturally designed gardens.
                    </p>
                    <Link href="mailto:info@natural-lawn.co.uk" className="self-start mt-2 bg-[#6aaf2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                        Email Us
                    </Link>
                </div>
            </div>
            <div className="bg-white flex flex-col items-center justify-center px-16 py-12 gap-6">
                <div className="flex flex-col items-center gap-2">
                    <Image src="/dividerlogo.png" alt="Natural Lawn" width={94} height={94} className="object-contain" />
                    <h3 className="text-primary font-bold text-4xl">Testimonials</h3>
                </div>
                <div className="flex items-center gap-6 w-full">
                    <button onClick={prev} className="shrink-0 w-10 h-10 rounded-full border border-primary cursor-pointer flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex-1 flex flex-col items-center gap-3 text-center min-h-40 justify-center">
                        <p className="text-gray-600 italic text-base leading-relaxed transition-all duration-300">"{t.quote}"</p>
                        <p className="text-gray-800 font-medium text-sm">{t.author}</p>
                        <div className="flex items-center gap-1">
                            {Array.from({ length: t.stars }).map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                            ))}
                        </div>
                    </div>
                    <button onClick={next} className="shrink-0 cursor-pointer w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}