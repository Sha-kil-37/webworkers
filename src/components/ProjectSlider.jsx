import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router";
//
export default function ProjectSlider({ projects }) {
  //

  //
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto py-10 relative overflow-hidden">
      {/* Slider */}
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="rounded"
      >
        <div className="">
          <img
            src={projects[index].img}
            //   alt=""
            className="w-full h-60 object-cover rounded-xl"
          />
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <h2 className="text-2xl font-semibold">{projects[index].title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {projects[index].description}
            </p>
          </div>
          <div>
            <Link
              onClick={() => alert("please wait some day for update this site")}
              className="font-semibold text-blue-400"
            >
              View Project
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
