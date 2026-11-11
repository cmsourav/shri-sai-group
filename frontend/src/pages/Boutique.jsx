import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/layout/Hero";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Lightbox from "@/components/shared/Lightbox";
import DemoForm from "@/components/shared/DemoForm";
import ContactInvite from "@/components/shared/ContactInvite";
import Marquee from "@/components/shared/Marquee";
import { THEMES, IMG } from "@/lib/site";
import { pageTransition } from "@/lib/anim";

const T = THEMES.boutique;

const SERVICES = [
    {
        title: "Aari Artistry",
        desc: "Hand-worked Aari embroidery — the signature craft of the house.",
        img: IMG.aariWork,
    },
    {
        title: "Embroidery",
        desc: "Fine embroidery detailing for garments and special occasions.",
        img: IMG.embroidery2,
    },
    {
        title: "Boutique Design",
        desc: "Bespoke boutique design — custom creations made to your vision.",
        img: IMG.atelier,
    },
];

const PORTFOLIO = [
    { src: IMG.embroidery1, alt: "Intricate floral embroidery detail on garment", cat: "Embroidery" },
    { src: IMG.aariWork, alt: "Traditional Aari needlework in progress", cat: "Aari Artistry" },
    { src: IMG.fabric, alt: "Fine fabric selected for a custom piece", cat: "Boutique Design" },
    { src: IMG.silk, alt: "Rich silk textile detail", cat: "Boutique Design" },
    { src: IMG.saree, alt: "Elegant draped garment with detailed work", cat: "Embroidery" },
    { src: IMG.embroidery2, alt: "Close detail of embroidered work on cloth", cat: "Aari Artistry" },
    { src: IMG.atelier, alt: "Inside the design atelier", cat: "Boutique Design" },
    { src: IMG.fashionRail, alt: "Finished garments on the boutique rail", cat: "Boutique Design" },
];

const FILTERS = ["All", "Aari Artistry", "Embroidery", "Boutique Design"];

const FORM_FIELDS = [
    { name: "name", label: "Customer name", required: true, placeholder: "Your full name" },
    { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "Your phone number" },
    { name: "email", label: "Email", type: "email", optional: true, placeholder: "you@example.com" },
    {
        name: "service",
        label: "Service required",
        type: "select",
        required: true,
        options: ["Aari Artistry", "Embroidery", "Boutique Design", "Custom / Other"],
    },
    { name: "reference", label: "Design reference", type: "file", optional: true },
    { name: "date", label: "Preferred date", type: "date", optional: true },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us about the design you have in mind…" },
];

