import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const ServiceCard = ({ title, description, link, start, end }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.75]);

    const y = useTransform(scrollYProgress, [0, 1], [start - 0.5, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.div
            ref={ref}
            style={{ transform, opacity }}
        >
            <div className="bg-[#310] w-84 h-64 rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-yellow-500 text-left text-2xl font-bold mb-4">{title}</h3>
                <p className="text-yellow-100 text-base h-24 font-semibold text-left mb-6">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 font-semibold text-xl hover:underline cursor-pointer">
                    Learn More
                </a>
            </div>
        </motion.div >
    );
};

export default ServiceCard;