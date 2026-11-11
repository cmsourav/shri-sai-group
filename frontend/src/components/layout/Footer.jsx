import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { VENTURES, CONTACT, FOUNDER } from "../../lib/site";
import Reveal from "../motion/Reveal";

export const Footer = () => (
    <footer className="bg-[#03060D] text-[#F5F5F5] border-t border-white/10 overflow-hidden" data-testid="site-footer">
        {/* Giant wordmark */}
        <div className="px-6 md:px-12 lg:px-16 pt-20 pb-6">
            <Reveal variant="up" duration={1.1}>
                <Link to="/" data-testid="footer-logo" aria-label="Shri Sai Group — home" className="block select-none">
                    <span className="font-display font-light leading-[0.85] tracking-tight text-[16.5vw] md:text-[13vw] block whitespace-nowrap">
                        Shri Sai
                        <span className="text-[#D4AF37]">.</span>
                    </span>
                </Link>
            </Reveal>
        </div>

        <div className="px-6 md:px-12 lg:px-16 pt-10 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 border-t border-white/10 pt-14">
                <div className="lg:col-span-4">
                    <p className="text-white/55 max-w-xs leading-relaxed font-light">
                        A Legacy of Trust. A Vision for Tomorrow.
                        <br />
                        Diversified Ventures. Shared Values.
                    </p>
                    <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/35">
                        Founded by {FOUNDER}
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        data-testid="footer-back-to-top"
                        className="group mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] font-semibold text-[#D4AF37] border border-[#D4AF37]/40 px-5 py-3 hover:bg-[#D4AF37] hover:text-[#03060D] transition-colors duration-400"
                    >
                        Back to top
                        <ArrowUp size={13} className="transition-transform duration-400 group-hover:-translate-y-1" />
                    </button>
                </div>

                <div className="lg:col-span-5">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/40 mb-7">Our Ventures</h3>
                    <ul className="space-y-1">
                        {VENTURES.map((v) => (
                            <li key={v.id} className="border-b border-white/5">
                                <Link
                                    to={v.path}
                                    data-testid={`footer-venture-${v.id}`}
                                    className="group flex items-center justify-between py-4 text-xl md:text-2xl font-display font-light text-white/75 hover:text-[#D4AF37] hover:pl-3 transition-all duration-400"
                                >
                                    {v.name}
                                    <ArrowUpRight
                                        size={18}
                                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/40 mb-7">Contact</h3>
                    <ul className="space-y-3.5 text-white/65 text-sm font-light">
                        <li data-testid="footer-contact-phone">
                            {CONTACT.phone.href ? (
                                <a href={CONTACT.phone.href} className="link-underline">{CONTACT.phone.display}</a>
                            ) : (
                                <span className="text-white/35 italic">{CONTACT.phone.display} <span className="not-italic text-[10px] uppercase tracking-widest border border-dashed border-white/25 px-2 py-0.5 ml-1">to be updated</span></span>
                            )}
                        </li>
                        <li data-testid="footer-contact-email">
                            {CONTACT.email.href ? (
                                <a href={CONTACT.email.href} className="link-underline">{CONTACT.email.display}</a>
                            ) : (
                                <span className="text-white/35 italic">{CONTACT.email.display}</span>
                            )}
                        </li>
                        <li data-testid="footer-contact-whatsapp">
                            {CONTACT.whatsapp.href ? (
                                <a href={CONTACT.whatsapp.href} className="link-underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            ) : (
                                <span className="text-white/35 italic">{CONTACT.whatsapp.display}</span>
                            )}
                        </li>
                        <li data-testid="footer-contact-address" className="text-white/35 italic">{CONTACT.address.display}</li>
                        <li data-testid="footer-contact-instagram" className="text-white/35 italic">{CONTACT.instagram.display}</li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 pt-7 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.28em] text-white/30">
                <span>Shri Sai Group — All four ventures under one roof</span>
                <Link to="/contact" className="link-underline" data-testid="footer-contact-link">
                    Contact Shri Sai Group
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;
