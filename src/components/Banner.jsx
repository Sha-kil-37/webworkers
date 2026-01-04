import { motion } from "motion/react";
import Paragraph from "./Paragraph";
import { TextFlip } from "./TextFlip";

// import background from "../assets/backgroundImages/background.jpg";

//
export default function Banner() {
  //

  //
  return (
    <motion.section
      id="home"
      className="xl:py-45 bg-[#F5F5F7] dark:bg-[#232729]"
    >
      <div className="relative xl:w-6xl mx-auto ">
        <TextFlip
          text="We Build Creative Digital Solutions"
          words={[
            "Artificial Intelligence Integration",
            "Custom Software Development",
            "Business Consultation",
            "App Development",
            "UI/UX Design",
            "Social Media Marketing",
            "Search Engine Optimization (SEO)",
            "Digital Marketing",
            "Web Development",
          ]}
          duration={2000}
        />
        <Paragraph className="xl:tracking-wide font-primary font-medium xl:mt-7 xl:w-xl">
          In today’s fast-moving digital world, Every business needs a strong
          online presence to thrive in the digital world. With “We Build
          Creative Digital Solutions,” we deliver innovative, user-friendly Web
          Development, Digital Marketing, and UI/UX Design that help businesses
          attract customers, strengthen their brand, and grow online
        </Paragraph>
      </div>
    </motion.section>
  );
}
