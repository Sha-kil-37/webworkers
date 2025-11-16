import React from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "John Smith",
    designation: "Founder, TechStart Inc.",
    quote:
      "WebWorkers completely transformed our digital presence. Their team's attention to detail and creative approach exceeded our expectations. We saw a 300% increase in user engagement within the first month.",
    rating: 5,
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  {
    name: "Sarah Johnson",
    designation: "Marketing Manager, Digital Ventures",
    quote:
      "Working with WebWorkers was seamless from start to finish. They understood our brand voice and delivered a website that truly represents our vision. Their support team is outstanding.",
    rating: 5,
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michael Chen",
    designation: "CEO, Creative Solutions LLC",
    quote:
      "The professionalism and expertise of the WebWorkers team is unmatched. They delivered ahead of schedule and the quality of work is exceptional. Highly recommended for anyone looking for top-tier web development.",
    rating: 5,
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    name: "Emma Davis",
    designation: "Product Director, InnovateTech",
    quote:
      "WebWorkers brought our app idea to life in ways we hadn't imagined. Their innovative approach to UX design made our platform intuitive and beautiful. Best investment we made for our company.",
    rating: 5,
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
];

export default function Testimonials({ autoplay = true }) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with
            WebWorkers
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Testimonial Card */}
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              {testimonials?.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    x: isActive(index) ? 0 : -100,
                  }}
                  exit={{
                    opacity: 0,
                    x: 100,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <div className="h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-slate-900/50 p-8 flex flex-col justify-between border border-gray-200 dark:border-slate-700">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 dark:text-gray-300 text-lg italic font-light leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>

                    {/* Client Info */}
                    <div className="pt-6 border-t border-gray-200 dark:border-slate-700">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Side - Client Image and Controls */}
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <motion.div
              key={active}
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mb-8"
            >
              <img
                src={testimonials[active].src}
                alt={testimonials[active].name}
                className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-2xl object-cover"
              />
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handlePrev}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg"
              >
                <FaChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg"
              >
                <FaChevronRight className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12" />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActive(index)}
                  initial={false}
                  animate={{
                    scale: isActive(index) ? 1.2 : 1,
                    backgroundColor: isActive(index) ? "#3b82f6" : "#d1d5db",
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="h-3 w-3 rounded-full transition-all duration-300 dark:bg-slate-700"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
