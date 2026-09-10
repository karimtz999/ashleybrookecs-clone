import { motion, useScroll, useTransform } from 'framer-motion';

export const Navbar = () => {
  const { scrollY } = useScroll();

  // Maps scroll depth (0px to 200px) to layout properties
  const logoWidth = useTransform(scrollY, [0, 200], ['100%', '35%']);
  const subtitleOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const subtitleHeight = useTransform(scrollY, [0, 80], ['auto', '0px']);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md pt-8 px-8 pb-4 flex justify-between items-start transition-all">
        {/* Dynamic Shrinking Logo Container */}
        <motion.div 
          style={{ width: logoWidth }} 
          className="flex flex-col min-w-35 max-w-120 transition-all duration-75 ease-out"
        >
          {/* ELFA SVG Logo */}
          <div className="w-full leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 240"
              className="w-full h-auto block"
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
          </div>

          {/* Subtitles (Collapses on Scroll) */}
          <motion.div
            style={{ opacity: subtitleOpacity, height: subtitleHeight }}
            className="flex justify-between items-center mt-2 text-[#FF3917] text-xs font-mono tracking-widest uppercase overflow-hidden"
          >
            <span>CREATIVE</span>
            <span>STUDIO</span>
          </motion.div>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex flex-row items-center gap-1 text-4xl font-['Boldonse'] tracking-tight text-black pt-1 -translate-x-12.5">
          <a href="#work" className="hover:opacity-60 transition-opacity">Work,</a>
          <a href="#services" className="hover:opacity-60 transition-opacity">Services,</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About,</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity whitespace-nowrap">Create with us</a>
        </nav>
      </header>
    </>
  );
};