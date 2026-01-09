import { motion } from "motion/react";
import Paragraph from "./Paragraph";
import { TextFlip } from "./TextFlip";
// 
// import background from "../assets/backgroundImages/background.jpg";

//
export default function Banner() {
  //

  //
  return (
    <motion.section
      id="home"
      className="relative overflow-hidden 2xl:pt-50 2xl:pb-20 xl:pt-45 xl:pb-16 lg:pt-40 lg:pb-14 md:pt-35 md:pb-12 sm:pt-30 sm:pb-10 "
    >
      <div className="relative xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:mx-auto md:px-6 sm:px-6 sm:mx-auto">
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
        <Paragraph className="xl:tracking-wide font-primary font-medium xl:mt-7 xl:w-xl lg:w-lg lg:mt-5 md:mt-5 md:tracking-wide md:font-medium md:w-2xl sm:mt-4 sm:tracking-wide sm:font-medium sm:w-lg">
          In today’s fast-moving digital world, Every business needs a strong
          online presence to thrive in the digital world. With{" "}
          <span className="text-[#0076DF]">“We Build Creative Digital Solutions,”</span> we deliver
          innovative, user-friendly Web Development, Digital Marketing, and
          UI/UX Design that help businesses attract customers, strengthen their
          brand, and grow online
        </Paragraph>
      </div>
    </motion.section>
  );
}
