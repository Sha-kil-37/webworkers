import React from "react";
import { FaAward, FaTrophy, FaCheckCircle, FaStar } from "react-icons/fa";

export default function Credibility() {
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

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Projects Completed" },
    { value: "10+", label: "Years Experience" },
    { value: "99.8%", label: "Uptime Guarantee" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Trust
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Us
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our proven track record, certifications, and client testimonials
            demonstrate our commitment to excellence and reliability.
          </p>
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
            {stats.map((stat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="text-blue-100 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="mt-16 bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Trusted by industry leaders
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-blue-600">SOC</span>
              </div>
              <p className="text-sm text-gray-600">SOC 2 Compliant</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-green-600">ISO</span>
              </div>
              <p className="text-sm text-gray-600">ISO 27001</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-orange-600">GDPR</span>
              </div>
              <p className="text-sm text-gray-600">GDPR Ready</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-red-600">SSL</span>
              </div>
              <p className="text-sm text-gray-600">256-bit SSL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
