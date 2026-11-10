import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { VENTURES, CONTACT, FOUNDER } from "../../lib/site";

export const Footer = () => (
    <footer className="bg-[#04070F] text-[#FAFAFA] border-t border-white/10" data-testid="site-footer">
        <div className="px-6 md:px-12 lg:px-20 pt-20 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                <div className="lg:col-span-5">
                    <Link to="/" className="inline-block" data-testid="footer-logo">
                        <span className="font-display text-4xl md:text-5xl tracking-tight">Shri Sai</span>{" "}
                        <span className="text-xs uppercase tracking-[0.35em] font-semibold text-[#D4AF37]">Group</span>
                    </Link>
                    <p className="mt-6 text-white/60 max-w-sm leading-relaxed">
                        A Legacy of Trust. A Vision for Tomorrow.
                        <br />
                        Diversified Ventures. Shared Values.
                    </p>
                    <p className="mt-8 text-xs uppercase tracking-[0.22em] text-white/40">
                        Founded by {FOUNDER}
                    </p>
                </div>

                <div className="lg:col-span-4">
                    <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/50 mb-6">Our Ventures</h3>
                    <ul className="space-y-3">
                        {VENTURES.map((v) => (
                            <li key={v.id}>
                                <Link
                                    to={v.path}
                                    data-testid={`footer-venture-${v.id}`}
                                    className="group inline-flex items-center gap-2 text-lg text-white/80 hover:text-[#D4AF37] transition-colors duration-300"
                                >
                                    {v.name}
                                    <ArrowUpRight
                                        size={16}
                                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/50 mb-6">Contact</h3>
                    <ul className="space-y-3 text-white/70 text-sm">
                        <li data-testid="footer-contact-phone">
                            {CONTACT.phone.href ? (
                                <a href={CONTACT.phone.href} className="link-underline">{CONTACT.phone.display}</a>
                            ) : (
                                <span className="text-white/40 italic">{CONTACT.phone.display} <span className="not-italic text-[11px] uppercase tracking-widest border border-dashed border-white/25 px-2 py-0.5 ml-1">to be updated</span></span>
                            )}
                        </li>
                        <li data-testid="footer-contact-email">
                            {CONTACT.email.href ? (
                                <a href={CONTACT.email.href} className="link-underline">{CONTACT.email.display}</a>
                            ) : (
                                <span className="text-white/40 italic">{CONTACT.email.display}</span>
                            )}
                        </li>
                        <li data-testid="footer-contact-whatsapp">
                            {CONTACT.whatsapp.href ? (
                                <a href={CONTACT.whatsapp.href} className="link-underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            ) : (
                                <span className="text-white/40 italic">{CONTACT.whatsapp.display}</span>
                            )}
                        </li>
                        <li data-testid="footer-contact-address" className="text-white/40 italic">{CONTACT.address.display}</li>
                        <li data-testid="footer-contact-instagram" className="text-white/40 italic">{CONTACT.instagram.display}</li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-white/35">
                <span>Shri Sai Group — All four ventures under one roof</span>
                <Link to="/contact" className="link-underline" data-testid="footer-contact-link">
                    Contact Shri Sai Group
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;
