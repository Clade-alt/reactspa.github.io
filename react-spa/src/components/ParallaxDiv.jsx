import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const ParallaxDiv = ({ text, className, start, end }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start - 0.5, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.div
            className={className}
            ref={ref}
            style={{ transform, opacity }}
        >
            <p className="mb-8">{text}</p>
        </motion.div>
    );
};

export default ParallaxDiv;