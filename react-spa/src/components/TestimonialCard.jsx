import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiUser } from "react-icons/fi";

const TestimonialCard = ({ testimonial, name, start, end }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const x = useTransform(scrollYProgress, [0, 1], [start, end]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, x }}
        >
            <div className="bg-[#310] text-gray-800 rounded-lg shadow-md p-6 mx-10 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="mb-4 bg-yellow-800 rounded-full p-4 md:p-6 ">
                <FiUser className="text-4xl md:text-6xl text-[#310]" />
            </div>
            <p className="text-yellow-100 text-xl font-semibold text-center mb-4">"{testimonial}"</p>
            <p className="text-yellow-500 font-semibold text-xl hover:underline">{name}</p>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;