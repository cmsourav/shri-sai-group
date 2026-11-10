import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/layout/Hero";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import ParallaxImage from "@/components/motion/ParallaxImage";
import ContactInvite from "@/components/shared/ContactInvite";
import { CtaButton } from "@/components/shared/CtaButton";
import { THEMES, IMG, VENTURES, FOUNDER } from "@/lib/site";
import { pageTransition } from "@/lib/anim";

const T = THEMES.parent;

const Home = () => (
    <motion.main {...pageTransition}>
        <Seo
            title="Shri Sai Group — A Legacy of Trust. A Vision for Tomorrow."
            description="Shri Sai Group is a diversified business group founded by Kishor Anchan Manchi — home to Sai Neravu Trust, KIRA Boutique Designer, KY Travels and Shri Sai Tyre. Diversified Ventures. Shared Values."
        />

        {/* ————— Cinematic hero ————— */}
        <Hero
            image={IMG.corporate}
            imageAlt="Cinematic modern architecture representing a diversified business group"
            overline="Shri Sai Group"
            lines={["A Legacy of Trust.", "A Vision for Tomorrow."]}
            subtitle="Diversified Ventures. Shared Values."
        >
            <div className="flex flex-wrap items-center gap-8">
                <CtaButton to="/contact" label="Contact Shri Sai Group" accent={T.accent} testId="home-hero-cta" />
                <a
                    href="#intro"
                    data-testid="home-scroll-indicator"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] opacity-70 hover:opacity-100 transition-opacity"
                >
                    <ChevronDown size={16} className="scroll-hint-dot" />
                    Scroll to explore
                </a>
            </div>
        </Hero>

        {/* ————— Introduction ————— */}
        <section id="intro" className="py-28 md:py-40 px-6 md:px-12 lg:px-20" data-testid="home-intro-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
                <div className="lg:col-span-7">
                    <Reveal>
                        <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                            The Group
                        </p>
                    </Reveal>
                    <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
                        <MaskedLines
                            lines={[
                                "One group. Four ventures.",
                                "One set of values that",
                                "runs through them all.",
                            ]}
                        />
                    </h2>
                    <Reveal delay={0.25}>
                        <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-white/70">
                            Shri Sai Group is a diversified business group founded by{" "}
                            <span className="text-white">{FOUNDER}</span>. From community service to design,
                            from the open road to the workshop floor, every venture in the group is built on the
                            same foundation — trust, craft and a commitment to the people it serves.
                        </p>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                            {["Trust", "Craft", "Community", "Ambition"].map((v) => (
                                <span key={v} className="text-sm uppercase tracking-[0.25em] text-white/50 border-b border-white/15 pb-2">
                                    {v}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <Link
                            to="/about"
                            data-testid="home-intro-about-link"
                            className="arrow-nudge mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold"
                            style={{ color: T.accent }}
                        >
                            More about the group <ArrowRight size={15} />
                        </Link>
                    </Reveal>
                </div>
                <div className="lg:col-span-5 lg:pl-6">
                    <Reveal delay={0.15}>
                        <ParallaxImage
                            src={IMG.corporate2}
                            alt="Contemporary business architecture"
                            className="aspect-[4/5] w-full"
                        />
                    </Reveal>
                </div>
            </div>
        </section>

        {/* ————— Ventures — immersive stacked showcase ————— */}
        <section className="py-24 md:py-36 border-t border-white/10" style={{ background: T.surface }} data-testid="home-ventures-section">
            <div className="px-6 md:px-12 lg:px-20 mb-20 md:mb-28">
                <Reveal>
                    <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-6" style={{ color: T.accent }}>
                        Our Ventures
                    </p>
                </Reveal>
                <h2 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                    <MaskedLines lines={["Four stories,", "one roof."]} />
                </h2>
            </div>

            <div className="space-y-24 md:space-y-36">
                {VENTURES.map((v, i) => {
                    const vt = THEMES[v.theme];
                    const flip = i % 2 === 1;
                    return (
                        <article key={v.id} className="px-6 md:px-12 lg:px-20" data-testid={`home-venture-${v.id}`}>
                            <div
                                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                                    flip ? "" : ""
                                }`}
                            >
                                <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                                    <Link to={v.path} className="zoom-frame block group" data-testid={`home-venture-${v.id}-image`} aria-label={`${v.name} — open page`}>
                                        <div className="aspect-[16/10] w-full">
                                            <img src={v.image} alt={v.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                                        </div>
                                    </Link>
                                </Reveal>
                                <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:text-right lg:justify-self-end" : ""}`}>
                                    <Reveal>
                                        <span className="ghost-numeral text-[5.5rem] md:text-[7rem]" style={{ color: vt.accent, opacity: 0.35 }}>
                                            {v.index}
                                        </span>
                                    </Reveal>
                                    <Reveal delay={0.1}>
                                        <p className="mt-2 text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: vt.accent }}>
                                            {v.tagline}
                                        </p>
                                        <h3 className="mt-4 font-display font-medium text-4xl md:text-5xl leading-[1.05] tracking-tight">
                                            {v.name}
                                        </h3>
                                        <p className="mt-5 max-w-md text-white/65 leading-relaxed inline-block">{v.desc}</p>
                                    </Reveal>
                                    <Reveal delay={0.2}>
                                        <Link
                                            to={v.path}
                                            data-testid={`home-venture-${v.id}-link`}
                                            className="arrow-nudge mt-7 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold border-b border-white/20 pb-2 hover:border-white/60 transition-colors duration-400"
                                        >
                                            Explore {v.name} <ArrowRight size={15} />
                                        </Link>
                                    </Reveal>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>

        {/* ————— Founder ————— */}
        <section className="py-28 md:py-44 px-6 md:px-12 lg:px-20 relative overflow-hidden" data-testid="home-founder-section">
            <span className="ghost-numeral absolute -top-6 right-0 text-[16rem] md:text-[26rem] text-white/5 hidden md:block" aria-hidden="true">
                KS
            </span>
            <div className="relative max-w-4xl">
                <Reveal>
                    <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                        The Founder
                    </p>
                </Reveal>
                <h2 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                    <MaskedLines lines={[FOUNDER]} />
                </h2>
                <Reveal delay={0.2}>
                    <div className="mt-8 h-px w-24" style={{ background: T.accent }} />
                    <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/70">
                        The founder of Shri Sai Group, and the driving vision behind its four ventures —
                        Sai Neravu Trust, KIRA Boutique Designer, KY Travels and Shri Sai Tyre.
                    </p>
                    <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/35 italic">
                        Portrait and full profile to be added with the founder's photograph.
                    </p>
                </Reveal>
            </div>
        </section>

        {/* ————— Contact invitation ————— */}
        <ContactInvite
            theme={T}
            heading={["Speak with", "Shri Sai Group."]}
            note="Enquiries for any of our four ventures — or for the group itself — start here."
        />
    </motion.main>
);

export default Home;
