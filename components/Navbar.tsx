import { useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Create with us" },
];

export const Navbar = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <header className="fixed top-0 right-0 z-50 pt-8 px-8 pb-4 pointer-events-none">
      {/* Navigation Links */}
      <nav className="flex flex-col items-start gap-1 text-2xl font-['Press_Start_2P'] tracking-tight pt-1 pointer-events-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          const letters = item.label.split("");

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
              className="relative overflow-hidden block cursor-pointer py-1 select-none"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                className="relative block"
              >
                {/* Default Text Layer */}
                <div className="flex whitespace-nowrap">
                  {letters.map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={{
                        initial: { y: 0, opacity: 1, color: isActive ? "#FF3917" : "#000000" },
                        hover: { y: -28, opacity: 0, color: "#FF3917" }
                      }}
                      transition={{
                        duration: 0.2,
                        delay: i * 0.03,
                        ease: "easeInOut"
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>

                {/* Orange Replacement Layer */}
                <div className="absolute inset-0 flex whitespace-nowrap">
                  {letters.map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={{
                        initial: { y: 28, opacity: 0, color: "#FF3917" },
                        hover: { y: 0, opacity: 1, color: "#FF3917" }
                      }}
                      transition={{
                        duration: 0.2,
                        delay: i * 0.03,
                        ease: "easeInOut"
                      }}
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
    </header>
  );
};