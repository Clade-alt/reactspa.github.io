import React from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const SECTION_HEIGHT = 1500;

const ArtSection = () => {
    return (
        <div 
            className="relative w-full"
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)`}}>
            
            <CenterImage/>
            <ParallaxImages/>

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

const ParallaxImages = () => {
    return (
        <div className="mx-auto flex max-w-5xl px-4 pt-[200px]">
            <div className="relative z-20 size-56 bg-red-500" />
            <div 
            style={{
                transform: "translateY(200px)",
            }}
            className="relative z-20 size-56 bg-blue-500" />
        </div>
    );
};

const ParallaxImg = ({
    className,
    alt,
    src,
    start,
    end,
}: {
    className?: string;
    alt: string;
    src: string;
    start: number;
    end: number;
}) => {
    return <motion.img src={src} alt={alt} className={className}/>;
};

export default ArtSection;