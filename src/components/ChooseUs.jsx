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
      className="xl:py-10 overflow-hidden lg:py-8"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto lg:px-8">
        <h2 className="text-3xl font-bold text-center max-w-3xl mx-auto font-primary xl:tracking-wide lg:text-3xl lg:tracking-wide">
          All The <span className="text-[#0076DF]">Benefits</span> You Gain By
          Working With Us
        </h2>
        <Paragraph className="xl:w-4xl xl:mx-auto font-medium text-center mt-2 tracking-wide font-primary lg:w-3xl lg:mx-auto lg:text-center lg:mt-2 lg:tracking-wide">
          We don’t just build digital products—we build solutions that work.
          From web and app development to UI/UX design, SEO, digital marketing,
          and social media growth, our approach is always data-driven and
          results-focused. By combining custom software development, artificial
          intelligence integration, and strategic business consultation, we help
          businesses innovate faster and stay ahead of the competition.
        </Paragraph>
        <div className="xl:grid xl:grid-cols-4 mt-10 lg:grid lg:grid-cols-4 lg:mt-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="xl:p-4 lg:p-4"
              >
                <Icon className="xl:h-13 xl:w-13 xl:mx-auto text-[#0076DF] lg:w-12 lg:h-12 lg:mx-auto" />
                <Paragraph className="text-2xl mt-5 text-center font-medium font-primary tracking-wide lg:text-xl lg:mt-4 lg:tracking-wide">
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
