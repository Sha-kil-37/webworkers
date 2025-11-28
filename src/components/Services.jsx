import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa6";
import { LuMonitorSmartphone } from "react-icons/lu";
import { LuSmartphone } from "react-icons/lu";
import { IoIosRocket } from "react-icons/io";
import { AiOutlineLineChart } from "react-icons/ai";
//
export default function Services() {
  //
  const services = [
    {
      title: "Web Development",
      desc: "High‑performance MERN websites with modern, scalable architecture.",
      icon: <FaCode className="w-10 h-10" />,
    },
    {
      title: "Web Design",
      desc: "Beautiful, responsive, and pixel‑perfect website designs.",
      icon: <FaPalette className="w-10 h-10" />,
    },
    {
      title: "UI / UX Design",
      desc: "Clean UI and smooth UX that boost user engagement and experience.",
      icon: <LuMonitorSmartphone className="w-10 h-10" />,
    },
    {
      title: "Mobile App Development",
      desc: "Fast, intuitive, and user‑friendly mobile apps for iOS & Android.",
      icon: <LuSmartphone className="w-10 h-10" />,
    },
    {
      title: "Digital Marketing",
      desc: "Grow your brand with effective digital strategies and campaigns.",
      icon: <IoIosRocket className="w-10 h-10" />,
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher, increase visibility, and get more organic traffic.",
      icon: <AiOutlineLineChart className="w-10 h-10" />,
    },
  ];
  //
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          My Digital Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl hover:bg-[#F5F7F8] transition shadow-lg border border-gray-100"
            >
              <div className="mb-6 text-blue-400">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
