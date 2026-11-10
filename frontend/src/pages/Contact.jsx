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
    <li className="flex items-start gap-5 border-b border-white/10 pb-7" data-testid={testId}>
        <Icon size={18} className="mt-1 shrink-0" style={{ color: T.accent }} />
        <div>
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-white/50 mb-1.5">{label}</p>
            {href ? (
                <a href={href} className="link-underline text-lg" target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {value}
                </a>
            ) : (
                <p className="text-lg text-white/40 italic">{value}</p>
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
        <header className="min-h-[70svh] flex items-end px-6 md:px-12 lg:px-20 pb-20 pt-44 relative overflow-hidden">
            <span className="ghost-numeral absolute -top-10 right-0 text-[16rem] md:text-[26rem] text-white/5 hidden md:block" aria-hidden="true">
                C
            </span>
            <div className="relative">
                <Reveal>
                    <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: T.accent }}>
                        Contact Shri Sai Group
                    </p>
                </Reveal>
                <h1 className="font-display font-medium text-6xl md:text-8xl lg:text-9xl leading-[1.0] tracking-tight">
                    <MaskedLines lines={["Let's talk."]} />
                </h1>
                <Reveal delay={0.25}>
                    <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/65">
                        One doorway to the whole group — and to each of its four ventures.
                    </p>
                </Reveal>
            </div>
        </header>

        <section className="px-6 md:px-12 lg:px-20 pb-28 md:pb-40" data-testid="contact-main-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Details */}
                <div className="lg:col-span-5">
                    <Reveal>
                        <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-10">Reach us directly</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <ul className="space-y-7">
                            <ContactRow icon={Phone} label="Official phone" value="Phone number — to be updated" testId="contact-phone" />
                            <ContactRow icon={Mail} label="Official email" value="Email address — to be updated" testId="contact-email" />
                            <ContactRow icon={MapPin} label="Office address" value="Office address & Google Maps link — to be updated" testId="contact-address" />
                            <ContactRow icon={MessageCircle} label="WhatsApp" value="WhatsApp number — to be updated" testId="contact-whatsapp" />
                            <ContactRow icon={Instagram} label="Social media" value="Social links — to be updated" testId="contact-social" />
                        </ul>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="mt-14">
                            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/50 mb-6">Or go straight to a venture</h3>
                            <ul className="space-y-3">
                                {VENTURES.map((v) => (
                                    <li key={v.id}>
                                        <Link
                                            to={v.path}
                                            data-testid={`contact-venture-${v.id}`}
                                            className="group inline-flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
                                        >
                                            {v.name}
                                            <ArrowRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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
                        <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-4">General enquiry</h2>
                        <p className="text-sm text-white/50 mb-12 max-w-lg leading-relaxed">
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
