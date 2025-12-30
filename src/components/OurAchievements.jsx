
import CounterItem from "./CounterItem";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";
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
      className="py-10 relative"
    >
      <div className="max-w-6xl mx-auto xl:grid xl:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="p-6 "
        >
          <h2 className="tracking-wide xl:text-6xl font-bold text-center xl:max-w-3xl mx-auto text-[#082032]">
            Our Achievements
          </h2>
          <div className="flex justify-center mt-5">
            {[1, 2, 3, 4, 5].map((item, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <CiStar className="text-amber-300 text-4xl" />
                </motion.div>
              );
            })}
          </div>

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
          className="p-6"
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