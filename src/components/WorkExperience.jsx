import { motion, AnimatePresence } from "motion/react";
import Paragraph from "./Paragraph";
//
  // work expreience data bellow
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
const Row = ({ reverse = false,}) => (
  <div className="overflow-hidden w-full mx-auto">
    <motion.div
      className="flex gap-2 lg:gap-4 xl:gap-4 2xl:gap-4 md:gap-4 w-max"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {[...logos, ...logos].map((logo, i) => (
        <img key={i} src={logo} className="2xl:h-14 xl:h-14 lg:h-14 md:h-12 sm:h-10 opacity-80 h-6" />
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
      className="2xl:py-15 xl:py-15 lg:py-15 md:py-15 sm:py-15 py-7"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:px-8 sm:px-8 px-4">
        <h2 className="tracking-wide font-semibold font-primary text-center 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl mx-auto mb-2 text-xl">
          Work <span className="text-[#0076DF]">Experience</span> With
        </h2>
        <Row />
        <Row reverse  />
      </div>
    </motion.section>
  );
}
