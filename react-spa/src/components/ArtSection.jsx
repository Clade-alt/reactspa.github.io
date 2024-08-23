import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import Artbackground from "../assets/bgimg.jpg";
import skull from '../assets/skull.jpg';
import table from '../assets/table.jpeg';
import glass from '../assets/glass.jpg';
import letters from '../assets/letters.jpg';

const SECTION_HEIGHT = 1800;

const ArtSection = () => {
    return (
        <div 
            className="relative w-full"
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)`}}>
            
            <CenterImage/>
            <ParallaxImages/>

            <div className="absolute bottom-0 left-0 right-0 h-96 b" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();
    
    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`; 

    const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 50000], [1, 0]);

    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 2000], ["170%", "60%"]);

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                opacity,
                backgroundSize,
                clipPath: clipPath,
                backgroundImage:`url(${Artbackground})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const ParallaxImages = () => {
    return (
        <div className="relative z-10 mx-auto max-w-5xl px-4 pt-[200px]">
            <ParallaxImg
            src={skull}
            alt="skull hovering"
            start={-200}
            end={200}
            className="w-1/3"
            />
            {<ParallaxImg
            src={table}
            alt="table work"
            start={200}
            end={-250}
            className="mx-auto w-2/3"
            />}
            <ParallaxImg
            src={glass}
            alt="glass hover"
            start={-200}
            end={200}
            className="ml-auto w-1/3"
            />
            <ParallaxImg
            src={letters}
            alt="letters"
            start={-100}
            end={-800}
            className="ml-24 w-5/12"
            />
        </div>
    );
};

const ParallaxImg = ({
    className,
    alt,
    src,
    start,
    end,
}) => {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);

    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return <motion.img 
    style={{ opacity, transform }}
    ref={ref}
    src={src}
    alt={alt}
    className={className}/>;
};

export default ArtSection;