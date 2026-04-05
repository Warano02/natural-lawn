import Image from "next/image";
import Link from "next/link";

const serviceFeatures = [
    "Planting",
    "Flower beds",
    "Decorative slate, chippings, cobbles and pebbles",
    "Large trees and logistics",
];

const supplyFeatures = [
    "Topsoil",
    "Compost",
    "Woodland mulch",
    "Bark mulch",
    "Shingle",
];

export default function SoftLandscaping() {
    return (
        <section className="w-full bg-[#eef2e2] py-14">
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-80 lg:w-96 shrink-0 relative h-100">
                    <div className="absolute top-0 left-0 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg z-10">
                        <Image src="/assets/images/landscape-1.jpg" alt="Soft landscaping project 1" fill className="object-cover" />
                    </div>
                    <div className="absolute top-24 right-0 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg z-20">
                        <Image src="/assets/images/landscape-2.jpg" alt="Soft landscaping project 2" fill className="object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-3/5 h-44 rounded-xl overflow-hidden shadow-lg z-30">
                        <Image src="/assets/images/landscape-3.jpg" alt="Soft landscaping project 3" fill className="object-cover" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <div>
                        <h2 className="text-primary font-bold text-2xl">Soft Landscaping & Supplies</h2>
                        <p className="text-gray-500 text-sm font-medium">For gardens of all sizes</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-gray-700 font-semibold text-sm">Soft landscaping service</p>
                            <ul className="flex flex-col gap-1.5">
                                {serviceFeatures.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-primary">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-gray-700 font-semibold text-sm">We supply and deliver small and large loads, loose by the metre:</p>
                            <ul className="flex flex-col gap-1.5">
                                {supplyFeatures.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-primary">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-600 text-sm mt-1">Grab lorry service available on request.</p>
                        </div>
                    </div>
                    <Link href="/contact-us" className="self-start mt-2 bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                        Request a Free Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}