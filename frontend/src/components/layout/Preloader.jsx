import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "../../lib/anim";
import { VENTURES, LOGO } from "../../lib/site";

const SLATS = 5;
const LOAD_MS = 2400;

/* Ultra-premium preloader: staggered letter reveal, gold progress line,
   live percentage counter, venture ticker — exits through a staggered
   five-slat curtain. Shows once per session. */
export const Preloader = () => {
    const [show, setShow] = useState(() => {
        try {
            return !sessionStorage.getItem("ssg-preloaded");
        } catch {
            return false;
        }
    });
    const [progress, setProgress] = useState(0);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        if (!show) return;
        try {
            sessionStorage.setItem("ssg-preloaded", "1");
        } catch { /* ignore */ }

        const start = performance.now();
        let raf;
        const tick = (now) => {
            const t = Math.min(1, (now - start) / LOAD_MS);
            const eased = 1 - Math.pow(1 - t, 3);
            setProgress(Math.round(eased * 100));
            if (t < 1) raf = requestAnimationFrame(tick);
            else setTimeout(() => setExiting(true), 350);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [show]);

    if (!show) return null;

    return (
        <div data-testid="preloader" className="fixed inset-0 z-[300] overflow-hidden" aria-hidden={exiting}>
            {/* Slat curtain background */}
            <div className="absolute inset-0 flex">
                {Array.from({ length: SLATS }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="h-full flex-1 bg-[#04070F] border-r border-white/[0.04] last:border-r-0"
                        initial={{ y: 0 }}
                        animate={exiting ? { y: "-100%" } : { y: 0 }}
                        transition={{ duration: 0.85, ease: EASE, delay: i * 0.09 }}
                        onAnimationComplete={i === SLATS - 1 && exiting ? () => setShow(false) : undefined}
                    />
                ))}
            </div>

            {/* Content layer */}
            <motion.div
                className="relative z-10 h-full flex flex-col"
                animate={exiting ? { opacity: 0, y: -30 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
            >
                {/* Center brand block */}
                <div className="flex-1 flex flex-col items-center justify-center px-6">
                    <div className="overflow-hidden mb-5">
                        <motion.p
                            initial={{ y: "110%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
                            className="text-[10px] md:text-[11px] uppercase tracking-[0.55em] text-white/40 font-medium text-center"
                        >
                            Diversified Ventures. Shared Values.
                        </motion.p>
                    </div>

                    <div className="overflow-hidden py-2">
                        <motion.img
                            src={LOGO}
                            alt="Shri Sai Group"
                            initial={{ y: "110%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            transition={{ duration: 0.95, ease: EASE, delay: 0.4 }}
                            className="h-20 sm:h-28 md:h-36 w-auto object-contain mx-auto"
                        />
                    </div>

                    <div className="overflow-hidden mt-6">
                        <motion.p
                            initial={{ y: "110%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 0.9, ease: EASE, delay: 1.15 }}
                            className="font-display italic font-light text-lg md:text-2xl text-[#D4AF37]/90 text-center"
                        >
                            A Legacy of Trust. A Vision for Tomorrow.
                        </motion.p>
                    </div>
                </div>

                {/* Bottom strip: venture ticker + counter */}
                <div className="px-6 md:px-12 pb-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.35 }}
                        className="flex items-end justify-between gap-6"
                    >
                        <div className="hidden md:flex flex-col gap-1 text-[10px] uppercase tracking-[0.3em] text-white/30">
                            {VENTURES.map((v, i) => (
                                <motion.span
                                    key={v.id}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, ease: EASE, delay: 1.45 + i * 0.12 }}
                                >
                                    {v.name}
                                </motion.span>
                            ))}
                        </div>
                        <div className="font-display font-light text-6xl md:text-8xl leading-none text-transparent tabular-nums"
                            style={{ WebkitTextStroke: "1px rgba(212,175,55,0.55)" }}
                        >
                            {String(progress).padStart(3, "0")}
                        </div>
                    </motion.div>

                    {/* Progress line */}
                    <div className="mt-6 h-px w-full bg-white/10 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37] to-[#D4AF37]/40 origin-left"
                            style={{ scaleX: progress / 100 }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Preloader;
