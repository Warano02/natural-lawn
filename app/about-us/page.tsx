import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Natural Lawns  - Native wild flower meadow and new lawn installer in Sussex",
  description: "Local Sussex turf layer, specialising in ground preparation and installation of new and replacement lawns, wild flower meadows and grounds maintenance.",
  keywords: "local lawn,turf laying,seeding,wild flower,topsoil services,residential,commercial,properties"
}

function AboutUs() {
  return (
    <main className="space-y-6">

      <section className="w-full relative h-52 overflow-visible">
        <Image src="/assets/images/header-about.jpg" alt="About Us" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white font-black text-5xl tracking-widest uppercase drop-shadow-lg">About Us</h1>
        </div>
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 w-20 h-20 rounded-full  flex items-center justify-center ">
          <Image src="/dividerlogo.png" alt="Natural Lawn" fill className="object-contain" />
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-3xl mx-auto w-full px-4 text-center">
          <p className="text-primary font-bold text-lg leading-relaxed">
            Natural Lawns was brought about by a desire to create beautiful lawns and gardens to complement your home and lifestyle. We'll work with you to understand your needs, and provide you with a friendly, reliable service from start to finish.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#eef2e2] py-16">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-primary font-bold text-3xl">The Owner</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tim has over 20 years experience in the turf and landscaping industry, following in his father's footsteps. Installing new lawns and wild flower meadows gives him a daily sense of achievement - knowing that what he's created will be enjoyed for many years to come.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              When not laying lawns, Tim is generally found down by the coast with his young family. An outdoors man, he enjoys being in, on or around the sea.
            </p>
            <Link href="/contact-us" className="self-start mt-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200">
              Request a Free Quote
            </Link>
          </div>
          <div className="w-full md:w-80 shrink-0">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
              <Image src="/assets/images/whoweare.jpg" alt="Tim Brown, Owner" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>
      <TipsAdvice />
    </main>
  )
}

const tips = [
  {
    image: "/assets/images/tips1.jpg",
    title: "Caring for your new lawn",
    body: "Water your new lawn in the morning and evening as watering in the hot sun may cause scorching to occur. It is important to keep off your new lawn where possible for the first few weeks while the roots take hold - if you do have to walk on it, tread carefully or use a plank. In warmer months, you will need to mow your lawn after 2-3 weeks. Do not cut the grass too short in its first season - you should let it establish and lower the blade a little more each subsequent mow.",
  },
  {
    image: "/assets/images/tips2.jpg",
    title: "Maintaining your wild flower meadow",
    body: "During establishment it will need to be watered regularly. Weeding should not be necessary if wild flower turf has been laid due to the weed blanket effect of the turf, and once established, it requires very little maintenance. It will not require fertilising, and can just be cut once a year in the autumn. The emergence of flowers and the type of plants that flower will vary from year to year according to temperature, moisture and available nutrients.",
  },
  {
    image: "/assets/images/tips3.jpg",
    title: "Lawns in heavy shade",
    body: "Grass tends to not like heavily shaded areas and will struggle to grow tall like it does when in full sun. You should cut the grass longer, but just as frequently, and also help the shaded grass by feeding it more regularly. In the worst areas, you may need to re-turf, or we can help you find an alternative to natural lawn.",
  },
];

function TipsAdvice() {
  return (
    <section className="w-full py-14">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col items-center gap-8">
        <h2 className="text-primary font-bold text-3xl">Tips & Advice</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {tips.map((tip) => (
            <div key={tip.title} className="flex flex-col rounded-xl overflow-hidden shadow-sm">
              <div className="relative w-full h-44">
                <Image src={tip.image} alt={tip.title} fill className="object-cover" />
              </div>
              <div className="bg-secondary flex flex-col gap-2 p-5 flex-1">
                <h3 className="text-white font-bold text-sm">{tip.title}</h3>
                <p className="text-white/90 text-xs leading-relaxed">{tip.body}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/tips-and-advice" className="px-6 py-2 rounded-full border border-gray-400 text-sm text-gray-600 hover:border-primary hover:text-primary transition-all duration-200">
          More tips & advice
        </Link>
      </div>
    </section>
  );
}


export default AboutUs