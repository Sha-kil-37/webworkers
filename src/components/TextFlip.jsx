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
        className="xl:text-5xl xl:font-bold xl:tracking-wide font-primary block text-[#0076DF] xl:w-xl"
      >
        {text}
      </motion.span>
      <motion.span
        layout
        className="mt-5 xl:text-4xl xl:font-bold xl:tracking-wide font-primary block "
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
              "inline-block whitespace-nowrap xl:text-5xl xl:font-bold xl:tracking-wide font-primary"
            )}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
