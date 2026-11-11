import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/layout/Hero";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import Lightbox from "@/components/shared/Lightbox";
import PlaceholderChip from "@/components/shared/PlaceholderChip";
import DemoForm from "@/components/shared/DemoForm";
import ContactInvite from "@/components/shared/ContactInvite";
import Marquee from "@/components/shared/Marquee";
import { THEMES, IMG } from "@/lib/site";
import { pageTransition } from "@/lib/anim";

const T = THEMES.tyre;

const GALLERY = [
    { src: IMG.tyreMount, alt: "Tyre being mounted onto a wheel rim" },
    { src: IMG.tyreStack, alt: "Tyres being handled in the shop" },
    { src: IMG.workshop, alt: "Inside the workshop" },
    { src: IMG.tyreService, alt: "Tyre service in progress" },
    { src: IMG.carRoad, alt: "Vehicle on the open road" },
];

const FORM_FIELDS = [
    { name: "name", label: "Customer name", required: true, placeholder: "Your full name" },
    { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "Your phone number" },
    {
        name: "vehicle",
        label: "Vehicle type",
        type: "select",
        required: true,
        options: ["Hatchback", "Sedan", "SUV / MUV", "Two-wheeler", "Commercial vehicle", "Other"],
    },
    {
        name: "requirement",
        label: "Tyre requirement",
        type: "select",
        required: true,
        options: ["New tyres", "Tyre replacement", "Repair / puncture", "Wheel service", "Other"],
    },
    { name: "brand", label: "Brand preference", optional: true, placeholder: "If you have one in mind" },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us what your vehicle needs…" },
];

