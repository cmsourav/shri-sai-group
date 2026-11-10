import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, MapPin, Ticket } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/layout/Hero";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Lightbox from "@/components/shared/Lightbox";
import PlaceholderChip from "@/components/shared/PlaceholderChip";
import DemoForm from "@/components/shared/DemoForm";
import ContactInvite from "@/components/shared/ContactInvite";
import { THEMES, IMG } from "@/lib/site";
import { pageTransition } from "@/lib/anim";

const T = THEMES.travels;

const FORM_FIELDS = [
    { name: "name", label: "Name", required: true, placeholder: "Your full name" },
    { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "Your phone number" },
    {
        name: "route",
        label: "Route / destination",
        optional: true,
        placeholder: "Where are you travelling?",
    },
    { name: "date", label: "Travel date", type: "date", optional: true },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Seats, timings, group bookings — ask us anything…" },
];

const SERVICES = [
    {
        title: "AC Sleeper",
        desc: "Air-conditioned sleeper coaches for comfortable overnight journeys.",
        img: IMG.sleeper,
    },
    {
        title: "Non-AC Sleeper",
        desc: "Spacious non-AC sleeper services for everyday travel.",
        img: IMG.coach,
    },
];

const AMENITIES = ["Sleeper berths", "Verified amenity list to be updated by KY Travels"];

const GALLERY = [
    { src: IMG.busSunset, alt: "Luxury bus on the road during golden hour" },
    { src: IMG.busRed, alt: "Bus exterior on a daytime route" },
    { src: IMG.busHighway, alt: "Coach travelling on an open highway" },
    { src: IMG.busNight, alt: "Bus on the road at night" },
    { src: IMG.sleeper, alt: "Sleeper coach interior" },
    { src: IMG.driver, alt: "Behind the wheel on a long route" },
    { src: IMG.coach, alt: "Coach exterior, side profile" },
    { src: IMG.highway, alt: "Open highway stretching into the distance" },
];

