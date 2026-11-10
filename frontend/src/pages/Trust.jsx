import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Download, Maximize2, MessageCircle } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/layout/Hero";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import Lightbox from "@/components/shared/Lightbox";
import PlaceholderChip from "@/components/shared/PlaceholderChip";
import ContactInvite from "@/components/shared/ContactInvite";
import { THEMES, IMG } from "@/lib/site";
import { pageTransition } from "@/lib/anim";

const T = THEMES.trust;

const GALLERY = [
    { src: IMG.handsHeart, alt: "Hands joined together holding a painted heart" },
    { src: IMG.volunteers, alt: "Volunteers packing donation supplies" },
    { src: IMG.children, alt: "Children taking part in a community programme" },
    { src: IMG.community, alt: "Community members gathered in support" },
    { src: IMG.charityBox, alt: "Donation boxes prepared for distribution" },
    { src: IMG.handsUnity, alt: "Team stacking hands together in unity" },
];

const Trust = () => {
    const [lightbox, setLightbox] = useState(null);
    const [copied, setCopied] = useState(false);

    const copyUpi = async () => {
        /* Placeholder UPI — copies the visible placeholder string only */
        try {
            await navigator.clipboard.writeText("your-upi-id@bank (placeholder)");
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        } catch {
            setCopied(false);
        }
    };

    return (
        <motion.main {...pageTransition} style={{ background: T.bg, color: T.fg }}>
            <Seo
                title="Sai Neravu Trust — Community Initiatives & Donations | Shri Sai Group"
                description="Sai Neravu Trust is the community arm of Shri Sai Group — community initiatives and a trusted channel for contributions and donations."
            />

            <Hero
                image={IMG.handsUnity}
                imageAlt="Hands joined in unity representing community support"
                overline="A Shri Sai Group Venture"
                lines={["Sai Neravu", "Trust"]}
                subtitle="Community initiatives, and a trusted way for every contribution to reach the people it is meant for."
            />

            {/* About */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20" data-testid="trust-about-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                                About Sai Neravu
                            </p>
                        </Reveal>
                        <h2 className="font-display font-medium text-4xl md:text-5xl leading-[1.08] tracking-tight">
                            <MaskedLines lines={["Community first,", "always."]} />
                        </h2>
                    </div>
                    <div className="lg:col-span-7 lg:pt-16">
                        <Reveal delay={0.15}>
                            <p className="text-base md:text-lg leading-relaxed opacity-75 max-w-2xl">
                                Sai Neravu Trust is the community initiative of Shri Sai Group. It exists to
                                organise the group's giving — supporting community activities and providing a
                                clear, transparent channel through which well-wishers can contribute.
                            </p>
                            <p className="mt-6 text-base md:text-lg leading-relaxed opacity-75 max-w-2xl">
                                Details of specific programmes and initiatives will be published here as they are
                                confirmed by the trust.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Activities */}
            <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t" style={{ background: T.surface, borderColor: `${T.fg}14` }} data-testid="trust-activities-section">
                <Reveal>
                    <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-6" style={{ color: T.accent }}>
                        Community Activities
                    </p>
                </Reveal>
                <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-16">
                    <MaskedLines lines={["Where the trust", "shows up."]} />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {["Community support initiatives", "Donation & contribution drives", "Local welfare activities"].map((a, i) => (
                        <Reveal key={a} delay={0.08 * i}>
                            <div className="border-t pt-6" style={{ borderColor: `${T.fg}22` }} data-testid={`trust-activity-${i}`}>
                                <span className="ghost-numeral text-6xl" style={{ color: T.accent, opacity: 0.3 }}>
                                    0{i + 1}
                                </span>
                                <h3 className="mt-4 font-display text-2xl md:text-3xl tracking-tight">{a}</h3>
                                <p className="mt-3 text-sm opacity-60 italic">Details to be updated by the trust.</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20" data-testid="trust-gallery-section">
                <Reveal>
                    <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-6" style={{ color: T.accent }}>
                        Photo Gallery
                    </p>
                </Reveal>
                <h2 className="font-display font-medium text-4xl md:text-5xl leading-[1.05] tracking-tight mb-4">
                    <MaskedLines lines={["Moments from the community."]} />
                </h2>
                <p className="text-sm opacity-50 italic mb-14 max-w-xl">
                    Representative imagery — authentic photographs from the trust's activities will replace these
                    once supplied.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                    {GALLERY.map((g, i) => (
                        <Reveal key={g.src} delay={0.05 * i} className={i % 4 === 0 ? "md:row-span-2" : ""}>
                            <button
                                onClick={() => setLightbox(i)}
                                data-testid={`trust-gallery-image-${i}`}
                                className="zoom-frame block w-full h-full focus-visible:outline focus-visible:outline-2"
                                aria-label={`Enlarge: ${g.alt}`}
                            >
                                <img
                                    src={g.src}
                                    alt={g.alt}
                                    loading="lazy"
                                    className={`w-full object-cover ${i % 4 === 0 ? "aspect-[3/4] md:h-full" : "aspect-[4/3]"}`}
                                />
                            </button>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Support / Contribute */}
            <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 border-t" style={{ background: T.surface, borderColor: `${T.fg}14` }} data-testid="trust-support-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
                    <div className="lg:col-span-7">
                        <Reveal>
                            <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                                Support / Contribute
                            </p>
                        </Reveal>
                        <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                            <MaskedLines lines={["Every contribution", "counts."]} />
                        </h2>
                        <Reveal delay={0.2}>
                            <div className="mt-10 space-y-6 max-w-xl">
                                <div className="flex flex-wrap items-center gap-4 border-b pb-5" style={{ borderColor: `${T.fg}1F` }}>
                                    <span className="text-xs uppercase tracking-[0.2em] font-semibold w-40 opacity-60">UPI ID</span>
                                    <span className="font-mono text-sm" data-testid="trust-upi-id">your-upi-id@bank</span>
                                    <PlaceholderChip testId="trust-upi-placeholder" note="Placeholder — awaiting verified UPI ID" />
                                    <button
                                        onClick={copyUpi}
                                        data-testid="trust-copy-upi-button"
                                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold border px-3 py-2 transition-colors duration-300 hover:opacity-70"
                                        style={{ borderColor: T.accent, color: T.accent }}
                                    >
                                        {copied ? <Check size={14} /> : <Copy size={14} />}
                                        {copied ? "Copied" : "Copy UPI ID"}
                                    </button>
                                </div>
                                <div className="flex flex-wrap items-center gap-4 border-b pb-5" style={{ borderColor: `${T.fg}1F` }}>
                                    <span className="text-xs uppercase tracking-[0.2em] font-semibold w-40 opacity-60">Beneficiary</span>
                                    <span className="text-sm" data-testid="trust-beneficiary">Sai Neravu Trust</span>
                                    <PlaceholderChip testId="trust-beneficiary-placeholder" note="Account name to be verified" />
                                </div>
                                <div className="flex flex-wrap items-center gap-4 border-b pb-5" style={{ borderColor: `${T.fg}1F` }}>
                                    <span className="text-xs uppercase tracking-[0.2em] font-semibold w-40 opacity-60">Contact</span>
                                    <span className="text-sm opacity-50 italic" data-testid="trust-contribution-contact">Contribution contact number — to be updated</span>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="text-xs uppercase tracking-[0.2em] font-semibold w-40 opacity-60">WhatsApp</span>
                                    <span className="inline-flex items-center gap-2 text-sm opacity-50 italic" data-testid="trust-whatsapp-placeholder">
                                        <MessageCircle size={15} /> WhatsApp enquiry — number to be updated
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed opacity-60 pt-2">
                                    Donation instructions and the verified QR code will appear here once supplied
                                    by the trust. Nothing shown here is a live payment channel yet.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* QR placeholder panel */}
                    <div className="lg:col-span-5">
                        <Reveal delay={0.15}>
                            <div className="border border-dashed p-8 md:p-10 text-center" style={{ borderColor: `${T.fg}33` }} data-testid="trust-qr-panel">
                                <div className="aspect-square w-full flex items-center justify-center border" style={{ borderColor: `${T.fg}1A`, background: T.bg }}>
                                    <div className="px-6">
                                        <Maximize2 size={22} className="mx-auto mb-4 opacity-40" />
                                        <p className="text-xs uppercase tracking-[0.22em] opacity-50 leading-loose" data-testid="trust-qr-placeholder">
                                            Donation QR code
                                            <br />
                                            <span className="normal-case tracking-normal italic">will be displayed here once supplied</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-center gap-4">
                                    <button
                                        disabled
                                        data-testid="trust-qr-enlarge-button"
                                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold border px-4 py-2.5 opacity-40 cursor-not-allowed"
                                        style={{ borderColor: T.accent, color: T.accent }}
                                        title="Available once the verified QR is supplied"
                                    >
                                        <Maximize2 size={14} /> Enlarge
                                    </button>
                                    <button
                                        disabled
                                        data-testid="trust-qr-download-button"
                                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold border px-4 py-2.5 opacity-40 cursor-not-allowed"
                                        style={{ borderColor: T.accent, color: T.accent }}
                                        title="Available once the verified QR is supplied"
                                    >
                                        <Download size={14} /> Download
                                    </button>
                                </div>
                                <p className="mt-5 text-[11px] uppercase tracking-[0.2em] opacity-40">
                                    Enlarge &amp; download activate when the real QR arrives
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <ContactInvite theme={T} heading={["Stand with", "the community."]} note="Questions about contributing to Sai Neravu Trust? Reach Shri Sai Group." />

            <Lightbox images={GALLERY} index={lightbox} onClose={() => setLightbox(null)} onNav={setLightbox} />
        </motion.main>
    );
};

export default Trust;
