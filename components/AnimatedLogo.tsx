import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimatedLogo = () => {
  const { scrollY } = useScroll();

  // Map scroll pixel values (0px to 300px) to layout & scale transformations
  const logoScale = useTransform(scrollY, [0, 250], [1, 0.35]);
  const logoX = useTransform(scrollY, [0, 250], ['0px', '-30%']);
  const logoY = useTransform(scrollY, [0, 250], ['0px', '-40px']);

  return (
    <motion.div
      style={{
        scale: logoScale,
        x: logoX,
        y: logoY,
        transformOrigin: 'top left',
      }}
      className="fixed top-8 left-8 z-50 pointer-events-none w-72 sm:w-96 md:w-120"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 240"
        className="w-full h-auto pointer-events-auto cursor-pointer"
      >
        {/* E */}
        <path
          fill="#FF3917"
          d="M 50 30 L 220 30 L 220 70 L 115 70 L 115 105 L 195 105 L 195 140 L 115 140 L 115 180 L 235 180 L 235 220 L 50 220 Z"
        />
        {/* L */}
        <path
          fill="#FF3917"
          d="M 270 30 L 335 30 L 335 180 L 455 180 L 455 220 L 270 220 Z"
        />
        {/* F */}
        <path
          fill="#FF3917"
          d="M 490 30 L 660 30 L 660 70 L 555 70 L 555 108 L 635 108 L 635 145 L 555 220 L 490 220 Z"
        />
        {/* A */}
        <path
          fill="#FF3917"
          d="M 760 30 L 825 30 L 935 220 L 865 220 L 840 172 L 745 172 L 720 220 L 650 220 Z M 760 140 L 825 140 L 792 72 Z"
        />
      </svg>
    </motion.div>
  );
};