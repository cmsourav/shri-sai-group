import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "../motion/Reveal";
import { THEMES } from "../../lib/site";

/*
 * Immersive venture showcase.
 * Desktop (lg+): pinned horizontal scroll driven by vertical scroll.
 * Below lg: vertical editorial stack (no scroll hijack on touch).
 * Content identical in both modes — only presentation differs.
 */
const Panel = ({ v, wide = false }) => {
    const vt = THEMES[v.theme];
    return (
        <article
            className={`group relative shrink-0 overflow-hidden ${
                wide ? "h-full w-[86vw] md:w-[64vw] lg:w-[56vw]" : "w-full"
            }`}
            data-testid={`home-venture-${v.id}`}
        >
            <Link to={v.path} className="zoom-frame block h-full w-full" data-testid={`home-venture-${v.id}-image`} aria-label={`${v.name} — open page`}>
                <div className="relative h-full min-h-[70vh] lg:min-h-0 w-full">
                    <img src={v.image} alt={v.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div
                        className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-90"
                        style={{ background: "linear-gradient(180deg, rgba(4,7,15,0.05) 30%, rgba(4,7,15,0.82) 100%)" }}
                    />
                    <span
                        className="ghost-numeral absolute top-6 right-6 text-[6rem] md:text-[8rem] leading-none text-transparent"
                        style={{ WebkitTextStroke: `1px ${vt.accent}`, opacity: 0.55 }}
                        aria-hidden="true"
                    >
                        {v.index}
                    </span>
                    <div className="absolute bottom-0 inset-x-0 p-7 md:p-10 text-white">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.32em] font-semibold mb-3" style={{ color: vt.accent }}>
                            {v.tagline}
                        </p>
                        <h3 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                            {v.name}
                        </h3>
                        <p className="mt-4 max-w-md text-sm md:text-base text-white/70 font-light leading-relaxed">{v.desc}</p>
                        <span
                            className="arrow-nudge mt-6 inline-flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.26em] font-semibold border-b pb-2 transition-colors duration-400"
                            style={{ borderColor: `${vt.accent}66`, color: vt.accent }}
                            data-testid={`home-venture-${v.id}-link`}
                        >
                            Explore {v.name} <ArrowRight size={14} />
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export const HorizontalShowcase = ({ ventures }) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-74%"]);

    return (
        <>
            {/* Desktop pinned horizontal scroll */}
            {!reduce && (
                <div ref={ref} className="hidden lg:block relative h-[420vh]">
                    <div className="sticky top-0 h-screen overflow-hidden">
                        <motion.div style={{ x }} className="flex h-full items-stretch">
                            <div className="shrink-0 h-full w-[34vw] flex flex-col justify-center px-16">
                                <p className="text-xs uppercase tracking-[0.4em] font-semibold text-[#D4AF37] mb-6 flex items-center gap-4">
                                    <span className="inline-block h-px w-14 bg-[#D4AF37]" aria-hidden="true" />
                                    Scroll
                                </p>
                                <h2 className="font-display font-light text-6xl xl:text-7xl leading-[0.95] tracking-tight">
                                    Four stories,
                                    <br />
                                    one roof.
                                </h2>
                            </div>
                            {ventures.map((v) => (
                                <Panel key={v.id} v={v} wide />
                            ))}
                            <div className="shrink-0 h-full w-[10vw]" />
                        </motion.div>
                        {/* progress line */}
                        <motion.div
                            className="absolute bottom-8 left-16 right-16 h-px bg-white/10"
                            aria-hidden="true"
                        >
                            <motion.div className="h-full bg-[#D4AF37] origin-left" style={{ scaleX: scrollYProgress }} />
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Mobile / tablet vertical stack (also reduced-motion fallback on desktop) */}
            <div className={`${reduce ? "" : "lg:hidden"} space-y-14 px-6 md:px-12 pb-24`}>
                <div className={reduce ? "hidden lg:block lg:px-16" : ""}>
                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.4em] font-semibold text-[#D4AF37] mb-6 flex items-center gap-4">
                            <span className="inline-block h-px w-14 bg-[#D4AF37]" aria-hidden="true" />
                            Our Ventures
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.95] tracking-tight mb-12">
                            Four stories,
                            <br />
                            one roof.
                        </h2>
                    </Reveal>
                </div>
                {ventures.map((v, i) => (
                    <Reveal key={v.id} delay={0.05 * i} y={60}>
                        <div className="h-[70vh]">
                            <Panel v={v} />
                        </div>
                    </Reveal>
                ))}
            </div>
        </>
    );
};

export default HorizontalShowcase;
