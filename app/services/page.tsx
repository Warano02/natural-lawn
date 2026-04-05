import { Metadata } from "next"
import { Services } from "../page"
import Link from "next/link"
import Image from "next/image"
import WildFlowerMeadows from "@/components/services/WildFlowerMeadows"
import GroundsMaintenance from "@/components/services/GroundMaintenance"
import SoftLandscaping from "@/components/services/Softlandscaping"

export const metadata: Metadata = {
  title: "Natural Lawns  - Experts in lawn replacement, sports turf and wild flowers",
  description: "Residential lawns, commercial turfing and wild flower contractor, providing grounds maintenance and landscaping supplies in Sussex, Surrey and Kent.",
  keywords: "garden maintenance,landscaping,new lawn seeding,topsoil,croquet,tennis,supplier sussex,surrey,kent"
}

function ServicesPage() {
  return (
    <main className="space-y-6">
      <div className="bg-[#f5f5f5] space-y-6 ">
        <section className="w-full  py-16">
          <div className="max-w-3xl mx-auto w-full px-4 text-center flex flex-col gap-4">
            <h1 className="text-primary font-black text-5xl md:text-6xl tracking-wide uppercase">Our Services</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Scroll down the page or <span className="font-bold text-primary">click below</span> to read about the different services we offer.
            </p>
          </div>
        </section>
        <div className="wrapper">
          <Services />
        </div>
        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col items-center gap-6 text-center">
            <p className="text-primary font-semibold text-2xl">
              To discuss your project, get in touch<br />
              <span className="font-bold text-3xl">07833 645 977</span>
            </p>
            <Link href="/contact-us" className="bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200">
              Email Us
            </Link>
          </div>
        </section>
      </div>
      <LawnInstallation />
      <WildFlowerMeadows />
      <GroundsMaintenance />
      <SoftLandscaping />
    </main>
  )
}

const processLeft = [
  "Complete ground preparation",
  "Old turf lifted and removed",
  "Rotavator, digger and dumper work",
  "Loam topsoil supplied and installed",
  "Professional grading and levelling",
];

const processRight = [
  "Quality turf supplied and laid",
  "Installing all year round",
  "Residential and commercial work",
  "Aftercare advice and maintenance service",
];
function LawnInstallation() {
  return (
    <section className="w-full py-14">
      <div className="wrapper w-full px-4 md:px-8 flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <h2 className="text-primary font-bold text-2xl">Lawn Installation</h2>
            <p className="text-gray-500 text-sm font-medium">The Perfect New Lawn</p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            With 20 years experience, you can trust we'll create you the perfect lawn every time. Whether you need an old lawn replacing or repairing, a family lawn for fun and games, sports or ornamental turf, or a laser-levelled lawn for your contemporary garden design, we have your needs covered and will always select the best topsoil and turf for the job.
          </p>
          <div>
            <p className="text-gray-800 font-semibold text-sm mb-3">Typical process involves:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
              <ul className="flex flex-col gap-1.5">
                {processLeft.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-1.5">
                {processRight.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href="/contact" className="self-start mt-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200">
            Request a Free Quote
          </Link>
        </div>

        <div className="w-full md:w-80 lg:w-96 shrink-0 relative h-105">
          <div className="absolute top-0 right-0 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg z-10">
            <Image src="/assets/images/lawn-installation-1.jpg" alt="Lawn installation project 1" fill className="object-cover" />
          </div>
          <div className="absolute top-28 left-0 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg z-20">
            <Image src="/assets/images/lawn-installation-2.jpg" alt="Lawn installation project 2" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-44 rounded-xl overflow-hidden shadow-lg z-30">
            <Image src="/assets/images/lawn-installation-3.jpg" alt="Lawn installation project 3" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesPage