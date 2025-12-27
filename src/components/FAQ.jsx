import { useState } from "react";
import { motion } from "framer-motion";

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

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  //
  return (
    <motion.section className="py-10">
      <div className="w-4xl mx-auto">
        <h2 className="tracking-wide text-6xl font-bold text-[#082032] text-center">
          How Can I Help You ?
        </h2>
        {/*  */}
        <div className="space-y-4 mt-15">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            //
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-500 p-4"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left transition-all duration-500"
                >
                  <span className="text-[#082032] font-medium text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`text-[#082032] text-2xl transform transition-transform duration-300 ${
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
    </motion.section>
  );
}
