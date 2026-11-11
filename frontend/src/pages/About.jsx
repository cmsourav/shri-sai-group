import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/layout/Hero";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import ParallaxImage from "@/components/motion/ParallaxImage";
import ContactInvite from "@/components/shared/ContactInvite";
import Marquee from "@/components/shared/Marquee";
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
            giantWord="Group"
            h1ClassName="text-[13vw] md:text-[8.5vw] lg:text-[7.5vw]"
        />

        {/* Company profile */}
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-16" data-testid="about-profile-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                <div className="lg:col-span-5">
                    <Reveal variant="left" duration={0.8}>
                        <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                            <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                            Company Profile
                        </p>
                    </Reveal>
                    <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.96] tracking-tight">
                        <MaskedLines lines={["A diversified group", "with shared values."]} />
                    </h2>
                </div>
                <div className="lg:col-span-7 lg:pt-24">
                    <Reveal delay={0.15}>
                        <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-2xl font-light">
                            Shri Sai Group is a diversified business group founded by{" "}
                            <span className="text-white">{FOUNDER}</span>. The group brings together four
                            ventures, each with its own craft and character:{" "}
                            <span className="text-white">Sai Neravu Trust</span> — community initiatives and
                            donations; <span className="text-white">KIRA Boutique Designer</span> — Aari
                            artistry, embroidery and boutique design; <span className="text-white">KY Travels</span>{" "}
                            — bus travel and ticket booking; and <span className="text-white">Shri Sai Tyre</span>{" "}
                            — tyre sales and related services.
                        </p>
                        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl font-light">
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
            className="h-[60vh] md:h-[75vh] w-full"
            strength={10}
        />

        {/* Founder */}
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-16 relative overflow-hidden" data-testid="about-founder-section">
            <span
                className="ghost-numeral absolute -bottom-[4vw] left-0 font-display italic text-[28vw] text-transparent hidden md:block"
                style={{ WebkitTextStroke: "1px rgba(212,175,55,0.12)" }}
                aria-hidden="true"
            >
                01
            </span>
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-14 items-end">
                <div className="lg:col-span-7">
                    <Reveal variant="left" duration={0.8}>
                        <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                            <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                            Founder
                        </p>
                    </Reveal>
                    <h2 className="font-display font-light text-6xl md:text-7xl lg:text-8xl leading-[0.94] tracking-tight">
                        <MaskedLines lines={[FOUNDER]} />
                    </h2>
                    <Reveal delay={0.2}>
                        <p className="mt-9 max-w-xl text-base md:text-lg leading-relaxed text-white/70 font-light">
                            Founder of Shri Sai Group and the vision behind each of its four ventures. A fuller
                            profile will be published here with the founder's own words and photograph.
                        </p>
                    </Reveal>
                </div>
                <div className="lg:col-span-5">
                    <Reveal variant="up" duration={1}>
                        <div className="border border-dashed border-white/20 aspect-[3/4] flex items-center justify-center text-center px-8">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-white/35 leading-loose" data-testid="about-founder-photo-placeholder">
                                Founder portrait
                                <br />
                                <span className="normal-case tracking-normal italic">to be added once supplied</span>
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>

        {/* Venture index — editorial list */}
        <section className="py-28 md:py-40 border-t border-white/10" style={{ background: T.surface }} data-testid="about-ventures-section">
            <div className="px-6 md:px-12 lg:px-16">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        The Four Ventures
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-16 md:mb-24">
                    <MaskedLines lines={["Each venture,", "its own character."]} />
                </h2>
                <div className="border-t border-white/10">
                    {VENTURES.map((v, i) => {
                        const vt = THEMES[v.theme];
                        return (
                            <Reveal key={v.id} delay={0.06 * i}>
                                <Link
                                    to={v.path}
                                    data-testid={`about-venture-${v.id}`}
                                    className="group grid grid-cols-12 items-center gap-4 md:gap-8 py-8 md:py-10 border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.03]"
                                >
                                    <span className="col-span-2 md:col-span-1 ghost-numeral text-4xl md:text-5xl" style={{ color: vt.accent, opacity: 0.5 }}>
                                        {v.index}
                                    </span>
                                    <div className="col-span-8 md:col-span-6">
                                        <h3 className="font-display font-light text-3xl md:text-5xl tracking-tight transition-transform duration-500 group-hover:translate-x-3">
                                            {v.name}
                                        </h3>
                                        <p className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.28em] font-semibold" style={{ color: vt.accent }}>
                                            {v.tagline}
                                        </p>
                                    </div>
                                    <div className="hidden md:block col-span-4 zoom-frame aspect-[16/8] opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                                        <img src={v.image} alt={v.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                                    </div>
                                    <ArrowRight
                                        size={22}
                                        className="col-span-2 md:col-span-1 justify-self-end text-white/35 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white"
                                    />
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Marquee */}
        <div className="border-y border-white/10 py-6 md:py-8 text-white/20">
            <Marquee
                items={["A Legacy of Trust.", "A Vision for Tomorrow.", "Diversified Ventures.", "Shared Values."]}
                duration={36}
                itemClassName="font-display italic font-light text-4xl md:text-6xl"
            />
        </div>

        {/* Group contact strip */}
        <section className="py-24 px-6 md:px-12 lg:px-16" data-testid="about-contact-strip">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <Reveal>
                    <div>
                        <h3 className="font-display font-light text-3xl md:text-4xl tracking-tight">Group-level enquiries</h3>
                        <p className="mt-3 text-sm text-white/50 font-light">
                            Phone, email, WhatsApp and office address —{" "}
                            <span className="italic text-white/35">details to be updated once verified</span>.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={0.15}>
                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-white/40">
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
