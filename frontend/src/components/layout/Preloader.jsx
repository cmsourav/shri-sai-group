import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "../../lib/anim";

/* Cinematic curtain preloader — shows once per session, then splits away. */
export const Preloader = () => {
    const [show, setShow] = useState(() => {
        try {
            return !sessionStorage.getItem("ssg-preloaded");
        } catch {
            return false;
        }
    });

    useEffect(() => {
        if (!show) return;
        try {
            sessionStorage.setItem("ssg-preloaded", "1");
        } catch { /* ignore */ }
        const t = setTimeout(() => setShow(false), 2200);
        return () => clearTimeout(t);
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    data-testid="preloader"
                    className="fixed inset-0 z-[300] bg-[#04070F] flex flex-col items-center justify-center overflow-hidden"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1, ease: EASE }}
                >
                    <div className="overflow-hidden">
                        <motion.p
                            initial={{ y: "110%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                            className="text-[11px] md:text-xs uppercase tracking-[0.5em] text-[#D4AF37] font-semibold mb-6 text-center"
                        >
                            Shri Sai Group
                        </motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                            className="font-display font-medium text-3xl md:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight text-center px-6"
                        >
                            A Legacy of Trust. A Vision for Tomorrow.
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
                        className="mt-10 h-px w-40 md:w-64 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent origin-center"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
