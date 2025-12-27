import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
//
const experiences = [
  {
    id: 1,
    image: "/clients/client1.jpg",
    name: "ABC Corporation",
    role: "Frontend Developer",
    description:
      "Built high-performance UI components and interactive dashboards using React and Tailwind CSS.",
  },
  {
    id: 2,
    image: "/clients/client2.jpg",
    name: "XYZ Studio",
    role: "MERN Stack Developer",
    description:
      "Developed full-stack applications with authentication, REST APIs, and optimized UI animations.",
  },
  {
    id: 3,
    image: "/clients/client3.jpg",
    name: "Digital Agency",
    role: "UI Engineer",
    description:
      "Created animated, conversion-focused landing pages with smooth transitions and micro-interactions.",
  },
];
//
export default function WorkExperience() {
  //
  const [index, setIndex] = useState(0);
  //
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % experiences.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  //
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-[260px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={experiences[index].id}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {experiences[index].name}
              </h3>
              <p className="text-sm text-indigo-600 mt-1">
                {experiences[index].role}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {experiences[index].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative h-[380px] overflow-hidden bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={experiences[index].id}
              src={experiences[index].image}
              alt="Client"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
