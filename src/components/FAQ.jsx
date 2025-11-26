//
import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
//
const faqs = [
  {
    question: "What services does your agency offer?",
    answer:
      "We provide full-stack web development, UI/UX design, backend development, SEO optimization, and custom web solutions.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects take 1–4 weeks depending on the complexity, features, and revisions required.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes! We offer monthly support, security updates, performance optimization, and bug fixing.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We work with clients worldwide through Zoom, WhatsApp, and Google Meet.",
  },
];
//
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  //
  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-4xl font-bold mb-10">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio modi,
        magnam vitae quidem dolorum adipisci. Accusantium, deleniti officiis
        iure magnam nobis et unde assumenda odit sapiente temporibus quisquam,
        cumque dolorem.
      </p>
      {/*  */}
      <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  mt-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-xl transition-all">
                {openIndex === index ? (
                  <MdOutlineKeyboardArrowUp className="text-lg cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-lg cursor-pointer" />
                )}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
