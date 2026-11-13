import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MaskedLines from "../motion/MaskedLines";
import Reveal from "../motion/Reveal";
import { EASE } from "../../lib/anim";

/*
 * Ultra-cinematic hero: oversized bleeding display type, slow-ken-burns
 * image behind a light scrim, parallax drift on scroll, optional
 * giant outlined word watermark, edge meta strip.
 */
export const Hero = ({
    image,
    imageAlt = "",
    video,
    overline,
    lines,
    subtitle,
    children,
    giantWord,
    accent = "#D4AF37",
    h1ClassName = "text-[15vw] md:text-[9.5vw] lg:text-[8.5vw]",
}) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "34%"]);
    const contentScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.94]);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    return (
        <header ref={ref} className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-black">
            <motion.div style={reduce ? undefined : { y }} className="absolute inset-0">
                {video && !reduce ? (
                    <motion.video
                        src={video}
                        poster={image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-label={imageAlt}
                        initial={{ scale: 1.14 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2.4, ease: EASE }}
                        className="h-[118%] w-full object-cover"
                    />
                ) : (
                    <motion.img
                        src={image}
                        alt={imageAlt}
                        fetchPriority="high"
                        initial={{ scale: 1.14 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2.4, ease: EASE }}
                        className="h-[118%] w-full object-cover"
                    />
                )}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(4,7,15,0.5) 0%, rgba(4,7,15,0.25) 45%, rgba(4,7,15,0.78) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(90deg, rgba(4,7,15,0.55) 0%, transparent 55%)" }}
                />
            </motion.div>

            {giantWord && (
                <span
                    aria-hidden="true"
                    className="absolute bottom-[2vw] left-0 right-0 text-center font-display italic font-light text-[24vw] leading-none text-transparent select-none pointer-events-none"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.09)" }}
                >
                    {giantWord}
                </span>
            )}

            <motion.div
                style={reduce ? undefined : { y: contentY, opacity, scale: contentScale }}
                className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-24 md:pb-32 pt-48 text-[#F5F5F5]"
            >
                {/* ambient glow behind headline */}
                <div
                    className="absolute -top-24 -left-24 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${accent}14 0%, transparent 60%)` }}
                    aria-hidden="true"
                />
                {overline && (
                    <Reveal variant="left" duration={0.8}>
                        <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-8" style={{ color: accent }}>
                            <span className="inline-block h-px w-10 md:w-16" style={{ background: accent }} aria-hidden="true" />
                            {overline}
                        </p>
                    </Reveal>
                )}
                <h1 className={`font-display font-light leading-[0.92] tracking-[-0.02em] ${h1ClassName}`}>
                    <MaskedLines lines={lines} delay={0.2} />
                </h1>
                {subtitle && (
                    <Reveal delay={0.6} y={26}>
                        <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/75 font-light">
                            {subtitle}
                        </p>
                    </Reveal>
                )}
                {children && <div className="mt-12">{children}</div>}
            </motion.div>

            <div className="absolute bottom-0 inset-x-0 z-10 px-6 md:px-12 lg:px-16 pb-6 hidden md:flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-white/35">
                <span>A Legacy of Trust</span>
                <span>A Vision for Tomorrow</span>
            </div>
        </header>
    );
};

export default Hero;
