// ServiceCard.js
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, link }) => {
    return (
        <div
            className="bg-[#310] h-64 rounded-lg shadow-md p-6 flex flex-col items-center"
        >
            <h3 className="text-yellow-500 text-center text-2xl font-bold mb-2">{title}</h3>
            <p className="text-yellow-100 text-xl font-semibold text-center mb-4">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 font-semibold text-xl hover:underline cursor-pointer">
                Learn More
            </a>
        </div>
    );
};

export default ServiceCard;