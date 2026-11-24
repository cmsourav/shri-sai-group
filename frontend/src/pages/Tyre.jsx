import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, CheckCircle2, User, Navigation, Wrench } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/layout/Hero";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import Lightbox from "@/components/shared/Lightbox";
import DemoForm from "@/components/shared/DemoForm";
import ContactInvite from "@/components/shared/ContactInvite";
import Marquee from "@/components/shared/Marquee";
import { THEMES, IMG } from "@/lib/site";
import { pageTransition } from "@/lib/anim";

const T = THEMES.tyre;

const PHONE_PRIMARY = "8904158529";
const PHONE_SECONDARY = "9900536911";
const WHATSAPP_URL =
    "https://wa.me/918904158529?text=Hello,+I+would+like+to+enquire+about+tyre+sales+/+puncture+repair+services.";
const MAPS_URL = "https://share.google/MEFjTYvVQMsrQ2Z9z";

const SERVICES = [
    {
        num: "01",
        title: "Professional Puncture Repair",
        desc: "Professional puncture repair services for tube-type and tubeless tyres across different vehicle categories.",
    },
    {
        num: "02",
        title: "Nitrogen Air Filling",
        desc: "Nitrogen air filling service for vehicle tyres.",
    },
    {
        num: "03",
        title: "Tyre Sales",
        desc: "Tyres and tubes for two-wheelers, three-wheelers and four-wheelers at reasonable rates.",
    },
    {
        num: "04",
        title: "Wheel Removal & Refitting",
        desc: "Removal and refitting of vehicle wheels for tyre servicing and replacement.",
    },
    {
        num: "05",
        title: "Tyre Mounting & Demounting",
        desc: "Professional mounting and demounting of tyres from wheel rims.",
    },
    {
        num: "06",
        title: "Valve & Nozzle Repair",
        desc: "Repair of tyre valves and nozzles to address air leakage problems.",
    },
    {
        num: "07",
        title: "Doorstep Puncture Repair",
        desc: "Need help with a punctured tyre? Call us for doorstep puncture repair assistance.",
    },
];

const VEHICLES = [
    {
        num: "01",
        title: "Two-Wheelers",
        desc: "Motorcycles and scooters.",
    },
    {
        num: "02",
        title: "Three-Wheelers",
        desc: "Auto rickshaws and other three-wheelers.",
    },
    {
        num: "03",
        title: "Four-Wheelers",
        desc: "Cars and other four-wheelers.",
    },
];

const BRANDS = [
    "Bridgestone",
    "CEAT",
    "Apollo",
    "JK Tyre",
    "Michelin",
    "Yokohama",
    "MRF",
    "Goodyear",
    "TVS Tyres",
];

const WHY_CHOOSE_US = [
    "Services for two-wheelers, three-wheelers and four-wheelers.",
    "Tube and tubeless puncture repair.",
    "Tyre sales and tube availability.",
    "Nitrogen air filling.",
    "Wheel removal and refitting.",
    "Tyre mounting and demounting.",
    "Reasonable service rates.",
    "Doorstep puncture repair assistance on request.",
];

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
        options: ["Two-Wheeler (Motorcycle / Scooter)", "Three-Wheeler (Auto Rickshaw / Other)", "Four-Wheeler (Car / Other)"],
    },
    {
        name: "requirement",
        label: "Tyre requirement",
        type: "select",
        required: true,
        options: [
            "Professional Puncture Repair",
            "Doorstep Puncture Repair",
            "Tyre Sales / Tube Replacement",
            "Nitrogen Air Filling",
            "Wheel Removal & Refitting",
            "Tyre Mounting & Demounting",
            "Valve & Nozzle Repair",
            "Other",
        ],
    },
    { name: "brand", label: "Brand preference", optional: true, placeholder: "Bridgestone, CEAT, Apollo, MRF, etc." },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us what your vehicle needs…" },
];

