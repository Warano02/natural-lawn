"use client";
import { useState } from "react";

const services = [
    "Lawn Installation",
    "Wild Flower Meadows",
    "Grounds Maintenance",
    "Soft Landscaping & Supplies",
    "Green Roofs & Living Walls",
    "Other",
];

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Lawn Installation", location: "", message: "" });
    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    const submit = (e: React.FormEvent) => { e.preventDefault(); console.log(form); };
    const inputClass = "w-full bg-white border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-200";
    return (
        <section className="w-full py-14">
            <div className="wrapper w-full flex flex-col md:flex-row gap-12 items-start">
                <div className="flex flex-col gap-5 md:w-72 shrink-0">
                    <h2 className="text-primary font-bold text-2xl">Natural Lawn Installation</h2>
                    <address className="not-italic text-gray-700 text-sm leading-relaxed">
                        12 Riverside House<br />
                        Town Quay<br />
                        Shoreham-By-Sea<br />
                        West Sussex<br />
                        <span className="font-bold">BN43 5DS</span>
                    </address>
                    <div className="flex flex-col gap-1 text-sm">
                        <a href="tel:07833645977" className="text-gray-700 hover:text-primary transition-colors duration-200">07833 645 977</a>
                        <a href="mailto:info@natural-lawn.co.uk" className="text-primary hover:underline">info@natural-lawn.co.uk</a>
                    </div>
                    <div className="bg-secondary rounded-lg px-5 py-4">
                        <p className="text-white font-bold text-base mb-1">Contact Times</p>
                        <p className="text-white font-semibold text-sm">Mon - Fri: 8:00am - 7:30pm</p>
                        <p className="text-white font-semibold text-sm">Sat & Sun: 9:00am - 5:00pm</p>
                    </div>
                </div>
                <div className="flex-1 bg-[#eef2e2] rounded-2xl p-8">
                    <h3 className="text-primary font-bold text-2xl mb-6">Please Get In Touch</h3>
                    <form onSubmit={submit} className="flex flex-col gap-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input name="name" value={form.name} onChange={handle} placeholder="*Name" required className={inputClass} />
                            <input name="email" type="email" value={form.email} onChange={handle} placeholder="*Email Address" required className={inputClass} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input name="phone" value={form.phone} onChange={handle} placeholder="*Contact Number" required className={inputClass} />
                            <select name="service" value={form.service} onChange={handle} className={inputClass}>
                                {services.map((s) => <option key={s}>{s}</option>)}
                            </select>
                        </div>
                        <input name="location" value={form.location} onChange={handle} placeholder="*Location" required className={inputClass} />
                        <textarea name="message" value={form.message} onChange={handle} placeholder="Your Message" rows={5} className={`${inputClass} resize-none`} />
                        <div className="flex justify-center mt-2">
                            <button type="submit" className="bg-primary text-white px-7 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}