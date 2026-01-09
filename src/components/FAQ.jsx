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
        <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-semibold font-primary text-center">
          How Can I <span className="text-[#0076DF]">Help</span> You ?
        </h2>
        <Paragraph className="font-primary tracking-wide text-center mx-auto 2xl:w-3xl xl:w-3xl lg:w-2xl md:w-xl sm:w-xl w-full">
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
                <h2 className="font-primary tracking-wide font-medium">
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
          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              //
              return (
                <div
                  key={index}
                  className="border border-[#F5F5F7] rounded-xl overflow-hidden transition-all duration-200 p-2"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left transition-all duration-200"
                  >
                    <span className="font-medium font-primary tracking-wide">
                      {faq.question}
                    </span>

                    <span
                      className={`text-2xl transform transition-transform duration-300 cursor-pointer ${
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
                    <div className="overflow-hidden font-primary tracking-wide">
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
