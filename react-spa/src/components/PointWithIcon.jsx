import { motion } from "framer-motion";

const PointWithIcon = ({ icon, text }) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="flex items-center mb-6"
        >
            <div className="mr-3">{icon}</div>
            <motion.p className="text-base md:text-lg lg:text-xl">
                {text}
            </motion.p>
        </motion.div>
    );
};

export default PointWithIcon;