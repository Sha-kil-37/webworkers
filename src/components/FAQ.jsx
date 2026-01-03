import { useState } from "react";
import { motion } from "motion/react";
import Paragraph from "./Paragraph";
import video from "../assets/video/agency.mp4";
//
const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "We provide web design, web development, UI/UX design, branding, and performance optimization services tailored for modern businesses.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines vary depending on scope, but most websites are completed within 2–4 weeks.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes! We offer ongoing support, maintenance, and performance improvements after project delivery.",
  },
  {
    question: "Is my website mobile-friendly?",
    answer:
      "Absolutely. Every website we build is fully responsive and optimized for all devices.",
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
      className="py-10"
      
    >
      <div className="xl:w-6xl xl:mx-auto">
        <h2 className="tracking-wide xl:text-6xl font-bold text-center">
          How Can I <span className="text-[#81E7AF]">Help</span> You ?
        </h2>
        <Paragraph className="xl:w-4xl xl:mx-auto font-medium text-center mt-5">
          We offer end-to-end digital solutions designed to help businesses grow
          smarter and faster. From high-performance Web Development and
          intuitive UI/UX Design to data-driven Digital Marketing, SEO, and
          Social Media Marketing, our services are tailored to your goals. We
          also specialize in App Development, Custom Software Development,
          Business Consultation, and seamless Artificial Intelligence
          Integration to ensure your brand stays competitive in a rapidly
          evolving digital world.
        </Paragraph>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center xl:mt-10">
          <div className="relative bg-rose-500 w-full h-full">
            <div className="bg-gray-100 absolute bottom-0 right-0 h-[50%] w-[50%] z-10"></div>
            <video
              src={video}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              //
              return (
                <div
                  key={index}
                  className="border border-[#F5F5F7] rounded-xl overflow-hidden transition-all duration-500 p-4"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left transition-all duration-500"
                  >
                    <span className="font-medium text-xl">
                      {faq.question}
                    </span>

                    <span
                      className={`text-2xl transform transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-red-500" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="mt-3 overflow-hidden text-[#082032] font-medium">
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
