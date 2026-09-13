import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import elfaLogo from '../src/assets/ELFA.png';

const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Create with us" },
];

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
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-8 pt-8 pb-12">
      <div className="flex items-start justify-between gap-8 mb-24 md:mb-32 pointer-events-auto">
        <div className="flex flex-col items-start min-w-30">
          <img
            src={elfaLogo}
            alt="Elfa Logo"
            className="h-30 sm:h-42 w-auto object-contain"
          />
          <div className="flex justify-between items-center w-full mt-2 text-[rgb(255,57,23)] text-[10px] sm:text-xs font-['Press_Start_2P'] tracking-widest uppercase">
            <span>CREATIVE</span>
            <span>STUDIO</span>
          </div>
        </div>

        <nav className="flex flex-col items-start gap-1 text-lg sm:text-2xl font-['Press_Start_2P'] tracking-tight pt-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            const letters = item.label.split("");

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveId((prev) => (prev === item.id ? null : item.id));
                }}
                className="relative overflow-hidden block cursor-pointer py-1 select-none"
              >
                <motion.div initial="initial" whileHover="hover" className="relative block">
                  <div className="flex whitespace-nowrap">
                    {letters.map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          initial: { y: 0, opacity: 1, color: isActive ? "#FF3917" : "#000000" },
                          hover: { y: -28, opacity: 0, color: "#FF3917" },
                        }}
                        transition={{ duration: 0.2, delay: index * 0.03, ease: "easeInOut" }}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex whitespace-nowrap">
                    {letters.map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          initial: { y: 28, opacity: 0, color: "#FF3917" },
                          hover: { y: 0, opacity: 1, color: "#FF3917" },
                        }}
                        transition={{ duration: 0.2, delay: index * 0.03, ease: "easeInOut" }}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </a>
            );
          })}
        </nav>
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
    </section>
  );
};