const Tyre = () => {
    const [lightbox, setLightbox] = useState(null);

    return (
        <motion.main {...pageTransition} style={{ background: T.bg, color: T.fg }}>
            <Seo
                title="Shri Sai Tyres — Sales & Service Centre, Beeri, Kotekar | Shri Sai Group"
                description="Shri Sai Tyres — Sales & Service Centre at Sai Ram Complex, Beeri, Kotekar. Professional tyre sales, tube & tubeless puncture repair, nitrogen air filling, wheel services and doorstep puncture repair for two-wheelers, three-wheelers and four-wheelers."
            />

            <Hero
                image={IMG.tyreHero}
                imageAlt="Tyres stacked in a moody workshop"
                overline="Sales & Service Centre — A Shri Sai Group Venture"
                lines={["Shri Sai", "Tyres"]}
                subtitle="Professional Tyre Sales, Puncture Repair & Wheel Services — Your trusted destination for tyre sales, professional puncture repair and tyre servicing for two-wheelers, three-wheelers and four-wheelers at reasonable rates."
                giantWord="Tyres"
                accent={T.accent}
                h1ClassName="text-[15vw] md:text-[9.5vw] lg:text-[8.5vw]"
            >
                <div className="space-y-6">
                    <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-xs md:text-sm uppercase tracking-[0.22em] text-white/80 hover:text-white font-medium transition-colors"
                    >
                        <MapPin size={15} style={{ color: T.accent }} className="shrink-0" />
                        <span className="link-underline">Located at Sai Ram Complex, Beeri, Kotekar.</span>
                    </a>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                        <a
                            href={`tel:+91${PHONE_PRIMARY}`}
                            data-testid="tyre-hero-call-cta"
                            className="inline-flex items-center gap-3 px-7 py-4 text-[11px] uppercase tracking-[0.26em] font-semibold text-white transition-all duration-300 hover:opacity-90"
                            style={{ background: T.accent }}
                        >
                            <Phone size={15} />
                            Call Now
                        </a>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="tyre-hero-whatsapp-cta"
                            className="inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.26em] font-semibold text-white transition-all duration-300 hover:bg-white/10"
                            style={{ borderColor: `${T.accent}99` }}
                        >
                            <MessageCircle size={15} style={{ color: T.accent }} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </Hero>

            {/* ————— About Shri Sai Tyres ————— */}
            <section className="py-28 md:py-44 px-6 md:px-12 lg:px-16" data-testid="tyre-about-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
                    <div className="lg:col-span-6 lg:order-2">
                        <Reveal variant="up" duration={1.1}>
                            <div className="zoom-frame aspect-[16/10] ml-auto max-w-xl">
                                <img src={IMG.workshop} alt="Inside the Shri Sai Tyres workshop" loading="lazy" className="h-full w-full object-cover" />
                            </div>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-6 lg:order-1">
                        <Reveal variant="left" duration={0.8}>
                            <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                                <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                                About Shri Sai Tyres
                            </p>
                        </Reveal>
                        <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
                            <MaskedLines lines={["Reliable Tyre Solutions.", "Professional Service."]} />
                        </h2>
                        <Reveal delay={0.2}>
                            <div className="mt-9 space-y-5 max-w-xl text-base md:text-lg leading-relaxed opacity-80 font-light">
                                <p>
                                    Shri Sai Tyres is a tyre sales and service centre located at Beeri, Kotekar,
                                    providing tyre-related solutions for two-wheelers, three-wheelers and
                                    four-wheelers.
                                </p>
                                <p>
                                    From professional tube and tubeless puncture repairs to tyre sales, nitrogen air
                                    filling, wheel removal and refitting, we aim to provide convenient and reliable
                                    service at reasonable rates.
                                </p>
                                <p>
                                    Whether you need a tyre replacement or assistance with an unexpected puncture,
                                    Shri Sai Tyres is here to help.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10 inline-flex items-center gap-3">
                                <User size={16} style={{ color: T.accent }} />
                                <span className="text-xs uppercase tracking-[0.28em] font-semibold text-white/90">
                                    Proprietor: <span style={{ color: T.accent }}>Kishor</span>
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ————— Marquee ————— */}
            <div className="border-y border-white/10 py-6 md:py-8 text-white/20">
                <Marquee
                    items={["Tyre Sales", "Puncture Repair", "Nitrogen Air Filling", "Wheel Services", "Doorstep Assistance"]}
                    duration={28}
                    itemClassName="font-display italic font-light text-4xl md:text-6xl"
                />
            </div>

            {/* ————— Our Services ————— */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16" style={{ background: T.surface }} data-testid="tyre-services-section">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Our Services
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight mb-16">
                    <MaskedLines lines={["Complete Tyre Care", "Under One Roof."]} />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((s, i) => (
                        <Reveal key={s.num} delay={0.05 * i} variant="up">
                            <div
                                className="group h-full border border-white/10 bg-[#0F0F0F]/70 p-7 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:border-[#D32F2F]/60"
                                data-testid={`tyre-service-${s.num}`}
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <span
                                            className="font-display italic text-3xl sm:text-4xl leading-none"
                                            style={{ color: T.accent }}
                                        >
                                            {s.num}.
                                        </span>
                                        <Wrench size={16} className="opacity-30 group-hover:opacity-80 transition-opacity" style={{ color: T.accent }} />
                                    </div>
                                    <h3 className="font-display font-light text-2xl sm:text-3xl tracking-tight text-white">
                                        {s.title}
                                    </h3>
                                    <p className="mt-4 text-sm sm:text-base text-white/65 leading-relaxed font-light">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ————— Vehicles We Serve ————— */}
            <section className="py-28 md:py-36 px-6 md:px-12 lg:px-16 border-t border-white/10" data-testid="tyre-vehicles-section">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Vehicles We Serve
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight mb-14">
                    <MaskedLines lines={["Tyre Solutions for", "Every Journey."]} />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {VEHICLES.map((v, i) => (
                        <Reveal key={v.title} delay={0.08 * i} variant="up">
                            <div
                                className="border-t-2 pt-7 pb-4"
                                style={{ borderColor: T.accent }}
                                data-testid={`tyre-vehicle-${i}`}
                            >
                                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold opacity-50">
                                    Category {v.num}
                                </span>
                                <h3 className="mt-2 font-display font-light text-3xl sm:text-4xl tracking-tight text-white">
                                    {v.title}
                                </h3>
                                <p className="mt-3 text-base text-white/65 leading-relaxed font-light">
                                    {v.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ————— Our Tyre Brands ————— */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/10" style={{ background: T.surface }} data-testid="tyre-brands-section">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Our Tyre Brands
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight mb-6">
                    <MaskedLines lines={["Quality Tyres from", "Recognised Brands."]} />
                </h2>
                <Reveal delay={0.1}>
                    <p className="text-base md:text-lg text-white/70 font-light max-w-2xl mb-12">
                        Explore tyre options from leading brands advertised by Shri Sai Tyres:
                    </p>
                </Reveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4" data-testid="tyre-brands-grid">
                    {BRANDS.map((brand, i) => (
                        <Reveal key={brand} delay={0.04 * i} variant="up">
                            <div className="border border-white/10 bg-[#0F0F0F] px-5 py-6 text-center transition-colors duration-300 hover:border-[#D32F2F]/60">
                                <span className="font-display font-light text-xl sm:text-2xl tracking-tight text-white">
                                    {brand}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.25}>
                    <p className="mt-8 text-xs sm:text-sm text-white/45 italic font-light">
                        *Brand and model availability is subject to current stock.
                    </p>
                </Reveal>
            </section>

            {/* ————— Why Choose Shri Sai Tyres? ————— */}
            <section className="py-28 md:py-36 px-6 md:px-12 lg:px-16 border-t border-white/10" data-testid="tyre-why-choose-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
                    <div className="lg:col-span-5">
                        <Reveal variant="left" duration={0.8}>
                            <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                                <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                                Why Choose Shri Sai Tyres?
                            </p>
                        </Reveal>
                        <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
                            <MaskedLines lines={["Built on practical,", "honest service."]} />
                        </h2>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {WHY_CHOOSE_US.map((item, i) => (
                                <Reveal key={item} delay={0.05 * i} variant="up">
                                    <div className="flex items-start gap-3.5 border-b border-white/10 pb-5">
                                        <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: T.accent }} />
                                        <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ————— Need Puncture Repair Assistance? (Emergency Callout) ————— */}
            <section
                className="py-24 md:py-32 px-6 md:px-12 lg:px-16 border-y border-white/10 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 100%)" }}
                data-testid="tyre-puncture-assistance-section"
            >
                <div
                    className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${T.accent}22 0%, transparent 70%)` }}
                    aria-hidden="true"
                />
                <div className="relative z-10 max-w-4xl">
                    <Reveal variant="left" duration={0.8}>
                        <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                            <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                            Need Puncture Repair Assistance?
                        </p>
                    </Reveal>
                    <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.94] tracking-tight">
                        <MaskedLines lines={["A Flat Tyre?", "Give Us a Call."]} />
                    </h2>
                    <Reveal delay={0.15}>
                        <p className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-white/75 font-light">
                            Don&apos;t let an unexpected puncture interrupt your journey. Contact Shri Sai Tyres for
                            puncture repair assistance.
                        </p>
                        <p className="mt-6 font-display text-2xl sm:text-3xl tracking-tight text-white">
                            Call:{" "}
                            <a href={`tel:+91${PHONE_PRIMARY}`} className="link-underline" style={{ color: T.accent }}>
                                {PHONE_PRIMARY}
                            </a>{" "}
                            /{" "}
                            <a href={`tel:+91${PHONE_SECONDARY}`} className="link-underline" style={{ color: T.accent }}>
                                {PHONE_SECONDARY}
                            </a>
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5">
                            <a
                                href={`tel:+91${PHONE_PRIMARY}`}
                                data-testid="tyre-assistance-call-cta"
                                className="inline-flex items-center gap-3 px-7 py-4 text-[11px] uppercase tracking-[0.26em] font-semibold text-white transition-all duration-300 hover:opacity-90"
                                style={{ background: T.accent }}
                            >
                                <Phone size={15} />
                                Call Now
                            </a>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="tyre-assistance-whatsapp-cta"
                                className="inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.26em] font-semibold text-white transition-all duration-300 hover:bg-white/10"
                                style={{ borderColor: `${T.accent}99` }}
                            >
                                <MessageCircle size={15} style={{ color: T.accent }} />
                                WhatsApp Us
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ————— Gallery ————— */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16" data-testid="tyre-gallery-section">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Showroom &amp; Workshop
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight mb-4">
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

            {/* ————— Contact Us ————— */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/10" style={{ background: T.surface }} data-testid="tyre-location-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-5">
                        <Reveal variant="left" duration={0.8}>
                            <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                                <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                                Contact Us
                            </p>
                        </Reveal>
                        <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl leading-[0.96] tracking-tight">
                            <MaskedLines lines={["Visit Shri Sai", "Tyres."]} />
                        </h2>
                        <Reveal delay={0.15}>
                            <div className="mt-8">
                                <p className="font-display text-2xl tracking-tight text-white">SHRI SAI TYRES</p>
                                <p className="text-xs uppercase tracking-[0.28em] text-white/55 mt-1">
                                    Sales and Service Centre
                                </p>
                            </div>
                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <a
                                    href={MAPS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="tyre-get-directions-cta"
                                    className="inline-flex items-center gap-2.5 px-6 py-3.5 text-[11px] uppercase tracking-[0.24em] font-semibold text-white transition-all duration-300 hover:opacity-90"
                                    style={{ background: T.accent }}
                                >
                                    <Navigation size={14} />
                                    Get Directions
                                </a>
                                <a
                                    href={`tel:+91${PHONE_PRIMARY}`}
                                    data-testid="tyre-contact-call-cta"
                                    className="inline-flex items-center gap-2.5 border px-6 py-3.5 text-[11px] uppercase tracking-[0.24em] font-semibold text-white transition-all duration-300 hover:bg-white/10"
                                    style={{ borderColor: `${T.accent}99` }}
                                >
                                    <Phone size={14} style={{ color: T.accent }} />
                                    Call Us
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7 lg:pt-8">
                        <Reveal delay={0.15}>
                            <ul className="space-y-7 max-w-xl">
                                <li className="flex items-start gap-4 border-b border-white/10 pb-7" data-testid="tyre-address">
                                    <MapPin size={18} className="mt-1 shrink-0" style={{ color: T.accent }} />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.24em] font-semibold opacity-60 mb-1.5">Address</p>
                                        <a
                                            href={MAPS_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-underline text-base text-white/85 hover:text-white font-light leading-relaxed"
                                        >
                                            Sai Ram Complex, Beeri, Kotekar, Karnataka, India.
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-white/10 pb-7" data-testid="tyre-phone">
                                    <Phone size={18} className="mt-1 shrink-0" style={{ color: T.accent }} />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.24em] font-semibold opacity-60 mb-1.5">Contact Numbers</p>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-base font-light">
                                            <a href={`tel:+91${PHONE_PRIMARY}`} className="link-underline text-white/90 hover:text-white">
                                                +91 {PHONE_PRIMARY}
                                            </a>
                                            <a href={`tel:+91${PHONE_SECONDARY}`} className="link-underline text-white/90 hover:text-white">
                                                +91 {PHONE_SECONDARY}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-white/10 pb-7" data-testid="tyre-whatsapp">
                                    <MessageCircle size={18} className="mt-1 shrink-0" style={{ color: T.accent }} />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.24em] font-semibold opacity-60 mb-1.5">WhatsApp</p>
                                        <a
                                            href={WHATSAPP_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-underline text-base text-white/85 font-light"
                                        >
                                            WhatsApp Us (+91 {PHONE_PRIMARY})
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4" data-testid="tyre-proprietor">
                                    <User size={18} className="mt-1 shrink-0" style={{ color: T.accent }} />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.24em] font-semibold opacity-60 mb-1.5">Proprietor</p>
                                        <p className="text-base text-white/85 font-light">Kishor</p>
                                    </div>
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ————— Customer Enquiry Form ————— */}
            <section className="py-32 md:py-44 px-6 md:px-12 lg:px-16 border-t border-white/10" data-testid="tyre-enquiry-section">
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
                                Tell us your vehicle and what it needs, or call us directly at{" "}
                                <a href={`tel:+91${PHONE_PRIMARY}`} className="link-underline text-white/80">
                                    {PHONE_PRIMARY}
                                </a>{" "}
                                /{" "}
                                <a href={`tel:+91${PHONE_SECONDARY}`} className="link-underline text-white/80">
                                    {PHONE_SECONDARY}
                                </a>
                                .
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
                                venture="Shri Sai Tyres"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            <ContactInvite theme={T} heading={["Keep your vehicle", "rolling."]} note="Tyre questions big or small — reach Shri Sai Tyres at Beeri, Kotekar." />

            <Lightbox images={GALLERY} index={lightbox} onClose={() => setLightbox(null)} onNav={setLightbox} />
        </motion.main>
    );
};

export default Tyre;