const Boutique = () => {
    const [filter, setFilter] = useState("All");
    const [lightbox, setLightbox] = useState(null);
    const visible = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === filter);

    return (
        <motion.main {...pageTransition} style={{ background: T.bg, color: T.fg }}>
            <Seo
                title="KIRA Boutique Designer — Aari Artistry, Embroidery & Boutique Design | Shri Sai Group"
                description="KIRA Boutique Designer, a Shri Sai Group venture — Aari artistry, fine embroidery and bespoke boutique design. Enquire for custom designs and appointments."
            />

            <Hero
                image={IMG.boutiqueHero}
                imageAlt="Silk and hand detail in the boutique atelier"
                overline="A Shri Sai Group Venture"
                lines={["KIRA", "Boutique Designer"]}
                subtitle="Aari artistry, embroidery and boutique design — garments made slowly, by hand, with intention."
                giantWord="Kira"
                accent={T.accent}
                h1ClassName="text-[14vw] md:text-[9vw] lg:text-[8vw]"
            />

            {/* About */}
            <section className="py-32 md:py-48 px-6 md:px-12 lg:px-16" data-testid="boutique-about-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
                    <div className="lg:col-span-6">
                        <Reveal variant="left" duration={0.8}>
                            <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                                <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                                About KIRA
                            </p>
                        </Reveal>
                        <h2 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                            <MaskedLines lines={["Where thread", "becomes art."]} />
                        </h2>
                        <Reveal delay={0.2}>
                            <p className="mt-9 max-w-xl text-base md:text-lg leading-relaxed opacity-75 font-light">
                                KIRA Boutique Designer is the design house of Shri Sai Group, devoted to Aari
                                artistry, fine embroidery and bespoke boutique design. Every piece begins with a
                                conversation — your occasion, your fabric, your vision — and is finished by hand.
                            </p>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-6">
                        <Reveal variant="up" duration={1.1}>
                            <ParallaxImage
                                src={IMG.saree}
                                alt="Elegant draped garment with detailed hand work"
                                className="aspect-[4/5] w-full max-w-md ml-auto"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Services — full-bleed chapters */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16 border-t" style={{ background: T.surface, borderColor: `${T.fg}14` }} data-testid="boutique-services-section">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Services
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-20 md:mb-28">
                    <MaskedLines lines={["The craft", "we practise."]} />
                </h2>
                <div className="space-y-24 md:space-y-36">
                    {SERVICES.map((s, i) => (
                        <div key={s.title} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" data-testid={`boutique-service-${i}`}>
                            <Reveal variant={i % 2 === 1 ? "left" : "up"} duration={1} className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                                <div className="zoom-frame aspect-[16/9]">
                                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                                </div>
                            </Reveal>
                            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                                <Reveal delay={0.1}>
                                    <span
                                        className="ghost-numeral text-[6rem] md:text-[8rem] text-transparent"
                                        style={{ WebkitTextStroke: `1px ${T.accent}`, opacity: 0.45 }}
                                    >
                                        0{i + 1}
                                    </span>
                                    <h3 className="mt-2 font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight">{s.title}</h3>
                                    <p className="mt-5 max-w-md opacity-70 leading-relaxed inline-block font-light">{s.desc}</p>
                                </Reveal>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Marquee */}
            <div className="border-y py-6 md:py-8" style={{ borderColor: `${T.fg}14`, color: `${T.fg}33` }}>
                <Marquee
                    items={["Aari Artistry", "Embroidery", "Boutique Design"]}
                    duration={28}
                    itemClassName="font-display italic font-light text-4xl md:text-6xl"
                />
            </div>

            {/* Portfolio */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16" data-testid="boutique-portfolio-section">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Portfolio
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.95] tracking-tight mb-4">
                    <MaskedLines lines={["Selected work."]} />
                </h2>
                <p className="text-sm opacity-50 italic mb-10 max-w-xl font-light">
                    Representative imagery — the boutique's own portfolio photographs will replace these once
                    supplied.
                </p>

                <div className="flex flex-wrap gap-3 mb-14" role="tablist" aria-label="Portfolio categories">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            role="tab"
                            aria-selected={filter === f}
                            data-testid={`boutique-filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => { setFilter(f); setLightbox(null); }}
                            className={`border px-5 py-2.5 text-[10px] uppercase tracking-[0.24em] font-semibold transition-all duration-300 ${
                                filter === f ? "text-white" : "opacity-60 hover:opacity-100"
                            }`}
                            style={filter === f ? { background: T.accent, borderColor: T.accent } : { borderColor: `${T.fg}30` }}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {visible.map((p, i) => (
                        <Reveal key={p.src} delay={0.04 * i} variant={i % 4 === 0 ? "up" : "fade"} className={i % 5 === 0 ? "col-span-2 row-span-2" : ""}>
                            <button
                                onClick={() => setLightbox(i)}
                                data-testid={`boutique-portfolio-image-${i}`}
                                className="zoom-frame group relative block w-full h-full focus-visible:outline focus-visible:outline-2"
                                aria-label={`Enlarge: ${p.alt}`}
                            >
                                <img
                                    src={p.src}
                                    alt={p.alt}
                                    loading="lazy"
                                    className={`w-full object-cover ${i % 5 === 0 ? "h-full aspect-square" : "aspect-square"}`}
                                />
                                <span className="absolute inset-x-0 bottom-0 bg-black/55 text-white text-[10px] uppercase tracking-[0.24em] px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-left">
                                    {p.cat}
                                </span>
                            </button>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Enquiry */}
            <section id="enquire" className="py-32 md:py-44 px-6 md:px-12 lg:px-16 border-t" style={{ background: T.surface, borderColor: `${T.fg}14` }} data-testid="boutique-enquiry-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-4">
                        <Reveal variant="left" duration={0.8}>
                            <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                                <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                                Custom Design / Appointment
                            </p>
                        </Reveal>
                        <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.96] tracking-tight">
                            <MaskedLines lines={["Enquire now."]} />
                        </h2>
                        <Reveal delay={0.15}>
                            <p className="mt-7 text-sm leading-relaxed opacity-65 max-w-sm font-light">
                                Tell us what you're dreaming of. This form demonstrates the enquiry flow only —
                                for a real appointment, reach us directly:
                            </p>
                            <ul className="mt-7 space-y-3 text-sm font-light">
                                <li className="inline-flex items-center gap-2 opacity-50 italic" data-testid="boutique-whatsapp-placeholder">
                                    <MessageCircle size={15} /> WhatsApp — number to be updated
                                </li>
                                <li className="block" />
                                <li className="inline-flex items-center gap-2 opacity-50 italic" data-testid="boutique-instagram-placeholder">
                                    <Instagram size={15} /> Instagram — handle to be updated
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-8">
                        <Reveal delay={0.1}>
                            <DemoForm
                                theme={T}
                                fields={FORM_FIELDS}
                                submitLabel="Enquire Now"
                                formId="boutique-enquiry"
                                recipientKey="boutique"
                                venture="KIRA Boutique Designer"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            <ContactInvite theme={T} heading={["Let's design", "something beautiful."]} note="Custom designs, appointments and collaborations — reach Shri Sai Group." />

            <Lightbox images={visible} index={lightbox} onClose={() => setLightbox(null)} onNav={setLightbox} />
        </motion.main>
    );
};

export default Boutique;
