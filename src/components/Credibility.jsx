import React from "react";
import { FaAward, FaTrophy, FaCheckCircle, FaStar } from "react-icons/fa";
import Paragraph from "./Paragraph";
import CountUp from "./CountUp";
import TrustedBy from "./TrustedBy";

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
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "700+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "96.8%", label: "Uptime Guarantee" },
  ];
 
  //

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Trust
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <Paragraph>
            We are committed to delivering excellence and building lasting
            relationships with our clients through trust and transparency.
          </Paragraph>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={i}
                className="group h-full rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div
                  className={`bg-gradient-to-br ${cred.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cred.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cred.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            {stats.map((stat, i) => {
              const parseStat = (val) => {
                const str = String(val);
                let suffix = "";
                let numStr = str;

                if (str.endsWith("+")) {
                  suffix = "+";
                  numStr = str.slice(0, -1);
                } else if (str.endsWith("%")) {
                  suffix = "%";
                  numStr = str.slice(0, -1);
                }

                const to = parseFloat(numStr.replace(/,/g, "")) || 0;

                return { to, suffix };
              };

              const { to, suffix } = parseStat(stat.value);

              return (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 inline-flex items-baseline justify-center gap-1">
                    <CountUp to={to} className="leading-none" separator="," />
                    {suffix && (
                      <span className="font-bold text-3xl">{suffix}</span>
                    )}
                  </div>
                  <p className="text-blue-100 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <TrustedBy/>
      </div>
    </section>
  );
}
