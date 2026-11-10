import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
        const onScroll = () => setScrolled(window.scrollY > 40);
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
        `link-underline text-[13px] uppercase tracking-[0.18em] transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
        }`;

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
                    scrolled
                        ? "bg-[#050A15]/80 backdrop-blur-2xl border-b border-white/10"
                        : "bg-transparent border-b border-transparent"
                }`}
            >
                <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-[76px] text-[#FAFAFA]">
                    <Link to="/" data-testid="nav-logo" className="group flex items-baseline gap-2" aria-label="Shri Sai Group — home">
                        <span className="font-display text-2xl tracking-tight">Shri Sai</span>
                        <span
                            className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37] transition-transform duration-500 group-hover:translate-x-1 inline-block"
                        >
                            Group
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
                        {LINKS.map((l) => (
                            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkCls} data-testid={`nav-link-${l.label.toLowerCase()}`}>
                                {l.label}
                            </NavLink>
                        ))}
                        <div className="relative group" data-testid="nav-ventures-dropdown">
                            <button
                                className="text-[13px] uppercase tracking-[0.18em] opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                                aria-haspopup="true"
                            >
                                Ventures
                            </button>
                            <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 absolute left-1/2 -translate-x-1/2 top-full pt-5">
                                <div className="bg-[#0B1221]/95 backdrop-blur-2xl border border-white/10 py-3 min-w-[260px]">
                                    {VENTURES.map((v) => (
                                        <NavLink
                                            key={v.id}
                                            to={v.path}
                                            data-testid={`nav-dropdown-${v.id}`}
                                            className="flex items-center justify-between gap-6 px-6 py-3 text-sm tracking-wide text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
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
                            className="border border-[#D4AF37]/60 px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050A15] transition-colors duration-400"
                        >
                            Contact Us
                        </NavLink>
                    </nav>

                    <button
                        data-testid="nav-mobile-menu-button"
                        onClick={() => setOpen(true)}
                        className="lg:hidden p-2 -mr-2"
                        aria-label="Open menu"
                        aria-expanded={open}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        data-testid="nav-mobile-overlay"
                        className="fixed inset-0 z-[110] bg-[#050A15] flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <div className="flex items-center justify-between px-6 h-[76px] text-[#FAFAFA]">
                            <span className="font-display text-2xl tracking-tight">
                                Shri Sai <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37] font-sans">Group</span>
                            </span>
                            <button
                                data-testid="nav-mobile-close-button"
                                onClick={() => setOpen(false)}
                                className="p-2 -mr-2"
                                aria-label="Close menu"
                            >
                                <X size={26} />
                            </button>
                        </div>
                        <nav className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto" aria-label="Mobile">
                            {[...LINKS, ...VENTURES.map((v) => ({ to: v.path, label: v.name }))].map((l, i) => (
                                <div key={l.to} className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: "110%" }}
                                        animate={{ y: "0%" }}
                                        exit={{ y: "110%" }}
                                        transition={{ duration: 0.6, ease: EASE, delay: 0.06 * i }}
                                    >
                                        <NavLink
                                            to={l.to}
                                            end={l.to === "/"}
                                            data-testid={`nav-mobile-${l.to.replace(/\//g, "") || "home"}`}
                                            onClick={() => setOpen(false)}
                                            className={({ isActive }) =>
                                                `block py-3 font-display text-4xl tracking-tight transition-colors duration-300 ${
                                                    isActive ? "text-[#D4AF37]" : "text-[#FAFAFA] hover:text-[#D4AF37]"
                                                }`
                                            }
                                        >
                                            {l.label}
                                        </NavLink>
                                    </motion.div>
                                </div>
                            ))}
                        </nav>
                        <div className="px-8 pb-10 text-white/40 text-xs uppercase tracking-[0.2em]">
                            A Legacy of Trust. A Vision for Tomorrow.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Nav;
