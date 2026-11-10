import { motion } from "framer-motion";
import { EASE } from "../../lib/anim";

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE, delay }}
    >
        {children}
    </motion.div>
);

export default Reveal;
