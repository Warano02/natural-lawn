import Image from "next/image";
import Link from "next/link";

const featuresLeft = [
    "Low maintenance - just one to two cuts per year",
    "Complete ground preparation including weed removal",
    "Promoting biodiversity",
    "Adds stunning colour and contrast",
];

const featuresRight = [
    "Meadow maintenance available",
    "We are accredited wild flower turf installers, UK wide",
    "Ideal for home owners or commercial projects, such as - eco builds, schools, parks, banks and events.",
];

export default function WildFlowerMeadows() {
    return (
        <section className="w-full relative py-16 overflow-hidden">
            <Image src="/assets/images/abstract1.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-96 shrink-0 relative h-100">
                    <div className="absolute top-0 left-0 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg z-10">
                        <Image src="/assets/images/wild-flower-meadows-1.jpg" alt="Wild flower meadow 1" fill className="object-cover" />
                    </div>
                    <div className="absolute top-24 right-0 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg z-20">
                        <Image src="/assets/images/wild-flower-meadows-2.jpg" alt="Wild flower meadow 2" fill className="object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-3/5 h-44 rounded-xl overflow-hidden shadow-lg z-30">
                        <Image src="/assets/images/wild-flower-meadows-3.jpg" alt="Wild flower meadow 3" fill className="object-cover" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <div>
                        <h2 className="text-white font-bold text-3xl">Wild Flower Meadows</h2>
                        <p className="text-white/80 text-sm font-medium mt-1">Creating Biodiverse Habitats</p>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                        Our instant low maintenance wild flower turf and earth offers stunning colour and contrast to your landscape project. It provides a critical habitat for native birds, mammals, bees, butterflies and other invertebrate species, helping the ecosystem function.
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed">
                        Our wild flower turf and earth is enriched with native species, flowering from early spring through to mid-autumn.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                        <ul className="flex flex-col gap-2">
                            {featuresLeft.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6aaf2e] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-2">
                            {featuresRight.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6aaf2e] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/contact-us" className="self-start mt-2 bg-[#6aaf2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                        Request a Free Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}