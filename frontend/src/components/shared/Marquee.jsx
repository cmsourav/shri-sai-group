/* Seamless infinite marquee strip — visual device, text supplied by caller. */
export const Marquee = ({ items, reverse = false, duration = 40, className = "", itemClassName = "" }) => {
    const row = (key) => (
        <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
            {items.map((it, i) => (
                <span key={i} className="flex items-center">
                    <span className={`whitespace-nowrap px-6 md:px-10 ${itemClassName}`}>{it}</span>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-40" aria-hidden="true" />
                </span>
            ))}
        </div>
    );
    return (
        <div className={`overflow-hidden ${className}`}>
            <div
                className={`marquee-track ${reverse ? "reverse" : ""}`}
                style={{ "--marquee-duration": `${duration}s` }}
            >
                {row("a")}
                {row("b")}
            </div>
        </div>
    );
};

export default Marquee;
