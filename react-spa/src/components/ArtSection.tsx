import React from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const SECTION_HEIGHT = 1500;

const ArtSection = () => {
    return (
        <div 
            className="relative w-full"
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)`}}>
            
            <CenterImage/>

            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-50/0 to-zinc-950" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();
    
    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}% ${clip2}% ${clip1}% ${clip2}% ${clip2}% ${clip1}% ${clip2}%)`;
    
    const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                opacity,
                backgroundSize,
                clipPath,
                backgroundImage:"https://unsplash.com/photos/a-close-up-of-a-spiral-U1iwzpmozrU",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

export default ArtSection;