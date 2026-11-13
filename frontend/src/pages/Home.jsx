import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/layout/Hero";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import ParallaxImage from "@/components/motion/ParallaxImage";
import ContactInvite from "@/components/shared/ContactInvite";
import { CtaButton } from "@/components/shared/CtaButton";
import Marquee from "@/components/shared/Marquee";
import HorizontalShowcase from "@/components/shared/HorizontalShowcase";
import ExpandingVentures from "@/components/shared/ExpandingVentures";
import { THEMES, IMG, VENTURES, FOUNDER } from "@/lib/site";
import { pageTransition } from "@/lib/anim";

const T = THEMES.parent;

/* Pinned founder chapter — image holds while the editorial text sweeps past */
const FounderChapter = () => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
    const textY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

    return (
        <section ref={ref} className="relative h-[180vh]" data-testid="home-founder-section">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                <motion.div style={reduce ? undefined : { scale: imgScale }} className="absolute inset-0">
                    <img src={IMG.founderTexture} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-transparent to-[#050A14]" />
                </motion.div>
                <motion.div
                    style={reduce ? undefined : { y: textY }}
                    className="relative z-10 px-6 md:px-12 lg:px-16 max-w-5xl"
                >
                    <Reveal variant="left" duration={0.8}>
                        <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                            <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                            The Founder
                        </p>
                    </Reveal>
                    <h2 className="font-display font-light text-[13vw] md:text-7xl lg:text-[6.5rem] leading-[0.92] tracking-tight">
                        <MaskedLines lines={[FOUNDER]} />
                    </h2>
                    <Reveal delay={0.25}>
                        <div className="mt-9 h-px w-28" style={{ background: T.accent }} />
                        <p className="mt-9 max-w-xl text-base md:text-lg leading-relaxed text-white/70 font-light">
                            The founder of Shri Sai Group, and the driving vision behind its four ventures —
                            Sai Neravu Trust, KIRA Boutique Designer, KY Travels and Shri Sai Tyre.
                        </p>
                        <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-white/35 italic">
                            Portrait and full profile to be added with the founder's photograph.
                        </p>
                    </Reveal>
                </motion.div>
            </div>
        </section>
    );
};

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
            giantWord="Sai"
        >
            <div className="flex flex-wrap items-center gap-8">
                <CtaButton to="/contact" label="Contact Shri Sai Group" accent={T.accent} testId="home-hero-cta" />
                <a
                    href="#intro"
                    data-testid="home-scroll-indicator"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] opacity-70 hover:opacity-100 transition-opacity"
                >
                    <ChevronDown size={16} className="scroll-hint-dot" />
                    Scroll to explore
                </a>
            </div>
        </Hero>

        {/* ————— Introduction ————— */}
        <section id="intro" className="py-32 md:py-48 px-6 md:px-12 lg:px-16" data-testid="home-intro-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
                <div className="lg:col-span-7">
                    <Reveal variant="left" duration={0.8}>
                        <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                            <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                            The Group
                        </p>
                    </Reveal>
                    <h2 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight">
                        <MaskedLines
                            lines={[
                                "One group. Four ventures.",
                                "One set of values that",
                                "runs through them all.",
                            ]}
                        />
                    </h2>
                    <Reveal delay={0.25}>
                        <p className="mt-12 max-w-xl text-base md:text-lg leading-relaxed text-white/70 font-light">
                            Shri Sai Group is a diversified business group founded by{" "}
                            <span className="text-white">{FOUNDER}</span>. From community service to design,
                            from the open road to the workshop floor, every venture in the group is built on the
                            same foundation — trust, craft and a commitment to the people it serves.
                        </p>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
                            {["Trust", "Craft", "Community", "Ambition"].map((v) => (
                                <span key={v} className="text-xs uppercase tracking-[0.3em] text-white/45 border-b border-white/15 pb-2">
                                    {v}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <Link
                            to="/about"
                            data-testid="home-intro-about-link"
                            className="arrow-nudge mt-14 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] font-semibold"
                            style={{ color: T.accent }}
                        >
                            More about the group <ArrowRight size={15} />
                        </Link>
                    </Reveal>
                </div>
                <div className="lg:col-span-5 lg:pl-6 lg:pt-24">
                    <Reveal variant="up" duration={1.1}>
                        <ParallaxImage
                            src={IMG.corporate2}
                            alt="Contemporary business architecture"
                            className="aspect-[4/5] w-full"
                        />
                    </Reveal>
                </div>
            </div>
        </section>

        {/* ————— Ventures — expanding flex cards ————— */}
        <ExpandingVentures />

        {/* ————— Ventures marquee ————— */}
        <div className="border-y border-white/10 py-6 md:py-8 text-white/25">
            <Marquee
                items={["Sai Neravu Trust", "KIRA Boutique Designer", "KY Travels", "Shri Sai Tyre"]}
                duration={32}
                itemClassName="font-display italic font-light text-4xl md:text-6xl"
            />
        </div>

        {/* ————— Ventures — horizontal cinematic showcase ————— */}
        <section className="pt-24 md:pt-36 border-t border-white/10" style={{ background: T.surface }} data-testid="home-ventures-section">
            <div className="px-6 md:px-12 lg:px-16 mb-16 md:mb-20 lg:hidden">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-7" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Our Ventures
                    </p>
                </Reveal>
                <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.95] tracking-tight">
                    <MaskedLines lines={["Four stories,", "one roof."]} />
                </h2>
            </div>
            <HorizontalShowcase ventures={VENTURES} />
        </section>

        {/* ————— Founder — pinned chapter ————— */}
        <FounderChapter />

        {/* ————— Contact invitation ————— */}
        <ContactInvite
            theme={T}
            heading={["Speak with", "Shri Sai Group."]}
            note="Enquiries for any of our four ventures — or for the group itself — start here."
        />
    </motion.main>
);

export default Home;
