import React from "react";
import { FaAward, FaTrophy, FaCheckCircle, FaStar } from "react-icons/fa";
import Paragraph from "./Paragraph";

export default function Credibility() {
  //
  const credentials = [
    {
      icon: FaAward,
      title: "Industry Certified",
      description: "ISO 9001 certified quality management and best practices",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaTrophy,
      title: "Award-Winning",
      description: "Multiple awards for design excellence and innovation",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaCheckCircle,
      title: "100% Verified",
      description: "All team members verified and background checked",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaStar,
      title: "Top Rated",
      description: "Consistently 5-star rated by clients and partners",
      color: "from-purple-500 to-pink-500",
    },
  ];
  //

  //

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold">
            Why Trust Us
          </h2>
          <Paragraph className="max-w-xl">
            We deliver reliable, high-quality digital solutions through expert
            Web Development, Social Media Marketing, UI/UX Design, App
            Development, Digital Marketing, SEO, Business Consultation, and
            Custom Software Development. Our team focuses on innovation,
            transparency, and measurable results. With a client-first mindset,
            we ensure every project is built to grow your brand, boost
            performance, and achieve long-term success.
          </Paragraph>
        </div>
        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={i}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div
                  className={`bg-gradient-to-br ${cred.color} w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="" size={28} />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold  mb-2">
                    {cred.title}
                  </h3>
                  <Paragraph className="text-sm leading-relaxed">
                    {cred.description}
                  </Paragraph>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