const Tyre = () => {
    const [lightbox, setLightbox] = useState(null);

    return (
        <motion.main {...pageTransition} style={{ background: T.bg, color: T.fg }}>
            <Seo
                title="Shri Sai Tyre — Tyre Sales & Related Services | Shri Sai Group"
                description="Shri Sai Tyre, a Shri Sai Group venture — tyre sales and related services. Send an enquiry for your vehicle's tyre needs."
            />

            <Hero
                image={IMG.tyreHero}
                imageAlt="Tyres stacked in a moody workshop"
                overline="A Shri Sai Group Venture"
                lines={["Shri Sai", "Tyre"]}
                subtitle="Tyre sales and related services — dependable rubber under every journey."
                giantWord="Tyre"
                accent={T.accent}
                h1ClassName="text-[15vw] md:text-[9.5vw] lg:text-[8.5vw]"
            />

            {/* About */}
            <section className="py-32 md:py-48 px-6 md:px-12 lg:px-16" data-testid="tyre-about-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
                    <div className="lg:col-span-6 lg:order-2">
                        <Reveal variant="up" duration={1.1}>
                            <div className="zoom-frame aspect-[16/10] ml-auto max-w-xl">
                                <img src={IMG.workshop} alt="Inside the Shri Sai Tyre workshop" loading="lazy" className="h-full w-full object-cover" />
                            </div>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-6 lg:order-1">
                        <Reveal variant="left" duration={0.8}>
                            <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                                <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                                About Shri Sai Tyre
                            </p>
                        </Reveal>
                        <h2 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                            <MaskedLines lines={["Grip you", "can trust."]} />
                        </h2>
                        <Reveal delay={0.2}>
                            <p className="mt-9 max-w-xl text-base md:text-lg leading-relaxed opacity-75 font-light">
                                Shri Sai Tyre is the automotive venture of Shri Sai Group — tyre sales and
                                related services for everyday drivers and working vehicles alike. Straight
                                advice, honest work.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <div className="border-y border-white/10 py-6 md:py-8 text-white/20">
                <Marquee
                    items={["Tyre Sales", "Related Services", "Shri Sai Tyre"]}
                    duration={26}
                    itemClassName="font-display italic font-light text-4xl md:text-6xl"
                />
            </div>

            {/* Brands & products */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/10" style={{ background: T.surface }} data-testid="tyre-brands-section">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Tyre Brands &amp; Products
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.95] tracking-tight mb-12">
                    <MaskedLines lines={["What we stock."]} />
                </h2>
                <Reveal delay={0.1} variant="up">
                    <div className="border border-dashed border-white/20 p-8 md:p-10 max-w-3xl" data-testid="tyre-brands-placeholder">
                        <p className="text-white/60 leading-relaxed max-w-xl font-light">
                            The confirmed list of tyre brands and products carried by Shri Sai Tyre will be
                            published here once supplied. We won't name brands until the business confirms them.
                        </p>
                        <div className="mt-6">
                            <PlaceholderChip testId="tyre-brands-chip" note="Brands & products — awaiting confirmation" />
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Services */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16" data-testid="tyre-services-section">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Services
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.95] tracking-tight mb-14">
                    <MaskedLines lines={["How we help."]} />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
                    <Reveal variant="up" duration={1}>
                        <div className="border-t border-white/15 pt-7" data-testid="tyre-service-sales">
                            <h3 className="font-display font-light text-3xl md:text-4xl tracking-tight">Tyre sales</h3>
                            <p className="mt-4 text-sm text-white/60 leading-relaxed font-light">
                                New tyres matched to your vehicle and your driving.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08} variant="up" duration={1}>
                        <div className="border-t border-white/15 pt-7" data-testid="tyre-service-related">
                            <h3 className="font-display font-light text-3xl md:text-4xl tracking-tight">Related services</h3>
                            <p className="mt-4 text-sm text-white/60 leading-relaxed font-light">
                                Tyre-related workshop services — the verified service list will be updated once
                                confirmed by the business.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/10" style={{ background: T.surface }} data-testid="tyre-gallery-section">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Showroom &amp; Workshop
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.95] tracking-tight mb-4">
                    <MaskedLines lines={["On the floor."]} />
                </h2>
                <p className="text-sm opacity-50 italic mb-14 max-w-xl font-light">
                    Representative imagery — photographs of the actual showroom and workshop will replace these
                    once supplied.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {GALLERY.map((g, i) => (
                        <Reveal key={g.src} delay={0.04 * i} variant={i % 2 === 0 ? "up" : "fade"}>
                            <button
                                onClick={() => setLightbox(i)}
                                data-testid={`tyre-gallery-image-${i}`}
                                className="zoom-frame block w-full focus-visible:outline focus-visible:outline-2"
                                aria-label={`Enlarge: ${g.alt}`}
                            >
                                <img src={g.src} alt={g.alt} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                            </button>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Location & contact */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16" data-testid="tyre-location-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-5">
                        <Reveal variant="left" duration={0.8}>
                            <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                                <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                                Location &amp; Contact
                            </p>
                        </Reveal>
                        <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.96] tracking-tight">
                            <MaskedLines lines={["Find us."]} />
                        </h2>
                    </div>
                    <div className="lg:col-span-7 lg:pt-16">
                        <Reveal delay={0.15}>
                            <ul className="space-y-7 max-w-xl">
                                <li className="flex items-start gap-4 border-b border-white/10 pb-7" data-testid="tyre-address">
                                    <MapPin size={18} className="mt-1 shrink-0" style={{ color: T.accent }} />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.24em] font-semibold opacity-60 mb-1">Address</p>
                                        <p className="text-sm text-white/50 italic font-light">Business address &amp; Google Maps link — to be updated</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-white/10 pb-7" data-testid="tyre-hours">
                                    <Clock size={18} className="mt-1 shrink-0" style={{ color: T.accent }} />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.24em] font-semibold opacity-60 mb-1">Opening hours</p>
                                        <p className="text-sm text-white/50 italic font-light">Opening hours — to be updated</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-white/10 pb-7" data-testid="tyre-phone">
                                    <Phone size={18} className="mt-1 shrink-0" style={{ color: T.accent }} />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.24em] font-semibold opacity-60 mb-1">Phone</p>
                                        <p className="text-sm text-white/50 italic font-light">Phone number — to be updated</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4" data-testid="tyre-whatsapp">
                                    <MessageCircle size={18} className="mt-1 shrink-0" style={{ color: T.accent }} />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.24em] font-semibold opacity-60 mb-1">WhatsApp</p>
                                        <p className="text-sm text-white/50 italic font-light">WhatsApp enquiry — number to be updated</p>
                                    </div>
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Enquiry */}
            <section className="py-32 md:py-44 px-6 md:px-12 lg:px-16 border-t border-white/10" style={{ background: T.surface }} data-testid="tyre-enquiry-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-4">
                        <Reveal variant="left" duration={0.8}>
                            <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                                <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                                Customer Enquiry
                            </p>
                        </Reveal>
                        <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.96] tracking-tight">
                            <MaskedLines lines={["Send an", "enquiry."]} />
                        </h2>
                        <Reveal delay={0.15}>
                            <p className="mt-7 text-sm leading-relaxed text-white/60 max-w-sm font-light">
                                Tell us your vehicle and what it needs. This form demonstrates the enquiry flow
                                only — it does not send or store anything.
                            </p>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-8">
                        <Reveal delay={0.1}>
                            <DemoForm
                                theme={T}
                                fields={FORM_FIELDS}
                                submitLabel="Send Enquiry"
                                formId="tyre-enquiry"
                                recipientKey="tyre"
                                venture="Shri Sai Tyre"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            <ContactInvite theme={T} heading={["Keep your vehicle", "rolling."]} note="Tyre questions big or small — reach Shri Sai Group." />

            <Lightbox images={GALLERY} index={lightbox} onClose={() => setLightbox(null)} onNav={setLightbox} />
        </motion.main>
    );
};

export default Tyre;
