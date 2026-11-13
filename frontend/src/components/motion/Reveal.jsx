import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "../../lib/anim";

const clipFor = (variant) =>
    variant === "left"
        ? ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
        : variant === "up"
          ? ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
          : null;

/*
 * Viewport reveal with a safety timeout so nothing can stay invisible.
 * variant: "fade" (default) | "left" | "up" (clip-mask wipes)
 */
export const Reveal = ({ children, delay = 0, y = 30, className = "", variant = "fade", duration = 1.1 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
    const [forced, setForced] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setForced(true), 1600 + delay * 1000);
        return () => clearTimeout(t);
    }, [delay]);

    const show = inView || forced;
    const clip = clipFor(variant);

    const initial = clip
        ? { clipPath: clip[0], opacity: variant === "up" ? 1 : 0.4 }
        : { opacity: 0, y };
    const animate = show
        ? clip
            ? { clipPath: clip[1], opacity: 1 }
            : { opacity: 1, y: 0 }
        : initial;

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={initial}
            animate={animate}
            transition={{ duration, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
