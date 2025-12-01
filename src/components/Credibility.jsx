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
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold">Why Trust Us</h2>
          <Paragraph className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ea, perferendis iure, vel incidunt, deleniti soluta expedita impedit
            ex quo quaerat non est harum laudantium pariatur molestiae iusto?
            Dicta, fugiat.
          </Paragraph>
        </div>
        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={i}
                className="group hover:bg-[#F5F7F8] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div
                  className={`bg-gradient-to-br ${cred.color} w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cred.title}
                  </h3>
                  <Paragraph className="text-sm text-gray-600 leading-relaxed">
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
