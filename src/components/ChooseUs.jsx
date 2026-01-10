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
      className="xl:py-10 overflow-hidden lg:py-10 md:py-10 sm:py-10 py-5"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:px-8 md:mx-auto sm:mx-auto sm:px-8 px-4">
        <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl font-semibold font-primary text-center">
          All The <span className="text-[#0076DF]">Benefits</span> You Gain By
          Working With Us
        </h2>
        <Paragraph className="font-primary text-center mx-auto 2xl:w-3xl xl:w-3xl lg:w-2xl md:w-xl sm:w-xl w-full mt-2">
          We build results-driven digital solutions—from web and app development
          to UI/UX, SEO, and digital marketing—powered by custom software, AI
          integration, and strategic business consultation to help businesses
          stay ahead.
        </Paragraph>
        <div className="2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 md:gap-x-10 sm:mt-5 sm:grid sm:grid-cols-2 sm:gap-x-10 mt-5">
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
                className="xl:p-4 lg:p-4 md:p-6 sm:p-6 mb-4"
              >
                <Icon className="2xl:h-13 2xl:w-13 xl:h-13 xl:w-13 lg:w-12 lg:h-12 md:h-10 md:w-10 sm:h-10 sm:w-10 mx-auto h-7 w-7" />
                <Paragraph className="font-primary text-center mt-2 font-medium 2xl:font-semibold xl:font-semibold lg:font-semibold md:font-semibold sm:font-medium tracking-wide text-[#0076DF]">
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
