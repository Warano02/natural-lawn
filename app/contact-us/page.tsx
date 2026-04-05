import ContactSection from "@/components/ContactSection"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Natural Lawns  - Natural Lawn Installation, Sussex - request a free quote",
  description: "Free quote for any residential or commercial project, small or large across the South East. 20 years in the turf industry. Professional and reliable.",
  keywords: "natural lawn installation,free quote,local gardening expert"
}

function ContactUs() {
  return (
    <main className="space-y-6">

      <section className="w-full relative h-52 overflow-visible">
        <Image src="/assets/images/header-contact.jpg" alt="About Us" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white font-black text-5xl tracking-widest uppercase drop-shadow-lg">CONTACT US</h1>
        </div>
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 w-20 h-20 rounded-full  flex items-center justify-center ">
          <Image src="/dividerlogo.png" alt="Natural Lawn" fill className="object-contain" />
        </div>
      </section>
      <ContactSection />
    </main>
  )
}

export default ContactUs