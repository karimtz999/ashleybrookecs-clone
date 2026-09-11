import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import elfaLogo from '../src/assets/ELFA.png';

interface AnimatedTextWaveProps {
  text: string;
}

const transition: Transition = { 
  duration: 0.3, 
  ease: "easeInOut" 
};

// Top-level button variants controlling overall hover state and letter delays
const buttonVariants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const topLetterVariants = {
  initial: { y: 0, opacity: 1, color: "#FFFFFF" },
  hover: { y: -24, opacity: 0, color: "#FF3917" },
};

const bottomLetterVariants = {
  initial: { y: 24, opacity: 0, color: "#FF3917" },
  hover: { y: 0, opacity: 1, color: "#FF3917" },
};

const AnimatedTextWave = ({ text }: AnimatedTextWaveProps) => {
  const letters = text.split("");

  return (
    <div className="relative overflow-hidden font-['Jersey_25'] text-xl uppercase tracking-wider leading-none">
      {/* Default Text (Waves UP) */}
      <div className="flex whitespace-nowrap">
        {letters.map((char: string, i: number) => (
          <motion.span key={i} variants={topLetterVariants} transition={transition} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Hover Replacement Text (Waves IN from bottom) */}
      <div className="absolute inset-0 flex whitespace-nowrap">
        {letters.map((char: string, i: number) => (
          <motion.span key={i} variants={bottomLetterVariants} transition={transition} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export const HeroContent = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-8 pt-8 pb-12">
      <div className="flex flex-col items-start min-w-[120px] mb-24 md:mb-32 pointer-events-auto">
        <img
          src={elfaLogo}
          alt="Elfa Logo"
          className="h-20 sm:h-32 w-auto object-contain"
        />
        <div className="flex justify-between items-center w-full mt-2 text-[rgb(255,57,23)] text-[10px] sm:text-xs font-['Press_Start_2P'] tracking-widest uppercase">
          <span>CREATIVE</span>
          <span>STUDIO</span>
        </div>
      </div>

      {/* 12-Column Grid Layout */}
      <div className="grid grid-cols-12 gap-y-10 md:gap-8 items-end">
        
        {/* Left Subtext Paragraph */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <p className=" md:text-2xl -translate-x-12 md:-translate-x-25 -translate-y-12 md:-translate-y-25 text-sm leading-snug text-neutral-800 font-['Playwrite_MX_Guides'] max-w-xs">
            Led by a hyper-proactive perfectionist, PR Strategist turned Producer turned Creative Director who refuses to stay in a single lane.
          </p>
        </div>

        {/* Right Hero Headline & CTA */}
        <div className="col-span-12 md:col-span-7 lg:col-start-6 flex flex-col items-start gap-8">
          <h1 className="font-['Press_Start_2P'] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            A creative studio merging systems-thinking with storytelling for brands, agencies, and film
          </h1>

          {/* Animated CTA Button */}
          <motion.button
            initial="initial"
            whileHover="hover"
            variants={buttonVariants}
            className="bg-black text-white px-6 py-3 cursor-pointer inline-flex items-center gap-3 overflow-hidden select-none rounded-none"
          >
            <AnimatedTextWave text="ABOUT US" />

            {/* Animated Arrow Icon */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 inline-block"
              variants={{
                initial: { x: 0, y: 0, color: "#FFFFFF" },
                hover: { x: 3, y: -3, color: "#FF3917" },
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </motion.svg>
          </motion.button>
        </div>

      </div>

      {/* Fixed Award Badge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#FF3917] text-white flex flex-col items-center py-4 px-2 z-50 rounded-l-sm shadow-md">
        <span className="font-bold text-sm mb-6">W.</span>
        <span className="text-[10px] uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 font-mono">
          Site of the Day
        </span>
      </div>
    </section>
  );
};
