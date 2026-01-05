import CounterItem from "./CounterItem";
import Paragraph from "./Paragraph";
import { motion } from "motion/react";
import { CiStar } from "react-icons/ci";

//
export default function OurAchievements() {
  //

  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="xl:py-10 relative lg:py-10"
    >
      <div className="xl:w-6xl xl:mx-auto xl:grid xl:grid-cols-2 xl:gap-6 lg:w-5xl lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="">
          <h2 className="xl:tracking-wide xl:text-3xl font-bold font-primary lg:tracking-wide lg:font-bold lg:text-3xl">
            Our <span className="text-[#0076DF]">Success</span>
          </h2>
          <div className="flex mt-2">
            {[1, 2, 3, 4, 5].map((item, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <CiStar className="text-[#0076DF] xl:text-3xl lg:text-3xl" />
                </motion.div>
              );
            })}
          </div>

          <Paragraph className="xl:mt-2 lg:mt-2 font-medium font-primary xl:tracking-wide lg:tracking-wide">
            We create smart, creative, and impactful digital solutions that help
            businesses grow with confidence. We deliver high-quality Web
            Development, Digital Marketing, UI/UX Design, SEO, and innovative
            software services. We empower clients, strengthen brands, and build
            meaningful digital experiences that drive real results.
          </Paragraph>
        </div>
        <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2">
          <CounterItem end={120} label="Projects Completed" />
          <CounterItem end={80} label="Happy Clients" />
          <CounterItem end={5} label="Years Experience" />
          <CounterItem end={12} label="Awards Won" />
        </div>
      </div>
    </motion.section>
  );
}
