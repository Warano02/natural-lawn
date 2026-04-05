import { Metadata } from "next"
import Image from "next/image";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Natural Lawns  - Experts in renovating and laying lawns and wild flower turf",
  description: "Installing lawns and wild flowers meadows for residential gardens and country estates, commercial seeding and turfing contractor across Sussex, Surrey and Kent.",
  keywords: "premium sussex new lawns,planting native wildflower,landscapers,install,commercial,residential,family"
}

const images = [
  { src: "/assets/images/work/work1.jpg", alt: "Project 1", className: "col-span-1 row-span-1" },
  { src: "/assets/images/work/work2.jpg", alt: "Project 2", className: "col-span-2 row-span-1" },
  { src: "/assets/images/work/work3.jpg", alt: "Project 3", className: "col-span-1 row-span-1" },
  { src: "/assets/images/work/work4.jpg", alt: "Project 4", className: "col-span-1 row-span-1" },
  { src: "/assets/images/work/work5.jpg", alt: "Project 5", className: "col-span-1 row-span-1" },
  { src: "/assets/images/work/work6.jpg", alt: "Project 6", className: "col-span-1 row-span-1" },
  { src: "/assets/images/work/work7.jpg", alt: "Project 7", className: "col-span-2 row-span-1" },
  { src: "/assets/images/work/work8.jpg", alt: "Project 8", className: "col-span-1 row-span-1" },
  { src: "/assets/images/work/work9.jpg", alt: "Project 9", className: "col-span-1 row-span-1" },
  { src: "/assets/images/work/work10.jpg", alt: "Project 10", className: "col-span-1 row-span-1" },
  { src: "/assets/images/work/work11.jpg", alt: "Project 11", className: "col-span-1 row-span-1" },
];
function OurWork() {
  return (
    <main className="bg-[#eef2e2] space-y-6">
      <section className="w-full py-16">
        <div className="max-w-3xl mx-auto w-full px-4 text-center flex flex-col items-center gap-5">
          <h1 className="text-primary font-black text-5xl md:text-6xl tracking-wide uppercase">Our Work</h1>
          <p className="text-gray-500 text-base leading-relaxed">
            We are very proud of the work and services we provide.<br />
            Please take a look at some of our recent projects.
          </p>
          <Link href="https://instagram.com" target="_blank" className="px-7 py-2.5 rounded-full border border-gray-400 text-sm text-gray-700 hover:border-primary hover:text-primary transition-all duration-200">
            View More on Instagram
          </Link>
        </div>
      </section>
      <section className="wrapper w-full py-10">
        <div className=" w-full px-4 ">
          <div className="grid grid-cols-3 gap-2 auto-rows-[180px]">
            {images.reverse().map((img) => (
              <div key={img.src} className={`relative overflow-hidden rounded-lg ${img.className}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default OurWork