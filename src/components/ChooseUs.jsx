import Paragraph from "./Paragraph";
import { IoIosTimer } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";
import { motion } from "motion/react";
//
//
export default function ChooseUs() {
  //
  const features = [
    {
      title: "On-Time Delivery, Every Time",
      desc: "We value deadlines. Our team consistently delivers high-quality work within agreed timelines, without compromising standards",
      icon: IoIosTimer,
    },
    {
      title: "Deliver Modern, High-Quality Digital Solutions",
      desc: "From websites to mobile apps and software systems, our work is built with clean architecture, smooth performance, and exceptional user experience.",
      icon: FaMobileAlt,
    },

    {
      title: "Transparent Communication & Seamless Collaboration",
      desc: "We keep our clients informed at every step. No confusing jargon, no hidden steps—just clear updates and smooth teamwork.",
      icon: FaHeadset,
    },
    {
      title: "Results That Speak for Themselves",
      desc: "From improved conversions to increased traffic and enhanced user engagement, our projects create measurable impact that clients love.",
      icon: RiEmotionHappyLine,
    },
  ];
  //

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="xl:py-10 overflow-hidden lg:py-10 md:py-10 sm:py-10"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:px-6 md:mx-auto sm:mx-auto sm:px-6">
        <h2 className="text-3xl font-bold text-center max-w-3xl mx-auto font-primary xl:tracking-wide lg:text-3xl lg:tracking-wide md:text-2xl md:tracking-wide sm:text-2xl sm:tracking-wide">
          All The <span className="text-[#0076DF]">Benefits</span> You Gain By
          Working With Us
        </h2>
        <Paragraph className="xl:w-4xl xl:mx-auto font-medium text-center mt-2 tracking-wide font-primary lg:w-3xl lg:mx-auto lg:text-center lg:mt-2 lg:tracking-wide md:tracking-wide md:mt-2  md:w-2xl md:mx-auto sm:mx-auto sm:w-xl sm:mt-2 sm:tracking-wide">
          We build results-driven digital solutions—from web and app development
          to UI/UX, SEO, and digital marketing—powered by custom software, AI
          integration, and strategic business consultation to help businesses
          stay ahead.
        </Paragraph>
        <div className="xl:grid xl:grid-cols-4 xl:mt-10 lg:grid lg:grid-cols-4 lg:mt-8 md:mt-8 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:mt-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            //
            return (
              <motion.div
                key={i}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="xl:p-4 lg:p-4 md:p-6 sm:p-6"
              >
                <Icon className="xl:h-13 xl:w-13 xl:mx-auto text-[#0076DF] lg:w-12 lg:h-12 lg:mx-auto md:mx-auto md:h-10 md:w-10 sm:h-10 sm:w-10 sm:mx-auto" />
                <Paragraph className="xl:text-2xl mt-5 text-center font-medium font-primary tracking-wide lg:text-xl lg:mt-4 lg:tracking-wide md:text-lg md:mt-4 md:tracking-wide sm:text-lg sm:mt-4 sm:tracking-wide">
                  {item.title}
                </Paragraph>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
