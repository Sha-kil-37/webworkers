import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Paragraph from "./Paragraph";
//
const faqs = [
  {
    question: "What services does your agency offer?",
    answer:
      "We provide a full range of digital services, including website design and development, UI/UX design, app development, branding, SEO, digital marketing, custom software development, and ongoing website maintenance.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on project size and features. A basic website typically takes 1–2 weeks, while larger or custom websites take 3–6 weeks. We provide a clear timeline after discussing your requirements.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer monthly and yearly maintenance plans that include updates, security checks, backups, performance optimization, and technical support to keep your site running smoothly.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We collaborate with clients worldwide using online communication tools, ensuring smooth project management, clear communication, and timely delivery.",
  },
];
//
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  //
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  //
  return (
    <section className="max-w-6xl mx-auto py-10">
      <h2 className="text-4xl font-bold font-mono">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h2>

      <div className="block md:block lg:flex xl:flex justify-between mt-5 gap-x-8">
        <div>
          <Paragraph className="max-w-xl font-mono">
            Frequently Asked Questions (FAQ) provide quick answers to common
            queries customers may have about a service, product, or business.
            They help clarify important information, reduce confusion, and
            improve user experience by offering clear, concise explanations.
            FAQs save time for both clients and businesses, ensuring smooth
            communication and faster decision-making.
          </Paragraph>
        </div>
        <div className="max-w-xl">
          <Paragraph className="font-mono">
            Here are some of the most common questions we receive from our
            clients. If you have any other questions, feel free to reach out to
            us directly!
          </Paragraph>
          <hr className="mt-2" />    
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mt-3 cursor-pointer"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-bold font-mono">{faq.question}</h3>
                <span className="text-xl transition-all">
                  {openIndex === index ? (
                    <MdOutlineKeyboardArrowUp className="text-3xl cursor-pointer" />
                  ) : (
                    <MdKeyboardArrowDown className="text-3xl cursor-pointer" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3 bg-gray-200 p-4" : "max-h-0"
                }`}
              >
                <p className="font-mono">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
