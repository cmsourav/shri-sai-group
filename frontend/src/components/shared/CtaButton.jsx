import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

/* Premium CTA: magnetic pull, accent sweep fill, arrow slide. */
export const CtaButton = ({ to, href, label, accent = "#D4AF37", testId, external = false }) => {
    const cls =
        "group relative inline-flex items-center gap-3 overflow-hidden border px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.26em] transition-colors duration-500";
    const inner = (
        <>
            <span
                className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
                style={{ background: accent }}
                aria-hidden="true"
            />
            <span className="relative transition-colors duration-500 group-hover:text-[#050A14]">{label}</span>
            <ArrowRight
                size={15}
                className="relative transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-[#050A14]"
            />
        </>
    );
    const style = { borderColor: accent };

    const btn = to ? (
        <Link to={to} data-testid={testId} className={cls} style={style}>
            <span className="contents">{inner}</span>
        </Link>
    ) : (
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

    return <Magnetic>{btn}</Magnetic>;
};

export default CtaButton;
