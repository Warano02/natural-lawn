import Image from "next/image"

export const metadata = {
    title: "Natural Lawns  - Tips for a lush, healthy new lawn - wild flower meadow care",
    description: "How to care for a new lawn - mowing and watering in summer and winter. Native wild flower meadow cutting, weeding and maintenance advice.",
    keywords: "lawn replacement tips, advice,treatment,shade,seasonal,care,weeding,mowing,maintenance"
}

function Tips() {
    return (
        <main className="space-y-6">

            <section className="w-full relative h-52 overflow-visible">
                <Image src="/assets/images/header-about.jpg" alt="About Us" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 h-full flex items-center justify-center">
                    <h1 className="text-white font-black text-5xl tracking-widest uppercase drop-shadow-lg">Tips & Advice</h1>
                </div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 w-20 h-20 rounded-full  flex items-center justify-center ">
                    <Image src="/dividerlogo.png" alt="Natural Lawn" fill className="object-contain" />
                </div>
            </section>
            <TipDetail
                title="Caring for your new lawn"
                body="Water your new lawn in the morning and evening as watering in the hot sun may cause scorching to occur. It is important to keep off your new lawn where possible for the first few weeks while the roots take hold - if you do have to walk on it, tread carefully or use a plank. In warmer months, you will need to mow your lawn after 2-3 weeks. Do not cut the grass too short in its first season - you should let it establish and lower the blade a little more each subsequent mow."
                image="/assets/images/tips1.jpg"
            />
            <TipDetail
                title="Maintaining your wild flower meadow"
                body="During establishment it will need to be watered regularly. Weeding should not be necessary if wild flower turf has been laid due to the weed blanket effect of the turf, and once established, it requires very little maintenance. It will not require fertilising, and can just be cut once a year in the autumn. The emergence of flowers and the type of plants that flower will vary from year to year according to temperature, moisture and available nutrients."
                image="/assets/images/tips2.jpg"
                bg="light"
            />
            <TipDetail
                title="Lawns in heavy shade"
                body="Grass tends to not like heavily shaded areas and will struggle to grow tall like it does when in full sun. You should cut the grass longer, but just as frequently, and also help the shaded grass by feeding it more regularly. In the worst areas, you may need to re-turf, or we can help you find an alternative to natural lawn."
                image="/assets/images/tips3.jpg"
            />
        </main>
    )
}


interface TipDetailProps {
    title: string;
    body: string;
    image: string;
    imageAlt?: string;
    reverse?: boolean;
    bg?: "white" | "light";
}

function TipDetail({ title, body, image, imageAlt = "", reverse = false, bg = "white" }: TipDetailProps) {
    return (
        <section className={`w-full py-12 ${bg === "light" ? "bg-[#eef2e2]" : "bg-white"}`}>
            <div className={`max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}>
                <div className="flex-1 flex flex-col gap-5">
                    <h2 className="text-primary font-bold text-3xl">{title}</h2>
                    <p className="text-gray-600 text-base leading-relaxed">{body}</p>
                </div>
                <div className="w-full md:w-96 shrink-0">
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
                        <Image src={image} alt={imageAlt || title} fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tips