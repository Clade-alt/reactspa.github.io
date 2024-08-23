import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const PortfolioCard = ({ title, description, image, start, end }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.75]);

    const x = useTransform(scrollYProgress, [0, 1], [start - 0.5, end]);
    const transform = useMotionTemplate`translateX(${x}px) scale(${scale})`;

    return (
        <motion.div
            ref={ref}
            style={{ transform, opacity }}
        >
            <div className="bg-yellow-500 h-80 rounded-lg shadow-lg my-20 overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={image} alt={title} className="w-full h-48 object-cover" /> {/* Image */}
                <div className="p-4">
                    <h3 className="text-[#310] text-2xl text-center font-bold mb-2">{title}</h3>
                    <p className="text-yellow-900 text-xl text-center font-semibold">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;