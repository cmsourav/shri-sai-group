import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { VENTURES } from "../../lib/site";
import { EASE } from "../../lib/anim";

const LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [open]);

    const linkCls = ({ isActive }) =>
        `link-underline text-[11px] uppercase tracking-[0.24em] font-medium transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-55 hover:opacity-100"
        }`;

    return (
        <>
            <motion.header
                initial={{ y: -90 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
                    scrolled
                        ? "bg-[#04070F]/85 backdrop-blur-2xl border-b border-white/10"
                        : "bg-transparent border-b border-transparent"
                }`}
            >
                <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 h-[84px] text-[#F5F5F5]">
                    <Link to="/" data-testid="nav-logo" className="group flex items-baseline gap-2.5" aria-label="Shri Sai Group — home">
                        <span className="font-display font-medium text-[26px] tracking-tight">Shri Sai</span>
                        <span className="text-[10px] uppercase tracking-[0.34em] font-semibold text-[#D4AF37] transition-transform duration-500 group-hover:translate-x-1 inline-block">
                            Group
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
                        {LINKS.map((l) => (
                            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkCls} data-testid={`nav-link-${l.label.toLowerCase()}`}>
                                {l.label}
                            </NavLink>
                        ))}
                        <div className="relative group" data-testid="nav-ventures-dropdown">
                            <button
                                className="text-[11px] uppercase tracking-[0.24em] font-medium opacity-55 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5"
                                aria-haspopup="true"
                            >
                                Ventures
                                <span className="inline-block h-1 w-1 rounded-full bg-[#D4AF37]" aria-hidden="true" />
                            </button>
                            <div className="invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-400 absolute left-1/2 -translate-x-1/2 top-full pt-6">
                                <div className="bg-[#070C18]/95 backdrop-blur-2xl border border-white/10 py-2 min-w-[280px]">
                                    {VENTURES.map((v) => (
                                        <NavLink
                                            key={v.id}
                                            to={v.path}
                                            data-testid={`nav-dropdown-${v.id}`}
                                            className="flex items-center justify-between gap-6 px-6 py-3.5 text-sm tracking-wide text-white/65 hover:text-white hover:bg-white/5 transition-colors duration-200"
                                        >
                                            {v.name}
                                            <ArrowUpRight size={14} className="opacity-50" />
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <NavLink
                            to="/contact"
                            data-testid="nav-contact-cta"
                            className="border border-[#D4AF37]/60 px-6 py-2.5 text-[10px] uppercase tracking-[0.26em] font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#04070F] transition-colors duration-400"
                        >
                            Contact Us
                        </NavLink>
                    </nav>

                    {/* Animated burger */}
                    <button
                        data-testid="nav-mobile-menu-button"
                        onClick={() => setOpen(true)}
                        className="lg:hidden relative p-2 -mr-2 w-10 h-10 flex flex-col items-center justify-center gap-[7px]"
                        aria-label="Open menu"
                        aria-expanded={open}
                    >
                        <span className={`block h-px w-6 bg-current transition-transform duration-400 ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
                        <span className={`block h-px w-6 bg-current transition-transform duration-400 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        data-testid="nav-mobile-overlay"
                        className="fixed inset-0 z-[110] bg-[#04070F] flex flex-col"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.6, ease: EASE }}
                    >
                        <div className="flex items-center justify-between px-6 h-[84px] text-[#F5F5F5]">
                            <span className="font-display font-medium text-[26px] tracking-tight">
                                Shri Sai <span className="text-[10px] uppercase tracking-[0.34em] font-semibold text-[#D4AF37] font-sans">Group</span>
                            </span>
                            <button
                                data-testid="nav-mobile-close-button"
                                onClick={() => setOpen(false)}
                                className="relative p-2 -mr-2 w-10 h-10 flex flex-col items-center justify-center"
                                aria-label="Close menu"
                            >
                                <span className="absolute block h-px w-6 bg-current rotate-45" />
                                <span className="absolute block h-px w-6 bg-current -rotate-45" />
                            </button>
                        </div>
                        <nav className="flex-1 flex flex-col justify-center px-8 overflow-y-auto" aria-label="Mobile">
                            {[...LINKS, ...VENTURES.map((v) => ({ to: v.path, label: v.name }))].map((l, i) => (
                                <div key={l.to} className="overflow-hidden border-b border-white/5">
                                    <motion.div
                                        initial={{ y: "110%" }}
                                        animate={{ y: "0%" }}
                                        exit={{ y: "110%" }}
                                        transition={{ duration: 0.7, ease: EASE, delay: 0.05 * i }}
                                    >
                                        <NavLink
                                            to={l.to}
                                            end={l.to === "/"}
                                            data-testid={`nav-mobile-${l.to.replace(/\//g, "") || "home"}`}
                                            onClick={() => setOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-baseline gap-4 py-3.5 font-display font-light text-[9.5vw] sm:text-5xl tracking-tight transition-colors duration-300 ${
                                                    isActive ? "text-[#D4AF37]" : "text-[#F5F5F5] hover:text-[#D4AF37]"
                                                }`
                                            }
                                        >
                                            <span className="font-sans text-[10px] tracking-[0.3em] text-white/30">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            {l.label}
                                        </NavLink>
                                    </motion.div>
                                </div>
                            ))}
                        </nav>
                        <div className="px-8 pb-10 text-white/35 text-[10px] uppercase tracking-[0.3em]">
                            A Legacy of Trust. A Vision for Tomorrow.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Nav;
