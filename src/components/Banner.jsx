import { motion } from "motion/react";
import Paragraph from "./Paragraph";
import { TextFlip } from "./TextFlip";

//
export default function Banner() {
  //

  //
  return (
    <motion.section
      id="home"
      className="relative overflow-hidden 2xl:pt-50 2xl:pb-15 xl:pt-45 xl:pb-15 lg:pt-40 lg:pb-14 md:pt-40 md:pb-12 sm:pt-40 sm:pb-10 pt-20 pb-5"
    >
      <div className="relative xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:mx-auto md:px-8 sm:px-8 px-4">
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
        <Paragraph className="font-primary mt-4 2xl:tracking-wide xl:tracking-wide lg:tracking-wide md:tracking-wide sm:tracking-wide 2xl:w-xl xl:w-xl lg:w-lg md:w-md sm:w-sm w-full text-base">
          In today’s fast-moving digital world, Every business needs a strong
          online presence to thrive in the digital world. With{" "}
          <span className="text-[#0076DF]">“ We Build Creative Digital Solutions ”</span> we deliver
          innovative, user-friendly Web Development, Digital Marketing, and
          UI/UX Design that help businesses attract customers, strengthen their
          brand, and grow online
        </Paragraph>
      </div>
    </motion.section>
  );
}
