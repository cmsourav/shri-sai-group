import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/* Image that drifts gently inside its frame while scrolling */
export const ParallaxImage = ({ src, alt = "", className = "", imgClassName = "", strength = 12 }) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

    return (
        <div ref={ref} className={`overflow-hidden rounded-[20px] ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                style={reduce ? undefined : { y }}
                className={`h-[124%] w-full object-cover ${imgClassName}`}
            />
        </div>
    );
};

export default ParallaxImage;
