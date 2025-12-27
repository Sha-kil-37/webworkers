import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    desc: "Modern, user-focused interface designs.",
    className: "lg:row-span-2",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Web Development",
    desc: "Fast, scalable & SEO-friendly websites.",
    className: "",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Brand Identity",
    desc: "Build strong and memorable brands.",
    className: "",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Digital Marketing",
    desc: "Grow traffic, leads & conversions.",
    className: "lg:col-span-2",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Test() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">
            Our <span className="text-indigo-400">Services</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            We create high-impact digital solutions for growing brands.
          </p>
        </motion.div>

        {/* 3 Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden p-6 group cursor-pointer ${service.className}`}
            >
              {/* Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-100 transition`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/90">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
