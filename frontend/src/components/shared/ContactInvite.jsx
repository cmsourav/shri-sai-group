import Reveal from "../motion/Reveal";
import MaskedLines from "../motion/MaskedLines";
import { CtaButton } from "./CtaButton";

/* Visually impactful contact invitation band used across pages */
export const ContactInvite = ({ theme, heading = ["Let's start a", "conversation."], note }) => (
    <section
        className="py-28 md:py-40 px-6 md:px-12 lg:px-20 border-t"
        style={{ background: theme.surface, borderColor: `${theme.fg}1A` }}
        data-testid="contact-invite-section"
    >
        <div className="max-w-5xl">
            <Reveal>
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold mb-8" style={{ color: theme.accent }}>
                    Get in touch
                </p>
            </Reveal>
            <h2 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                <MaskedLines lines={heading} />
            </h2>
            {note && (
                <Reveal delay={0.2}>
                    <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed opacity-70">{note}</p>
                </Reveal>
            )}
            <Reveal delay={0.3}>
                <div className="mt-10">
                    <CtaButton to="/contact" label="Contact Shri Sai Group" accent={theme.accent} testId="contact-invite-cta" />
                </div>
            </Reveal>
        </div>
    </section>
);

export default ContactInvite;
