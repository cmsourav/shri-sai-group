import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* Sharp editorial button with accent fill sweep from bottom */
export const CtaButton = ({ to, href, label, accent = "#D4AF37", fillText = "#0A0A0A", testId, external = false }) => {
    const cls =
        "group relative inline-flex items-center gap-3 overflow-hidden border px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] transition-colors duration-500";
    const inner = (
        <>
            <span
                className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
                style={{ background: accent }}
                aria-hidden="true"
            />
            <span className="relative transition-colors duration-500" style={{ color: "inherit" }}>
                {label}
            </span>
            <ArrowRight size={15} className="relative transition-transform duration-500 group-hover:translate-x-1.5" />
        </>
    );
    const style = { borderColor: accent };

    if (to)
        return (
            <Link to={to} data-testid={testId} className={cls} style={style}>
                <span className="contents">{inner}</span>
            </Link>
        );
    return (
        <a
            href={href}
            data-testid={testId}
            className={cls}
            style={style}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            {inner}
        </a>
    );
};

/* Same button but hover-invert text colour for light backgrounds */
export const CtaButtonFilled = ({ to, label, accent = "#D4AF37", testId }) => (
    <Link
        to={to}
        data-testid={testId}
        className="group relative inline-flex items-center gap-3 overflow-hidden border px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] transition-colors duration-500"
        style={{ borderColor: accent }}
    >
        <span
            className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
            style={{ background: accent }}
            aria-hidden="true"
        />
        <span className="relative transition-colors duration-500 group-hover:text-white">{label}</span>
        <ArrowRight size={15} className="relative transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-white" />
    </Link>
);

export default CtaButton;
