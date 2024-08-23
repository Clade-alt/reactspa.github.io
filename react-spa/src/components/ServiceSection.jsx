import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component

const ServiceSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();

    // Parallax effect for the entire section
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]); // Adjust the range as needed

    return (
        <section className="w-full h-screen bg-yellow-500 py-16 md:py-20 lg:py-24 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    className="max-w-7xl mx-auto text-white" // Increased width
                    style={{ translateY }} // Apply the parallax effect
                >
                    <motion.h2
                        initial={{ y: 48, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.65 }}
                        className="text-center text-[#310] text-7xl md:text-7xl lg:text-8xl font-bold mb-8"
                    >
                        Our Services
                    </motion.h2>

                    <motion.p
                        initial={{ y: 48, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        className="text-center text-yellow-900 text-4xl md:text-3xl lg:text-5xl mb-8 w-full"
                    >
                        We offer a range of graphic design services to help your business stand out.
                    </motion.p>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }} // Start slightly smaller and transparent
                                    whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and opacity
                                    transition={{ ease: "easeInOut", duration: 0.75 }}
                        ><ServiceCard
                            title="Branding"
                            description="We create strong and distinctive brands that resonate with your target audience."
                            link="/services/branding"
                        />
                        </motion.div>
                        <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }} // Start slightly smaller and transparent
                                    whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and opacity
                                    transition={{ ease: "easeInOut", duration: 0.75 }}
                        ><ServiceCard
                            title="Logo Design"
                            description="We create strong and distinctive brands that resonate with your target audience."
                            link="/services/branding"
                        />
                        </motion.div>
                        <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }} // Start slightly smaller and transparent
                                    whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and opacity
                                    transition={{ ease: "easeInOut", duration: 0.75 }}
                        ><ServiceCard
                            title="Web Design"
                            description="We create strong and distinctive brands that resonate with your target audience."
                            link="/services/branding"
                        />
                        </motion.div>
                        <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }} // Start slightly smaller and transparent
                                    whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and opacity
                                    transition={{ ease: "easeInOut", duration: 0.75 }}
                        ><ServiceCard
                            title="Print Design"
                            description="We create strong and distinctive brands that resonate with your target audience."
                            link="/services/branding"
                        />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceSection;