import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/layout/Hero";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import ParallaxImage from "@/components/motion/ParallaxImage";
import ContactInvite from "@/components/shared/ContactInvite";
import { THEMES, IMG, VENTURES, FOUNDER, CONTACT } from "@/lib/site";
import { pageTransition } from "@/lib/anim";

const T = THEMES.parent;

const About = () => (
    <motion.main {...pageTransition}>
        <Seo
            title="About — Shri Sai Group"
            description="About Shri Sai Group, the diversified business group founded by Kishor Anchan Manchi, and its four ventures: Sai Neravu Trust, KIRA Boutique Designer, KY Travels and Shri Sai Tyre."
        />

        <Hero
            image={IMG.skyline}
            imageAlt="City skyline at dusk representing the group's breadth"
            overline="About the Group"
            lines={["Built on trust,", "growing with purpose."]}
            subtitle="A Legacy of Trust. A Vision for Tomorrow."
            h1ClassName="text-5xl md:text-7xl lg:text-8xl"
        />

        {/* Company profile */}
        <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20" data-testid="about-profile-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                <div className="lg:col-span-5">
                    <Reveal>
                        <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                            Company Profile
                        </p>
                    </Reveal>
                    <h2 className="font-display font-medium text-4xl md:text-5xl leading-[1.08] tracking-tight">
                        <MaskedLines lines={["A diversified group", "with shared values."]} />
                    </h2>
                </div>
                <div className="lg:col-span-7 lg:pt-16">
                    <Reveal delay={0.15}>
                        <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
                            Shri Sai Group is a diversified business group founded by{" "}
                            <span className="text-white">{FOUNDER}</span>. The group brings together four
                            ventures, each with its own craft and character:{" "}
                            <span className="text-white">Sai Neravu Trust</span> — community initiatives and
                            donations; <span className="text-white">KIRA Boutique Designer</span> — Aari
                            artistry, embroidery and boutique design; <span className="text-white">KY Travels</span>{" "}
                            — bus travel and ticket booking; and <span className="text-white">Shri Sai Tyre</span>{" "}
                            — tyre sales and related services.
                        </p>
                        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
                            Different fields, one standard: work done with care, and relationships built on
                            trust. That is the meaning of the group's promise — Diversified Ventures. Shared
                            Values.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>

        {/* Full-bleed visual break */}
        <ParallaxImage
            src={IMG.office}
            alt="Bright modern workspace"
            className="h-[55vh] md:h-[70vh] w-full"
            strength={10}
        />

        {/* Founder */}
        <section className="py-28 md:py-44 px-6 md:px-12 lg:px-20 relative overflow-hidden" data-testid="about-founder-section">
            <span className="ghost-numeral absolute -bottom-10 left-0 text-[14rem] md:text-[24rem] text-white/5 hidden md:block" aria-hidden="true">
                01
            </span>
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-14 items-end">
                <div className="lg:col-span-7">
                    <Reveal>
                        <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                            Founder
                        </p>
                    </Reveal>
                    <h2 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                        <MaskedLines lines={[FOUNDER]} />
                    </h2>
                    <Reveal delay={0.2}>
                        <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/70">
                            Founder of Shri Sai Group and the vision behind each of its four ventures. A fuller
                            profile will be published here with the founder's own words and photograph.
                        </p>
                    </Reveal>
                </div>
                <div className="lg:col-span-5">
                    <Reveal delay={0.15}>
                        <div className="border border-dashed border-white/20 aspect-[3/4] flex items-center justify-center text-center px-8">
                            <p className="text-xs uppercase tracking-[0.22em] text-white/35 leading-loose" data-testid="about-founder-photo-placeholder">
                                Founder portrait
                                <br />
                                <span className="normal-case tracking-normal italic">to be added once supplied</span>
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>

        {/* Ventures intro */}
        <section className="py-24 md:py-36 border-t border-white/10" style={{ background: T.surface }} data-testid="about-ventures-section">
            <div className="px-6 md:px-12 lg:px-20">
                <Reveal>
                    <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-6" style={{ color: T.accent }}>
                        The Four Ventures
                    </p>
                </Reveal>
                <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-16 md:mb-24">
                    <MaskedLines lines={["Each venture,", "its own character."]} />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-16">
                    {VENTURES.map((v, i) => {
                        const vt = THEMES[v.theme];
                        return (
                            <Reveal key={v.id} delay={0.08 * i}>
                                <Link to={v.path} className="group block" data-testid={`about-venture-${v.id}`}>
                                    <div className="zoom-frame aspect-[16/9]">
                                        <img src={v.image} alt={v.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="mt-6 flex items-start justify-between gap-6">
                                        <div>
                                            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: vt.accent }}>
                                                {v.tagline}
                                            </p>
                                            <h3 className="mt-2 font-display text-3xl tracking-tight">{v.name}</h3>
                                        </div>
                                        <ArrowRight
                                            size={20}
                                            className="mt-2 shrink-0 text-white/40 transition-all duration-400 group-hover:translate-x-1.5 group-hover:text-white"
                                        />
                                    </div>
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Group contact strip */}
        <section className="py-20 px-6 md:px-12 lg:px-20 border-t border-white/10" data-testid="about-contact-strip">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <Reveal>
                    <div>
                        <h3 className="font-display text-3xl md:text-4xl tracking-tight">Group-level enquiries</h3>
                        <p className="mt-3 text-sm text-white/50">
                            Phone, email, WhatsApp and office address —{" "}
                            <span className="italic text-white/35">details to be updated once verified</span>.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={0.15}>
                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/40">
                        <span data-testid="about-contact-phone">{CONTACT.phone.display}</span>
                        <span data-testid="about-contact-email">{CONTACT.email.display}</span>
                    </div>
                </Reveal>
            </div>
        </section>

        <ContactInvite theme={T} />
    </motion.main>
);

export default About;
