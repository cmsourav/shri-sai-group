import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MaskedLines from "../motion/MaskedLines";
import Reveal from "../motion/Reveal";

/*
 * Cinematic full-viewport hero.
 * Text sits bottom-left over a gently darkened, parallaxing photograph.
 */
export const Hero = ({
    image,
    imageAlt = "",
    overline,
    lines,
    subtitle,
    children,
    h1ClassName = "text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl",
}) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

    return (
        <header ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden bg-black">
            <motion.div style={reduce ? undefined : { y }} className="absolute inset-0">
                <img
                    src={image}
                    alt={imageAlt}
                    className="h-[118%] w-full object-cover"
                    fetchPriority="high"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.62) 100%)",
                    }}
                />
            </motion.div>

            <motion.div
                style={reduce ? undefined : { opacity }}
                className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20 md:pb-28 pt-44 text-[#FAFAFA]"
            >
                {overline && (
                    <Reveal>
                        <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold opacity-80 mb-6">
                            {overline}
                        </p>
                    </Reveal>
                )}
                <h1 className={`font-display font-medium leading-[1.02] tracking-tight ${h1ClassName}`}>
                    <MaskedLines lines={lines} delay={0.15} />
                </h1>
                {subtitle && (
                    <Reveal delay={0.55}>
                        <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed opacity-85">
                            {subtitle}
                        </p>
                    </Reveal>
                )}
                {children && <div className="mt-10">{children}</div>}
            </motion.div>
        </header>
    );
};

export default Hero;
