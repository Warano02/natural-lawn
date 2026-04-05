import Image from "next/image";
import Link from "next/link";

const featuresLeft = [
    "Mowing and strimming",
    "Hedge cutting",
    "Planting and pruning",
    "Litter picking",
    "Licensed weed control",
];

const featuresRight = [
    "Tree surgery",
    "Winter salting for ice",
    "Trained and uniformed staff",
    "Single point of contact",
    "Fully insured.",
];

export default function GroundsMaintenance() {
    return (
        <section className="w-full py-14">
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1 flex flex-col gap-5">
                    <div>
                        <h2 className="text-primary font-bold text-2xl">Grounds Maintenance</h2>
                        <p className="text-gray-500 text-sm font-medium">Professional Year-round Service</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We provide a professional grounds maintenance service for home owners, country estates, property management agents, schools, pubs and hotels.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                        <ul className="flex flex-col gap-2">
                            {featuresLeft.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-gray-primary shrink-0" >
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-2">
                            {featuresRight.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-primary">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/contact-us" className="self-start mt-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                        Request a Free Quote
                    </Link>
                </div>
                <div className="w-full md:w-80 lg:w-96 shrink-0 relative h-100">
                    <div className="absolute top-0 right-0 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg z-10">
                        <Image src="/assets/images/grounds-maintenance-1.jpg" alt="Grounds maintenance project 1" fill className="object-cover" />
                    </div>
                    <div className="absolute top-24 left-0 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg z-20">
                        <Image src="/assets/images/grounds-maintenance-2.jpg" alt="Grounds maintenance project 2" fill className="object-cover" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-44 rounded-xl overflow-hidden shadow-lg z-30">
                        <Image src="/assets/images/grounds-maintenance-3.jpg" alt="Grounds maintenance project 3" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}