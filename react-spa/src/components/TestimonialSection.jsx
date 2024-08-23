import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TestimonialCard from "./TestimonialCard"; // Import the TestimonialCard component

const TestimonialsSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();

    // Parallax effect for the entire section
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -30]); // Adjust the range as needed

    return (
        <section className="bg-yellow-500 h-screen py-16 md:py-20 lg:py-24 flex items-center">
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
                        className="text-center text-[#310] text-7xl md:text-7xl lg:text-8xl font-bold mb-8"
                    >
                        Client Testimonials
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        className="text-center text-yellow-900 text-4xl md:text-3xl lg:text-5xl mb-8 w-full"
                    >
                        Hear from our satisfied clients who trust us with their design needs.
                    </motion.p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TestimonialCard
                        testimonial="Drogon exceeded our expectations with their creative design solutions."
                        name="John Doe"
                    />
                    <TestimonialCard
                        testimonial="Professional, timely, and outstanding quality. Highly recommend Drogon!"
                        name="Jane Smith"
                    />
                    <TestimonialCard
                        testimonial="Their designs helped us stand out in a crowded market. Fantastic job!"
                        name="David Wilson"
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;