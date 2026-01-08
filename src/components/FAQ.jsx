import { useState } from "react";
import { motion } from "motion/react";
import Paragraph from "./Paragraph";
import video from "../assets/video/agency.mp4";
import { MdContactSupport } from "react-icons/md";

//
const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "We provide web design, web development, UI/UX design, branding, and performance optimization services tailored for modern businesses.",
  },

  {
    question: "Do you develop mobile applications?",
    answer:
      "We develop scalable and secure mobile applications using modern technologies, ensuring smooth performance across Android and iOS platforms where required.",
  },
  {
    question: "How does your digital marketing service help grow my business?",
    answer:
      "Our digital marketing strategies combine SEO, social media marketing, content planning, and data-driven campaigns to increase brand awareness, engagement, and conversions.",
  },
  {
    question: "Can you build custom software for my business needs?",
    answer:
      "Yes. We create custom software solutions designed specifically to streamline your operations, improve efficiency, and scale with your business.",
  },
  {
    question: "Do you offer AI integration services?",
    answer:
      "We integrate AI-powered solutions such as chatbots, automation tools, data analysis, and intelligent workflows to enhance productivity and customer experience.",
  },
];
//
export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  //
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  //
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="xl:py-10 lg:py-10 md:py-10 sm:py-10 "
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:px-6 md:mx-auto sm:px-6 sm:mx-auto">
        <h2 className="tracking-wide xl:text-3xl font-bold text-center font-primary lg:text-3xl md:text-2xl sm:text-2xl sm:tracking-wide">
          How Can I <span className="text-[#0076DF]">Help</span> You ?
        </h2>
        <Paragraph className="xl:w-4xl xl:mx-auto font-medium text-center mt-2 font-primary tracking-wide lg:w-3xl lg:mx-auto sm:w-xl sm:mx-auto md:w-xl md:mx-auto">
          We provide end-to-end digital solutions that help businesses grow
          smarter and faster—combining high-performance web and app development,
          intuitive UI/UX design, data-driven digital marketing, SEO, social
          media marketing, custom software, business consultation, and AI
          integration to keep your brand competitive.
        </Paragraph>
        {/*  */}
        <div className="xl:grid xl:grid-cols-2 xl:gap-x-12 xl:items-center lg:items-center xl:mt-10 lg:mt-10 lg:grid lg:grid-cols-2 lg:gap-x-10 md:mt-10 md:grid md:grid-cols-2 md:gap-x-6 sm:grid  sm:mt-10">
          <div className="relative w-full h-full">
            <div className="bg-gray-100 absolute bottom-0 right-0 h-[50%] w-[50%] z-10 flex justify-center items-center">
              <div className="sm:px-2">
                <MdContactSupport className="xl:h-15 xl:w-15 mx-auto text-[#0076DF] lg:h-13 md:h-10 lg:w-13 md:w-10 sm:h-10 sm:w-10" />
                <h2 className="mt-3 font-primary tracking-wide font-bold md:text-center sm:text-center">
                  Some familiar questions
                </h2>
              </div>
            </div>
            <video
              src={video}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="space-y-2 sm:mt-5">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              //
              return (
                <div
                  key={index}
                  className="border border-[#F5F5F7] rounded-xl overflow-hidden transition-all duration-200 xl:p-3 lg:p-3 md:p-2 sm:p-2"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left transition-all duration-200"
                  >
                    <span className="font-medium xl:text-xl 2xl:text-xl lg:text-xl md:text-lg sm:text-lg sm:tracking-wide font-primary tracking-wide">
                      {faq.question}
                    </span>

                    <span
                      className={`text-3xl transform transition-transform duration-300 cursor-pointer ${
                        isOpen ? "rotate-45 text-[#0076DF]" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden font-medium font-primary tracking-wide">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
