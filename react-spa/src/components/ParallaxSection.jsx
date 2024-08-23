import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import backgroundImage from '../assets/background.png';
import mountainsImage from '../assets/mountains.png';
import logoLandImage from '../assets/logo_land.png';
import jungle1Image from '../assets/jungle1.png';
import jungle2Image from '../assets/jungle2.png';
import jungle3Image from '../assets/jungle3.png';
import jungle4Image from '../assets/jungle4.png';
import jungle5Image from '../assets/jungle5.png';
import manOnMountainImage from '../assets/man_on_mountain.png';

const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [-distance, distance]);
};

const ParallaxSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    // Updated parallax values for a smoother animation
    const backgroundY = useParallax(scrollYProgress, 85); // Moves slower
    const mountainsY = useParallax(scrollYProgress, 70); // Moves slower than logo
    const logoLandY = useParallax(scrollYProgress, 75); // Slightly faster than mountains
    const jungle1Y = useParallax(scrollYProgress, 55); // Faster than logo
    const jungle2Y = useParallax(scrollYProgress, 45); // Faster than jungle1
    const jungle3Y = useParallax(scrollYProgress, 30);  // Faster than jungle2
    const jungle4Y = useParallax(scrollYProgress, 20);  // No movement
    const jungle5Y = useParallax(scrollYProgress, 5); // Slight upward movement
    const manOnMountainY = useParallax(scrollYProgress, 20); // Moves slightly faster

    return (
        <section id='home'>
            <div ref={ref} className="relative inset-0 w-full h-[1280px] overflow-hidden items-center">
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        translateY: backgroundY, 
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${mountainsImage})`,
                        translateY: mountainsY, 
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${logoLandImage})`,
                        translateY: logoLandY, 
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${jungle1Image})`,
                        translateY: jungle1Y, 
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${jungle2Image})`,
                        translateY: jungle2Y, 
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${jungle3Image})`,
                        translateY: jungle3Y, 
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${jungle4Image})`,
                        translateY: jungle4Y, 
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${jungle5Image})`,
                        translateY: jungle5Y, 
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${manOnMountainImage})`,
                        translateY: manOnMountainY,
                    }}
                />
            </div>
        </section>
    );
};

export default ParallaxSection;