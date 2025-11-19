import React from "react";
import Paragraph from "./Paragraph";
import { FaLightbulb, FaUsers, FaRocket, FaShieldAlt } from "react-icons/fa";
// 
export default function OurValue() {
    // 
    const values = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description:
        "We believe in strong partnerships and open communication with our clients.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaRocket,
      title: "Excellence",
      description:
        "We're committed to delivering exceptional quality in every project we undertake.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description:
        "We operate with transparency and uphold the highest standards of professionalism.",
      color: "from-green-500 to-emerald-500",
    },
  ];
    // 
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Core {""}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <Paragraph>
            Principles that guide our actions and decisions every day.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="group h-full rounded-xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {value.title}
                </h3>

                <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-transparent mb-3 group-hover:from-blue-500 transition-colors duration-300"></div>
                <Paragraph>{value.description}</Paragraph>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
