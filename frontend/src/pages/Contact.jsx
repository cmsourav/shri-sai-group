import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Instagram, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/motion/Reveal";
import MaskedLines from "@/components/motion/MaskedLines";
import DemoForm from "@/components/shared/DemoForm";
import { THEMES, CONTACT, VENTURES } from "@/lib/site";
import { pageTransition } from "@/lib/anim";

const T = THEMES.parent;

const FORM_FIELDS = [
    { name: "name", label: "Name", required: true, placeholder: "Your full name" },
    { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "Your phone number" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
    {
        name: "type",
        label: "Enquiry type",
        type: "select",
        required: true,
        options: [
            "General — Shri Sai Group",
            "Sai Neravu Trust — contribution",
            "KIRA Boutique Designer — appointment",
            "KY Travels — booking / routes",
            "Shri Sai Tyre — products / services",
            "Other",
        ],
    },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "How can we help?" },
];

const ContactRow = ({ icon: Icon, label, value, href, testId }) => (
    <li className="group flex items-start gap-5 border-b border-white/10 pb-8" data-testid={testId}>
        <Icon size={18} className="mt-1 shrink-0 transition-transform duration-400 group-hover:-translate-y-0.5" style={{ color: T.accent }} />
        <div>
            <p className="text-[10px] uppercase tracking-[0.28em] font-semibold text-white/45 mb-2">{label}</p>
            {href ? (
                <a href={href} className="link-underline text-lg font-light" target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {value}
                </a>
            ) : (
                <p className="text-lg text-white/40 italic font-light">{value}</p>
            )}
        </div>
    </li>
);

const Contact = () => (
    <motion.main {...pageTransition}>
        <Seo
            title="Contact — Shri Sai Group"
            description="Contact Shri Sai Group — enquiries for Sai Neravu Trust, KIRA Boutique Designer, KY Travels and Shri Sai Tyre, or the group itself."
        />

        {/* Editorial hero */}
        <header className="min-h-[80svh] flex items-end px-6 md:px-12 lg:px-16 pb-20 pt-48 relative overflow-hidden">
            <span
                className="absolute -top-[2vw] right-0 font-display italic font-light text-[30vw] leading-none text-transparent select-none pointer-events-none hidden md:block"
                style={{ WebkitTextStroke: "1px rgba(212,175,55,0.1)" }}
                aria-hidden="true"
            >
                Talk
            </span>
            <div className="relative">
                <Reveal variant="left" duration={0.8}>
                    <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: T.accent }}>
                        <span className="inline-block h-px w-10 md:w-14" style={{ background: T.accent }} aria-hidden="true" />
                        Contact Shri Sai Group
                    </p>
                </Reveal>
                <h1 className="font-display font-light text-[20vw] md:text-[13vw] lg:text-[11vw] leading-[0.88] tracking-tight">
                    <MaskedLines lines={["Let's talk."]} />
                </h1>
                <Reveal delay={0.3}>
                    <p className="mt-9 max-w-xl text-base md:text-lg leading-relaxed text-white/65 font-light">
                        One doorway to the whole group — and to each of its four ventures.
                    </p>
                </Reveal>
            </div>
        </header>

        <section className="px-6 md:px-12 lg:px-16 pb-32 md:pb-44" data-testid="contact-main-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Details */}
                <div className="lg:col-span-5">
                    <Reveal>
                        <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight mb-12">Reach us directly</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <ul className="space-y-8">
                            <ContactRow icon={Phone} label="Official phone" value="Phone number — to be updated" testId="contact-phone" />
                            <ContactRow icon={Mail} label="Official email" value="Email address — to be updated" testId="contact-email" />
                            <ContactRow icon={MapPin} label="Office address" value="Office address & Google Maps link — to be updated" testId="contact-address" />
                            <ContactRow icon={MessageCircle} label="WhatsApp" value="WhatsApp number — to be updated" testId="contact-whatsapp" />
                            <ContactRow icon={Instagram} label="Social media" value="Social links — to be updated" testId="contact-social" />
                        </ul>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="mt-16">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/45 mb-7">Or go straight to a venture</h3>
                            <ul className="space-y-1 border-t border-white/10">
                                {VENTURES.map((v) => (
                                    <li key={v.id} className="border-b border-white/10">
                                        <Link
                                            to={v.path}
                                            data-testid={`contact-venture-${v.id}`}
                                            className="group flex items-center justify-between py-4 font-display font-light text-xl text-white/70 hover:text-[#D4AF37] hover:pl-3 transition-all duration-400"
                                        >
                                            {v.name}
                                            <ArrowRight size={15} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>

                {/* Form */}
                <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-16">
                    <Reveal>
                        <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight mb-4">General enquiry</h2>
                        <p className="text-sm text-white/50 mb-14 max-w-lg leading-relaxed font-light">
                            This form emails your enquiry straight to the group's inbox via EmailJS once the
                            keys are configured — until then it shows a clearly labelled demonstration notice.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <DemoForm
                            theme={T}
                            fields={FORM_FIELDS}
                            submitLabel="Contact Shri Sai Group"
                            formId="contact-enquiry"
                            recipientKey="group"
                            venture="Shri Sai Group"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    </motion.main>
);

export default Contact;
