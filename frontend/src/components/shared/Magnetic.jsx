import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/* Magnetic hover wrapper — child element gravitates toward the pointer. */
export const Magnetic = ({ children, strength = 0.32, className = "" }) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
    const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

    const onMove = (e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const onLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ x: sx, y: sy, display: "inline-block" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
