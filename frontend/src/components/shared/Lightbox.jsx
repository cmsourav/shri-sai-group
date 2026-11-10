import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

export const Lightbox = ({ images, index, onClose, onNav }) => {
    const open = index !== null && index >= 0;
    const current = open ? images[index] : null;

    const prev = useCallback(() => onNav((index - 1 + images.length) % images.length), [index, images.length, onNav]);
    const next = useCallback(() => onNav((index + 1) % images.length), [index, images.length, onNav]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose, prev, next]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    data-testid="lightbox-overlay"
                    className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                    onClick={onClose}
                >
                    <button
                        data-testid="lightbox-close"
                        onClick={onClose}
                        aria-label="Close viewer"
                        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 z-10"
                    >
                        <X size={26} />
                    </button>
                    <a
                        data-testid="lightbox-download"
                        href={current.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        aria-label="Download image"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-6 right-20 text-white/80 hover:text-white transition-colors p-2 z-10"
                    >
                        <Download size={24} />
                    </a>
                    {images.length > 1 && (
                        <>
                            <button
                                data-testid="lightbox-prev"
                                onClick={(e) => { e.stopPropagation(); prev(); }}
                                aria-label="Previous image"
                                className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-3 z-10"
                            >
                                <ChevronLeft size={34} />
                            </button>
                            <button
                                data-testid="lightbox-next"
                                onClick={(e) => { e.stopPropagation(); next(); }}
                                aria-label="Next image"
                                className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-3 z-10"
                            >
                                <ChevronRight size={34} />
                            </button>
                        </>
                    )}
                    <motion.figure
                        key={current.src}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                        className="max-w-[90vw]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={current.src}
                            alt={current.alt || ""}
                            className="max-h-[82vh] w-auto max-w-full object-contain"
                        />
                        {current.alt && (
                            <figcaption className="mt-4 text-center text-sm text-white/60 tracking-wide">
                                {current.alt}
                            </figcaption>
                        )}
                    </motion.figure>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
