import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGE_SOURCES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
];

interface ImageItem {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  src: string;
  rotation: number;
}

export const Imagesmoves: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const imageIndexRef = useRef(0);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const lastSpawnTimeRef = useRef(0);

  // ADJUSTABLE CONFIGURATION
  const SPAWN_DELAY = 500;
  const DISTANCE_THRESHOLD = 50;
  const FORCE_MULTIPLIER = 2;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Stop spawning if the user has scrolled past the Hero section (100vh)
      if (window.scrollY > window.innerHeight) return;

      const now = Date.now();
      const { x: lastX, y: lastY } = lastMousePosRef.current;
      const deltaX = clientX - lastX;
      const deltaY = clientY - lastY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance > DISTANCE_THRESHOLD && now - lastSpawnTimeRef.current > SPAWN_DELAY) {
        lastMousePosRef.current = { x: clientX, y: clientY };
        lastSpawnTimeRef.current = now;

        const targetX = clientX + deltaX * FORCE_MULTIPLIER;
        const targetY = clientY + deltaY * FORCE_MULTIPLIER;

        const src = IMAGE_SOURCES[imageIndexRef.current % IMAGE_SOURCES.length];
        imageIndexRef.current += 1;

        const rotation = Math.floor(Math.random() * 24) - 12;

        const newImage: ImageItem = {
          id: now + Math.random(),
          x: clientX,
          y: clientY,
          targetX,
          targetY,
          src,
          rotation,
        };

        setImages((prev) => [...prev.slice(-6), newImage]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {images.map((img) => (
          <motion.div
            key={img.id}
            initial={{
              opacity: 0,
              scale: 0.5,
              x: img.x,
              y: img.y,
              rotate: img.rotation,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: img.targetX,
              y: img.targetY,
              rotate: img.rotation,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
            }}
            onAnimationComplete={() => {
              setTimeout(() => {
                setImages((prev) => prev.filter((item) => item.id !== img.id));
              }, 1000);
            }}
            className="w-48 h-60 md:w-56 md:h-72 rounded-sm overflow-hidden shadow-2xl border-2 border-white/20 bg-neutral-900"
          >
            <img
              src={img.src}
              alt="Trailing showcase artwork"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};