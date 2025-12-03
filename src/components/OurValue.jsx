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
        "We embrace creativity and continuously seek better solutions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description:
        "We value teamwork and open communication.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaRocket,
      title: "Excellence",
      description:
        "We deliver high-quality work that exceeds expectations",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description:
        "We act with honesty and transparency in everything we do.",
      color: "from-green-500 to-emerald-500",
    },
  ];
  //
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold">Our Core Values</h2>
        <Paragraph className='max-w-xl'>
          Principles that guide our actions and decisions every day. Principles
          that guide our actions and decisions every day. Principles that guide
          our actions and decisions every day.
        </Paragraph>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
