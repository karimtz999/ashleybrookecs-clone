import { motion } from 'framer-motion';

export const SectionOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-[rgb(255,57,23)] text-white p-6 sm:p-8 rounded-sm flex justify-between items-center shadow-md"
    >
      <h2 className="text-base sm:text-2xl font-['Press_Start_2P'] uppercase tracking-wider max-w-3xl leading-snug">
        THE FIRST THING YOU SHOULD KNOW ABOUT US
      </h2>
      <span className="text-4xl sm:text-6xl font-['Press_Start_2P'] font-bold pl-4">
        01
      </span>
    </motion.div>
  );
};