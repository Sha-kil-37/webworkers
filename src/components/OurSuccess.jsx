import CounterItem from "./CounterItem";
import Paragraph from "./Paragraph";
import { motion } from "motion/react";
import { CiStar } from "react-icons/ci";

//
export default function OurSuccess() {
  //

  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="2xl:py-15 xl:py-15 relative lg:py-15 md:py-15 sm:py-15"
    >
      <div className="xl:w-6xl xl:mx-auto xl:grid xl:grid-cols-2 xl:gap-x-40 2xl:grid 2xl:grid-cols-2 2xl:gap-12 lg:w-5xl lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-20 md:px-8 md:grid md:grid-cols-2 md:gap-x-20 sm:px-8 sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-x-15 mx-auto px-4">
        <div className="">
          <h2 className="tracking-wide font-semibold font-primary text-center 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl">
            Our <span className="text-[#0076DF]">Success</span>
          </h2>
          <div className="flex justify-center 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-start">
            {[1, 2, 3, 4, 5].map((item, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <CiStar className="text-[#0076DF] 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-xl" />
                </motion.div>
              );
            })}
          </div>
          {/*  */}
          <Paragraph className="font-primary text-center 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left">
            We create smart, creative, and impactful digital solutions that help
            businesses grow with confidence. We deliver high-quality Web
            Development, Digital Marketing, UI/UX Design, SEO, and innovative
            software services. We empower clients, strengthen brands, and build
            meaningful digital experiences that drive real results.
          </Paragraph>
        </div>
        <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 2xl:gap-6 xl:gap-6 md:gap-6 sm:gap-6 mt-3">
          <CounterItem end={120} label="Projects Completed" />
          <CounterItem end={80} label="Happy Clients" />
          <CounterItem end={5} label="Years Experience" />
          <CounterItem end={12} label="Awards Won" />
        </div>
      </div>
    </motion.section>
  );
}
