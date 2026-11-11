import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Custom dot + trailing ring cursor — desktop fine pointers only. */
export const Cursor = () => {
    const [enabled, setEnabled] = useState(false);
    const [hovering, setHovering] = useState(false);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const rx = useSpring(x, { stiffness: 320, damping: 30, mass: 0.6 });
    const ry = useSpring(y, { stiffness: 320, damping: 30, mass: 0.6 });

    useEffect(() => {
        const fine = window.matchMedia("(pointer: fine)").matches;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!fine || reduced) return;
        setEnabled(true);

        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            const t = e.target;
            setHovering(!!t.closest?.("a, button, [role='button'], select, input, textarea, label"));
        };
        window.addEventListener("mousemove", move, { passive: true });
        return () => window.removeEventListener("mousemove", move);
    }, [x, y]);

    if (!enabled) return null;

    return (
        <>
            <motion.div className="cursor-dot" style={{ x, y }} aria-hidden="true" />
            <motion.div className={`cursor-ring ${hovering ? "is-hover" : ""}`} style={{ x: rx, y: ry }} aria-hidden="true" />
        </>
    );
};

export default Cursor;
