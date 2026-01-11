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
const Row = ({ reverse = false }) => (
  <div className="overflow-hidden w-full mx-auto mt-8">
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
        <img
          key={i}
          src={logo}
          className="2xl:h-14 xl:h-14 lg:h-12 md:h-12 sm:h-10 opacity-80 h-6"
        />
      ))}
    </motion.div>
  </div>
);
export default function WorkExperience() {
  //
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  // hangle portfolios navugate
  function handleNavigate(path) {
    scrollTo(path);
  }
  //
  return (
    <motion.section
      id="workexperience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="2xl:py-30 xl:py-30 lg:py-20 md:py-15 sm:py-10 py-10"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:px-8 sm:px-8 px-4">
        <h2 className="tracking-wide font-bold font-primary 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl mx-auto text-2xl 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center text-left">
          Work <span className="text-[#0076DF]">Experience</span> With
        </h2>
        <Paragraph className="font-primary mx-auto  mt-5 xl:w-3xl tracking-wide lg:w-3xl md:w-2xl 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center text-left">
          We collaborate with businesses to deliver Web & App Development, UI/UX
          Design, SEO, Digital Marketing, Social Media Marketing, Custom
          Software, Business Consultation, and AI Integration solutions that
          drive real results.
        </Paragraph>
        <button
          onClick={() => handleNavigate("portfolios")}
          className="rounded-3xl border font-primary block mt-5 mx-auto 2xl:px-4 xl:px-4 lg:px-4 md:px-3 sm:px-3 px-2  2xl:py-2 xl:py-2 lg:py-2 md:py-1 sm:py-1 py-1 font-bold border-[#F3F4F4] cursor-pointer hover:border-[#CBCBCB] transition duration-200"
        >
          Our Portfolios
        </button>
        <Row />
        <Row reverse />
      </div>
    </motion.section>
  );
}
