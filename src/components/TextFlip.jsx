import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export const TextFlip = ({ text, words, duration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="2xl:text-5xl xl:text-5xl 2xl:font-bold xl:font-bold xl:tracking-wide 2xl:tracking-wide font-primary block text-[#0076DF] 2xl:w-xl xl:w-xl lg:text-5xl lg:font-bold lg:tracking-wide lg:w-lg md:text-5xl md:tracking-wide md:font-bold md:w-lg sm:w-lg sm:text-4xl sm:tracking-wide sm:font-bold font-bold text-2xl tracking-wide"
      >
        {text}
      </motion.span>
      <motion.span
        layout
        className="xl:mt-5 lg:mt-5 md:mt-5 xl:text-5xl xl:font-bold xl:tracking-wide font-primary block lg:text-5xl lg:font-bold lg:tracking-wide md:text-5xl md:tracking-wide md:font-bold sm:text-3xl sm:tracking-wide sm:font-bold sm:w-full font-bold tracking-wide mt-5 text-2xl"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn(
              "block"
            )}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
