import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const SECTION_HEIGHT = 500;

const IntroSection = () => {
  return (
    <section
    id='about'
      className="bg-[#310] relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-t from-yellow-400/0 to-yellow-950" />
      <div className="h-full px-4 pt-[200px] items-center flex justify-center">
        <ParallaxDiv
          text="Our portfolio showcases our expertise in crafting visually appealing and user-friendly websites and applications."
          start={200}
          end={-250}
          className="mx-auto w-1/3 text-yellow-700 text-base md:text-2xl lg:text-5xl font-semibold text-left p-10"
        />
        <ParallaxDiv
          text="WELCOME TO DROGON DESIGN"
          start={-400}
          end={200}
          className="w-1/3 text-yellow-500 text-7xl md:text-5xl lg:text-8xl font-bold text-center px-10"
        />
        <ParallaxDiv
          text="We are a leading UI/UX design and front-end development agency that creates stunning digital experiences."
          start={0}
          end={-500}
          className="w-1/3 text-yellow-700 text-base md:text-2xl lg:text-5xl font-semibold text-right p-10"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-yellow-400/0 to-yellow-950" />
    </section>
  );
};

const ParallaxDiv = ({ text, className, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start - 0.5, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    >
      <p className="mb-8">{text}</p>
    </motion.div>
  );
};

export default IntroSection;
