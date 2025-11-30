import Button from "./Button";
import {
  FaRocket,
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
//
export default function ChooseUs() {
  //
  const navigate = useNavigate();
  //
  function handleClick() {
    navigate("/projects");
  }
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
            <h2 className="text-4xl font-bold">Why people love us</h2>

            <p className="max-w-xl">
              Web Workers is a full-service digital web agency — we craft
              beautiful websites, build fast web apps, and create meaningful
              brand experiences that help businesses grow.
            </p>

            <Button
              onClick={handleClick}
              className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded font-medium hover:bg-blue-400 transition-all duration-300"
            >
              Our Works
            </Button>
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
                  key={idx}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative group overflow-hidden p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-[#F5F7F8] shadow-md">
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
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
