import { motion, AnimatePresence } from "framer-motion";
import boycott from "../assets/collaboration/boycott.png";
import creative from "../assets/collaboration/creative.png";
import est from "../assets/collaboration/est.png";
import express from "../assets/collaboration/express.png";
import go from "../assets/collaboration/go.png";
import happy from "../assets/collaboration/happy.png";
import insight from "../assets/collaboration/insight.png";
import minicraft from "../assets/collaboration/minicraft.png";
import queen from "../assets/collaboration/queen.png";
import work from "../assets/collaboration/work.png";
const logos = [
  boycott,
  creative,
  est,
  express,
  go,
  happy,
  insight,
  minicraft,
  queen,
  work,
];
//
const Row = ({ reverse = false }) => (
  <div className="overflow-hidden w-full mx-auto mt-10">
    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {[...logos, ...logos].map((logo, i) => (
        <img key={i} src={logo} className="h-14 opacity-80" />
      ))}
    </motion.div>
  </div>
);
export default function WorkExperience() {
  //

  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="tracking-wide text-6xl font-bold text-center mx-auto w-4xl text-[#082032]">
          With Whom We Have Work Experience
        </h2>
        <Row />
        <Row reverse />
      </div>
    </motion.section>
  );
}
