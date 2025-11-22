import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import one from "../assets/one.png";
import two from "../assets/two.png";
import shakil from "../assets/shakil.png";
import rakibul from "../assets/rakibul.png";

export default function TestPage() {
  //
  const items = [
    {
      id: 1,
      content: (
        <div className="text-center overflow-hidden">
          <img className="h-full w-full" src={one} alt={one} />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="text-center overflow-hidden">
          <img className="h-full w-full" src={two} alt={two} />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="text-center overflow-hidden">
          <img className="h-full w-full" src={shakil} alt={shakil} />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="text-center overflow-hidden">
          <img className="h-full w-full" src={rakibul} alt={rakibul} />
        </div>
      ),
    },
  ];
  const visible = 1;
  const autoplay = true;
  const interval = 5000;
  const [index, setIndex] = useState(0);
  const itemsCount = items.length;
  const timerRef = useRef(null);
  //
  useEffect(() => {
    if (!autoplay) return;
    stopTimer();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % itemsCount);
    }, interval);
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, interval, itemsCount]);

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function prev() {
    setIndex((i) => (i - 1 + itemsCount) % itemsCount);
  }
  function next() {
    setIndex((i) => (i + 1) % itemsCount);
  }

  // Variants for vertical slide animation: enter from top, exit to bottom (or reversed)
  const variants = {
    enter: (direction = 1) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98,
    }),
    center: { y: "0%", opacity: 1, scale: 1 },
    exit: (direction = 1) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
  };

  // track is a horizontal row — we center the active slide, but animate items vertically
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-7xl mx-auto">
        {/* carousel track */}
        <div>
          <div className="flex items-stretch">
            {/* visible area */}
            <div className="w-full">
              <div className="relative h-64 md:h-80 lg:h-96">
                <AnimatePresence initial={false} custom={1} mode="wait">
                  {items.map((it, i) =>
                    i === index ? (
                      <motion.div
                        key={it.id || i}
                        custom={1}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center p-4"
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          {/* the content wrapper — you can style cards here */}
                          <div className="w-full h-full rounded-lg overflow-hidden bg-white/5 p-4 flex items-center justify-center">
                            {it.content}
                          </div>
                        </div>
                      </motion.div>
                    ) : null
                  )}
                </AnimatePresence>
                {/* controls */}
                {/* <button
                  aria-label="Previous"
                  onClick={() => {
                    stopTimer();
                    prev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full shadow backdrop-blur"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  onClick={() => {
                    stopTimer();
                    next();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full shadow backdrop-blur"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 -rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button> */}
              </div>
            </div>
          </div>

          {/* indicators / thumbnails below (horizontal list) */}
          {/* <div className="mt-3 px-3 pb-3">
            <div className="flex gap-3 items-center overflow-x-auto">
              {items.map((it, i) => (
                <button
                  key={it.id || i}
                  onClick={() => {
                    stopTimer();
                    setIndex(i);
                  }}
                  className={`flex-shrink-0 w-24 h-16 rounded-lg p-1 border transition-all duration-200 ${
                    i === index
                      ? "ring-2 ring-offset-1 ring-blue-400"
                      : "hover:scale-105"
                  }`}
                  title={`Go to slide ${i + 1}`}
                >
                  <div className="w-full h-full rounded-md overflow-hidden flex items-center justify-center text-sm">
                    {it.thumb ?? it.content}
                  </div>
                </button>
              ))}
            </div>
          </div> */}
        </div>

        {/* simple dots */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopTimer();
                setIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? "bg-blue-500" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Example items (copy this into your page to test)
 *
 * const items = [
 *  { id: 1, content: <div className="text-center">\n <h3 className="text-xl font-semibold">Slide 1</h3>\n <p className="mt-2">This slide animates top→bottom</p>\n</div> },
 *  { id: 2, content: <img src="/path/to/image.jpg" alt="" className="object-cover w-full h-full"/> },
 *  ...
 * ];
 *
 * <VerticalSlideCarousel items={items} autoplay interval={4000} />
 */
