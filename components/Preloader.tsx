import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  children: React.ReactNode;
}

export const Preloader = ({ children }: PreloaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (Adjust timing as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Framer Motion Stagger Containers for the Hero Content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Stagger effect between elements
        delayChildren: 0.2,   // Wait for the orange curtain to slide up a bit
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Orange Overlay Curtain */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1], // Custom smooth cubic-bezier curve
            }}
            className="fixed inset-0 z-[999] bg-[#FF3917] flex items-end justify-end p-8 sm:p-12"
          >
            {/* Spinning Loader Indicator in bottom-right corner */}
            <div className="flex items-center gap-3 text-white font-mono text-sm tracking-wider uppercase">
              <span>Loading</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content Revealed with Staggered Upward Motion */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={!isLoading ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};