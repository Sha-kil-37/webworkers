import React from "react";
import {
  FaRocket,
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
//
export default function ChooseUs() {
  //
  const features = [
    {
      title: "Fast Delivery",
      desc: "Speedy project delivery with clear milestones and on-time launches.",
      icon: FaRocket,
    },
    {
      title: "Responsive Design",
      desc: "Pixel-perfect responsive UI for every device and screen size.",
      icon: FaMobileAlt,
    },
    {
      title: "Creative UI/UX",
      desc: "User-first design: research-driven flows, delightful interfaces.",
      icon: FaPaintBrush,
    },
    {
      title: "Growth Focused",
      desc: "Designs and frontends optimized for conversions and growth.",
      icon: FaChartLine,
    },
    {
      title: "Reliable Support",
      desc: "Post-launch support and quick iteration when you need it.",
      icon: FaHeadset,
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white px-3 py-1 rounded-full shadow-md">
              <span className="text-sm font-semibold">Why choose us</span>
              <div className="h-1 w-1 rounded-full bg-white/80" />
            </div>

            <h2 className="text-4xl font-bold">
              We Build Digital Experiences That People Love
            </h2>

            <p className="text-slate-600 max-w-xl">
              Web Workers is a full-service digital web agency — we craft
              beautiful websites, build fast web apps, and create meaningful
              brand experiences that help businesses grow.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="group px-4 mt-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full inline-flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Get a free quote
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href="#portfolio"
                className="text-sm font-medium text-slate-700 hover:underline"
              >
                See our work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <motion.article
                  key={f.title}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative group overflow-hidden p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {f.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                    </div>
                  </div>

                  {/* subtle decorative element */}
                  <div className="pointer-events-none absolute -right-8 -bottom-8 opacity-10 transform rotate-12">
                    <svg
                      width="140"
                      height="140"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#g)"
                        strokeWidth="6"
                      />
                      <defs>
                        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0%" stopColor="#7C3AED" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
