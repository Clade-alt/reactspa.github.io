// PortfolioCard.js
import { motion } from "framer-motion";

const PortfolioCard = ({ title, description, image }) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }} // Start smaller and transparent
            whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and opacity
            whileHover={{ scale: 1.05 }} // Scale up on hover
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="bg-yellow-500 rounded-lg shadow-lg overflow-hidden"
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" /> {/* Image */}
            <div className="p-4">
                <h3 className="text-[#310] text-2xl text-center font-bold mb-2">{title}</h3>
                <p className="text-yellow-900 text-xl text-center font-semibold">{description}</p>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;