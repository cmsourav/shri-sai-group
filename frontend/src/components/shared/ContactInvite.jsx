import Reveal from "../motion/Reveal";
import MaskedLines from "../motion/MaskedLines";
import { CtaButton } from "./CtaButton";

/* Visually impactful contact invitation band used across pages */
export const ContactInvite = ({ theme, heading = ["Let's start a", "conversation."], note }) => (
    <section
        className="relative py-32 md:py-48 px-6 md:px-12 lg:px-16 border-t overflow-hidden"
        style={{ background: theme.surface, borderColor: `${theme.fg}1A` }}
        data-testid="contact-invite-section"
    >
        <span
            aria-hidden="true"
            className="absolute -bottom-[6vw] right-0 font-display italic font-light text-[22vw] leading-none text-transparent select-none pointer-events-none"
            style={{ WebkitTextStroke: `1px ${theme.accent}`, opacity: 0.1 }}
        >
            Talk
        </span>
        <div className="relative max-w-5xl">
            <Reveal variant="left" duration={0.8}>
                <p className="flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-9" style={{ color: theme.accent }}>
                    <span className="inline-block h-px w-10 md:w-14" style={{ background: theme.accent }} aria-hidden="true" />
                    Get in touch
                </p>
            </Reveal>
            <h2 className="font-display font-light text-6xl md:text-7xl lg:text-8xl leading-[0.94] tracking-tight">
                <MaskedLines lines={heading} />
            </h2>
            {note && (
                <Reveal delay={0.25}>
                    <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed opacity-70 font-light">{note}</p>
                </Reveal>
            )}
            <Reveal delay={0.35}>
                <div className="mt-12">
                    <CtaButton to="/contact" label="Contact Shri Sai Group" accent={theme.accent} testId="contact-invite-cta" />
                </div>
            </Reveal>
        </div>
    </section>
);

export default ContactInvite;
