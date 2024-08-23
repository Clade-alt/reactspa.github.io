import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Parallax effect for the entire section
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]); 

  return (
    <section id='about' className="w-full h-screen bg-[#310] py-16 md:py-20 lg:py-24 flex items-center">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto text-white text-center flex flex-col" 
          style={{ translateY }} 
        >
          <motion.div
            initial={{ scale: 0.8 }} 
            whileInView={{ scale: 1 }} 
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="w-full mb-6" 
          >
            <h2 className="text-yellow-500 text-7xl md:text-7xl lg:text-8xl font-bold mb-8">WELCOME TO DROGON DESIGN</h2>
          </motion.div>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="text-yellow-700 text-4xl md:text-3xl lg:text-5xl mb-8 text-center w-full"
          >
            Drogon Design is a leading UI/UX design and front-end development agency that creates stunning digital experiences.
          </motion.p>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="text-yellow-700 text-4xl md:text-3xl lg:text-5xl mb-8 text-center w-full"
          >
            Our portfolio showcases our expertise in crafting visually appealing and user-friendly websites and applications.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;