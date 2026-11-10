/* Small visible marker for unverified business details — never pretend these are real. */
export const PlaceholderChip = ({ note = "Placeholder — awaiting verified details", testId }) => (
    <span
        data-testid={testId}
        className="inline-flex items-center gap-1.5 border border-dashed px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] opacity-70 align-middle"
    >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
        {note}
    </span>
);

export default PlaceholderChip;
