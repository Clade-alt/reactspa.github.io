import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi"; // Import an avatar icon

const TestimonialCard = ({ testimonial, name }) => {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }} // Start off-screen and transparent
            whileInView={{ x: 0, opacity: 1 }} // Animate to position and full opacity
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="bg-[#310] text-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center"
        >
            <div className="mb-4 bg-yellow-800 rounded-full p-4 md:p-6"> {/* Circle background with responsive padding */}
                <FiUser className="text-4xl md:text-6xl text-[#310]" /> {/* Avatar icon with responsive size */}
            </div>
            <p className="text-yellow-100 text-xl font-semibold text-center mb-4">"{testimonial}"</p>
            <p className="text-yellow-500 font-semibold text-xl hover:underline">{name}</p>
        </motion.div>
    );
};

export default TestimonialCard;