const Travels = () => {
    const [lightbox, setLightbox] = useState(null);

    return (
        <motion.main {...pageTransition} style={{ background: T.bg, color: T.fg }}>
            <Seo
                title="KY Travels — Bus Travel & Ticket Booking | Shri Sai Group"
                description="KY Travels, a Shri Sai Group venture — comfortable AC and Non-AC sleeper bus travel. Book tickets on the official KY Travels booking platform."
            />

            <Hero
                image={IMG.busHighway}
                imageAlt="Coach travelling on an open highway"
                overline="A Shri Sai Group Venture"
                lines={["KY Travels"]}
                subtitle="Bus travel, done comfortably — AC and Non-AC sleeper services on the routes you love."
            />

            {/* About */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20" data-testid="travels-about-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
                    <div className="lg:col-span-6">
                        <Reveal>
                            <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                                About KY Travels
                            </p>
                        </Reveal>
                        <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight">
                            <MaskedLines lines={["The road,", "made easy."]} />
                        </h2>
                        <Reveal delay={0.2}>
                            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed opacity-75">
                                KY Travels is the transport venture of Shri Sai Group, operating AC and Non-AC
                                sleeper bus services. Tickets are booked through KY Travels' own booking
                                platform — this site simply points you to it.
                            </p>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-6">
                        <Reveal delay={0.1}>
                            <ParallaxImage src={IMG.highway} alt="Open highway stretching into the distance" className="aspect-[16/10] w-full" />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/10" style={{ background: T.surface }} data-testid="travels-services-section">
                <Reveal>
                    <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-6" style={{ color: T.accent }}>
                        Bus Services
                    </p>
                </Reveal>
                <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-16 md:mb-24">
                    <MaskedLines lines={["Choose your", "journey."]} />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                    {SERVICES.map((s, i) => (
                        <Reveal key={s.title} delay={0.08 * i}>
                            <div className="zoom-frame aspect-[16/10]" data-testid={`travels-service-${i}`}>
                                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-6 font-display font-medium text-3xl md:text-4xl tracking-tight">{s.title}</h3>
                            <p className="mt-3 opacity-70 leading-relaxed max-w-md">{s.desc}</p>
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={0.15}>
                    <div className="mt-16 border-t border-white/10 pt-8">
                        <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-4" style={{ color: T.accent }}>
                            Amenities
                        </p>
                        <ul className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-white/70" data-testid="travels-amenities">
                            <li>Sleeper berths</li>
                            <li className="italic text-white/40">Full verified amenity list — to be updated by KY Travels</li>
                        </ul>
                    </div>
                </Reveal>
            </section>

            {/* Gallery */}
            <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20" data-testid="travels-gallery-section">
                <Reveal>
                    <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-6" style={{ color: T.accent }}>
                        The Fleet
                    </p>
                </Reveal>
                <h2 className="font-display font-medium text-4xl md:text-5xl leading-[1.05] tracking-tight mb-4">
                    <MaskedLines lines={["Inside and out."]} />
                </h2>
                <p className="text-sm opacity-50 italic mb-14 max-w-xl">
                    Representative imagery — photographs of the actual KY Travels fleet will replace these once
                    supplied.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                    {GALLERY.map((g, i) => (
                        <Reveal key={g.src} delay={0.04 * i} className={i === 0 || i === 5 ? "md:col-span-2" : ""}>
                            <button
                                onClick={() => setLightbox(i)}
                                data-testid={`travels-gallery-image-${i}`}
                                className="zoom-frame block w-full focus-visible:outline focus-visible:outline-2"
                                aria-label={`Enlarge: ${g.alt}`}
                            >
                                <img
                                    src={g.src}
                                    alt={g.alt}
                                    loading="lazy"
                                    className={`w-full object-cover ${i === 0 || i === 5 ? "aspect-[16/9]" : "aspect-square"}`}
                                />
                            </button>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Routes */}
            <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/10" style={{ background: T.surface }} data-testid="travels-routes-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                                Routes &amp; Destinations
                            </p>
                        </Reveal>
                        <h2 className="font-display font-medium text-4xl md:text-5xl leading-[1.06] tracking-tight">
                            <MaskedLines lines={["Where we go."]} />
                        </h2>
                    </div>
                    <div className="lg:col-span-7 lg:pt-16">
                        <Reveal delay={0.15}>
                            <div className="border border-dashed border-white/20 p-8 md:p-10" data-testid="travels-routes-placeholder">
                                <MapPin size={22} className="mb-4 opacity-50" style={{ color: T.accent }} />
                                <p className="text-white/60 leading-relaxed max-w-md">
                                    Confirmed routes and destinations will be listed here as soon as they are
                                    supplied by KY Travels. We don't publish routes we can't verify.
                                </p>
                                <div className="mt-6">
                                    <PlaceholderChip testId="travels-routes-chip" note="Routes — awaiting confirmation" />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20" data-testid="travels-booking-section">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                            Book Your Journey
                        </p>
                    </Reveal>
                    <h2 className="font-display font-medium text-5xl md:text-6xl leading-[1.05] tracking-tight">
                        <MaskedLines lines={["Tickets live on the", "official platform."]} />
                    </h2>
                    <Reveal delay={0.2}>
                        <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/70">
                            All KY Travels tickets are booked on KY Travels' own ticket-booking website. The
                            direct link will be activated here the moment it is supplied — until then, booking
                            stays unavailable rather than pointing anywhere false.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mt-10 flex flex-wrap items-center gap-5">
                            <button
                                disabled
                                data-testid="travels-book-tickets-button"
                                className="inline-flex items-center gap-3 border px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] opacity-40 cursor-not-allowed"
                                style={{ borderColor: T.accent }}
                                title="Booking link to be activated once supplied by KY Travels"
                            >
                                <Ticket size={15} /> Book Tickets — link coming soon
                            </button>
                            <a href="#travels-routes-anchor" data-testid="travels-view-routes-link" className="arrow-nudge inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold border-b border-white/25 pb-2 hover:border-white/60 transition-colors duration-400">
                                View Routes <ArrowRight size={15} />
                            </a>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
                            <span className="inline-flex items-center gap-2 text-white/40 italic" data-testid="travels-contact-placeholder">
                                <Phone size={15} /> Contact KY Travels — number to be updated
                            </span>
                            <span className="inline-flex items-center gap-2 text-white/40 italic" data-testid="travels-whatsapp-placeholder">
                                <MessageCircle size={15} /> WhatsApp enquiry — number to be updated
                            </span>
                        </div>
                    </Reveal>
                </div>
            </section>

            <span id="travels-routes-anchor" className="block -mt-20 pt-20" aria-hidden="true" />

            {/* Enquiry form */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 border-t border-white/10" style={{ background: T.surface }} data-testid="travels-enquiry-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-4">
                        <Reveal>
                            <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                                Contact KY Travels
                            </p>
                        </Reveal>
                        <h2 className="font-display font-medium text-4xl md:text-5xl leading-[1.06] tracking-tight">
                            <MaskedLines lines={["Ask about", "your trip."]} />
                        </h2>
                        <Reveal delay={0.15}>
                            <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-sm">
                                Routes, timings, group or corporate bookings — send an enquiry and it reaches
                                the KY Travels inbox directly.
                            </p>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-8">
                        <Reveal delay={0.1}>
                            <DemoForm
                                theme={T}
                                fields={FORM_FIELDS}
                                submitLabel="Send Enquiry"
                                formId="travels-enquiry"
                                recipientKey="travels"
                                venture="KY Travels"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            <ContactInvite theme={T} heading={["Planning a", "journey?"]} note="Route, schedule and booking questions — reach Shri Sai Group." />

            <Lightbox images={GALLERY} index={lightbox} onClose={() => setLightbox(null)} onNav={setLightbox} />
        </motion.main>
    );
};

export default Travels;
