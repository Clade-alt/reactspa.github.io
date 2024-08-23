import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PortfolioCard from "./PortfolioCard"; // Import the PortfolioCard component

const PortfolioSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();

    // Parallax effect for the entire section
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -30]); // Adjust the range as needed

    return (
        <section className="bg-[#310] h-screen py-16 md:py-20 lg:py-24 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    className="text-white text-center mb-12"
                    style={{ translateY }} // Apply the parallax effect
                >
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        className="text-yellow-500 text-7xl md:text-7xl lg:text-8xl font-bold mb-8"
                    >
                        Our Portfolio
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1 }}
                        className="text-yellow-700 text-4xl md:text-3xl lg:text-5xl mb-8 text-center w-full"
                    >
                        Explore our latest projects and see how we've helped businesses grow.
                    </motion.p>
                </motion.div>

                {/* Portfolio Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PortfolioCard
                        title="Project Alpha"
                        description="A complete branding package for a tech startup."
                        image="/src/assets/about-us.jpg" // Replace with your image URL
                    />
                    <PortfolioCard
                        title="Project Beta"
                        description="Web design and development for an e-commerce platform."
                        image="/src/assets/about-us.jpg" // Replace with your image URL
                    />
                    <PortfolioCard
                        title="Project Gamma"
                        description="Logo and print design for a local restaurant."
                        image="/src/assets/about-us.jpg" // Replace with your image URL
                    />
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;