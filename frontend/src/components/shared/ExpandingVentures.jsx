import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { VENTURES, THEMES } from "../../lib/site";
import { EASE } from "../../lib/anim";

/*
 * Expanding flex-cards for the four ventures.
 * Desktop (lg+): a full-width flex row — hovering a panel expands it while
 * the others collapse; clicking navigates to the venture page.
 * Mobile: vertical accordion — tap expands, an "Explore" link navigates.
 * Content (names, taglines, descriptions, images, destinations) is the
 * existing venture data — presentation only.
 */
export const ExpandingVentures = () => {
    const [active, setActive] = useState(0);
    const [mobileActive, setMobileActive] = useState(null);

    return (
        <>
            {/* ————— Desktop: expanding flex row ————— */}
            <section
                data-testid="expanding-ventures"
                className="hidden lg:flex h-[80vh] border-t border-white/10 overflow-hidden"
                aria-label="Our ventures"
            >
                {VENTURES.map((v, i) => {
                    const vt = THEMES[v.theme];
                    const isActive = active === i;
                    return (
                        <Link
                            key={v.id}
                            to={v.path}
                            data-testid={`expanding-venture-${v.id}`}
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            className="group relative block overflow-hidden border-r border-white/10 last:border-r-0"
                            style={{
                                flexGrow: isActive ? 3.4 : 1,
                                flexBasis: 0,
                                transition: "flex-grow 0.9s cubic-bezier(0.19, 1, 0.22, 1)",
                            }}
                            aria-label={`${v.name} — open page`}
                        >
                            <img
                                src={v.image}
                                alt={v.imageAlt}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                                style={{ transform: isActive ? "scale(1)" : "scale(1.12)" }}
                            />
                            <div
                                className="absolute inset-0 transition-opacity duration-700"
                                style={{
                                    background: isActive
                                        ? "linear-gradient(180deg, rgba(4,7,15,0.08) 30%, rgba(4,7,15,0.85) 100%)"
                                        : "linear-gradient(180deg, rgba(4,7,15,0.45) 0%, rgba(4,7,15,0.75) 100%)",
                                }}
                            />
                            {/* accent edge on active */}
                            <span
                                className="absolute top-0 left-0 right-0 h-[3px] origin-left transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                                style={{ background: vt.accent, transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
                                aria-hidden="true"
                            />
                            {/* index */}
                            <span
                                className="absolute top-7 left-7 text-[11px] tracking-[0.3em] font-semibold transition-colors duration-500"
                                style={{ color: isActive ? vt.accent : "rgba(255,255,255,0.45)" }}
                            >
                                {v.index}
                            </span>

                            {/* Collapsed: vertical name */}
                            <span
                                className="absolute bottom-8 left-7 font-display font-light text-3xl text-white/80 whitespace-nowrap transition-opacity duration-500"
                                style={{
                                    writingMode: "vertical-rl",
                                    transform: "rotate(180deg)",
                                    opacity: isActive ? 0 : 1,
                                }}
                                aria-hidden={isActive}
                            >
                                {v.name}
                            </span>

                            {/* Expanded: full detail */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        key="detail"
                                        initial={{ opacity: 0, y: 34 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.55, ease: EASE, delay: 0.18 }}
                                        className="absolute bottom-0 left-0 right-0 p-8 xl:p-10"
                                    >
                                        <p className="text-[10px] uppercase tracking-[0.32em] font-semibold mb-3" style={{ color: vt.accent }}>
                                            {v.tagline}
                                        </p>
                                        <h3 className="font-display font-light text-4xl xl:text-6xl leading-[0.95] tracking-tight text-white">
                                            {v.name}
                                        </h3>
                                        <p className="mt-4 max-w-sm text-sm text-white/70 font-light leading-relaxed">
                                            {v.desc}
                                        </p>
                                        <span
                                            className="arrow-nudge mt-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.26em] font-semibold border-b pb-2"
                                            style={{ borderColor: `${vt.accent}66`, color: vt.accent }}
                                        >
                                            Explore {v.name} <ArrowUpRight size={14} />
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Link>
                    );
                })}
            </section>

            {/* ————— Mobile / tablet: vertical accordion ————— */}
            <section className="lg:hidden border-t border-white/10" aria-label="Our ventures" data-testid="expanding-ventures-mobile">
                {VENTURES.map((v, i) => {
                    const vt = THEMES[v.theme];
                    const open = mobileActive === i;
                    return (
                        <div key={v.id} className="border-b border-white/10" data-testid={`expanding-venture-mobile-${v.id}`}>
                            <button
                                onClick={() => setMobileActive(open ? null : i)}
                                className="w-full flex items-center justify-between gap-4 px-6 py-6 text-left"
                                aria-expanded={open}
                                data-testid={`expanding-venture-toggle-${v.id}`}
                            >
                                <span className="flex items-baseline gap-4">
                                    <span className="text-[10px] tracking-[0.3em] font-semibold" style={{ color: vt.accent }}>
                                        {v.index}
                                    </span>
                                    <span className="font-display font-light text-3xl tracking-tight">{v.name}</span>
                                </span>
                                <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.4, ease: EASE }}>
                                    <Plus size={20} className="text-white/50" />
                                </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {open && (
                                    <motion.div
                                        key="panel"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: EASE }}
                                        className="overflow-hidden"
                                    >
                                        <Link to={v.path} className="block px-6 pb-8" data-testid={`expanding-venture-link-${v.id}`}>
                                            <div className="zoom-frame aspect-[16/9] mb-5">
                                                <img src={v.image} alt={v.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                                            </div>
                                            <p className="text-[10px] uppercase tracking-[0.28em] font-semibold mb-2" style={{ color: vt.accent }}>
                                                {v.tagline}
                                            </p>
                                            <p className="text-sm text-white/65 font-light leading-relaxed">{v.desc}</p>
                                            <span
                                                className="arrow-nudge mt-5 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.26em] font-semibold border-b pb-2"
                                                style={{ borderColor: `${vt.accent}66`, color: vt.accent }}
                                            >
                                                Explore {v.name} <ArrowUpRight size={14} />
                                            </span>
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default ExpandingVentures;
