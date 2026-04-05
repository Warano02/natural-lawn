import Hero from "@/components/home/Hero"
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Lawn Installation", image: "/assets/images/lawn-installation.jpg" },
  { title: "Wild Flower Meadows", image: "/assets/images/wild-flower-meadows.jpg" },
  { title: "Grounds Maintenance", image: "/assets/images/grounds-maintainence.jpg" },
  { title: "Soft Landscaping & Supplies", image: "/assets/images/soft-landscaping.jpg", },
  { title: "Green Roofs & Living Walls", image: "/assets/images/green-roof-walls.jpg", },
];

function Home() {
  return (
    <main className="space-y-6">
      <Hero />
      <section className="w-full py-16">
        <div className="max-w-3xl mx-auto w-full px-4 text-center flex flex-col gap-4">
          <p className="text-primary font-bold text-lg leading-snug">
            Natural Lawn Installation specialises in ground preparation, beautiful new lawns and instant wild flower meadows throughout Sussex, Surrey and surrounding areas.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            With over 20 years experience, we transform average lawns into great lawns, supplying and installing the correct turf, seed and topsoil to suit your garden needs. We pride ourselves in delivering a friendly and professional service for residential gardens and commercial projects, large and small.
          </p>
        </div>
      </section>

      <div className="bg-[#f5f5f5] space-y-12">
        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
            <h2 className="text-primary font-bold text-4xl text-center mb-10">Our Services</h2>
            <div className="grid grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col cursor-pointer hover:shadow-md transition-shadow duration-300">
                  <div className="relative w-full h-56">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col items-center gap-3 py-5 px-4">
                    <h3 className="text-primary font-medium text-lg">{service.title}</h3>
                    <Link href={`/services/#${service.title.toLocaleLowerCase().split(" ")[0]}`} className="px-5 py-1.5 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-secondary hover:text-primary transition-all duration-200">
                      Find Out More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <Testimonials />

        <div className="wrapper">
          <section className="w-full flex flex-col md:flex-row">
            <div className="w-full  md:w-80 flex items-end justify-center overflow-hidden shrink-0 relative">
              <Image  src="/assets/images/whoweare.jpg" alt="Tim Brown, Owner"  fill className="object-content object-bottom w-full h-full max-h-174"/>
            </div>
            <div className="flex flex-1 flex-col  bg-black">
              <div className="bg-white flex flex-col justify-center gap-5  md:px-12 py-10">
                <h2 className="text-primary font-bold text-3xl">Who We Are</h2>
                <p className="text-gray-600 italic text-base leading-relaxed">
                  "We take pride in creating beautiful, natural gardens that can be enjoyed for years to come. Our personal approach to every project ensures you'll feel confident in our work from concept to delivery."
                </p>
                <p className="text-gray-800 text-sm">
                  <span className="text-primary font-semibold">Tim Brown</span>, Owner
                </p>
                <Link href="/about" className="self-start px-6 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700 hover:border-primary hover:text-primary transition-all duration-200">
                  Find Out More
                </Link>
              </div>
              <div className="relative flex flex-col justify-center gap-5 px-8 md:px-12 py-10 overflow-hidden ">
                <Image src="/assets/images/abstract1.jpg" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col gap-4">
                  <h2 className="text-white font-bold text-3xl">Why Choose Us</h2>
                  <p className="text-white/90 text-base leading-relaxed max-w-md">
                    With over 20 years experience, we take your plans and ideas and work together to create something unique to your space.
                  </p>
                  <Link href="/our-work" className="self-start bg-[#6aaf2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Home