import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "../../lib/anim";

/* Line-by-line masked heading reveal.
   Fires when scrolled into view, with a safety timeout so the text
   is never trapped invisible below its clip mask. */
export const MaskedLines = ({ lines, delay = 0, className = "", lineClassName = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
    const [forced, setForced] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setForced(true), 1500 + delay * 1000);
        return () => clearTimeout(t);
    }, [delay]);

    const show = inView || forced;

    return (
        <span ref={ref} className={className}>
            {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                    <motion.span
                        className={`block ${lineClassName}`}
                        initial={{ y: "115%", rotate: 1.5 }}
                        animate={show ? { y: "0%", rotate: 0 } : { y: "115%", rotate: 1.5 }}
                        transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.14 }}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

export default MaskedLines;
