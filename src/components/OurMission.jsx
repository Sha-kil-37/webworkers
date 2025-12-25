import { useEffect, useRef } from "react";
import CounterItem from "./CounterItem";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";

//
export default function OurMission() {
  //

  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-20 relative"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="border border-[#082032] rounded-xl p-6 bg-amber-100"
        >
          <h2 className="text-center text-5xl font-semibold text-[#082032] bg-cyan-200">
            Our Mission
          </h2>
          
          <Paragraph className="max-w-4xl mx-auto font-medium text-[#082032] text-center mt-5">
            We create smart, creative, and impactful digital solutions that help
            businesses grow with confidence. We deliver high-quality Web
            Development, Digital Marketing, UI/UX Design, SEO, and innovative
            software services. We empower clients, strengthen brands, and build
            meaningful digital experiences that drive real results.
          </Paragraph>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="border border-[#082032] rounded-xl p-6 bg-amber-100"
        >
          <CounterItem end={120} label="Projects Completed" />
          <CounterItem end={80} label="Happy Clients" />
          <CounterItem end={5} label="Years Experience" />
          <CounterItem end={12} label="Awards Won" />
        </motion.div>
      </div>
    </motion.section>
  );
}
