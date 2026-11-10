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
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.35, ease: EASE } },
};
