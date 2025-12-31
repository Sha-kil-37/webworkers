import { motion, AnimatePresence } from "framer-motion";
import Paragraph from "./Paragraph";
import ShinyText from "./ShinyText";
//
const logos = [
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115242/agency/work_jophws.png",
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115241/agency/queen_yc50ki.png",
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115240/agency/minicraft_uzsptd.png",
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115239/agency/insight_o9pu1g.png",
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115238/agency/happy_dquonu.png",
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115237/agency/go_rzwknp.png",
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115236/agency/express_cyloez.png",
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115235/agency/est_dqk6io.png",
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115234/agency/creative_zlhfpt.png",
  "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767115234/agency/boycott_pvlfsw.png",
];
//
const Row = ({ reverse = false }) => (
  <div className="overflow-hidden w-full mx-auto">
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
      id="workexperience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-20"
    >
      <div className="xl:w-6xl xl:mx-auto">
        <h2  className="text-[#082032] font-bold xl:text-6xl xl:w-4xl xl:mx-auto xl:block text-center xl:mb-15" >Work <span  className="text-[#F5F5F7]">Experience</span> With</h2>
        <Row />
        <Row reverse />
      </div>
    </motion.section>
  );
}
