export const EASE = [0.19, 1, 0.22, 1];

export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (d = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: EASE, delay: d },
    }),
};

export const pageTransition = {
    initial: { opacity: 0, y: 28, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
    exit: { opacity: 0, y: -18, filter: "blur(4px)", transition: { duration: 0.4, ease: EASE } },
};
