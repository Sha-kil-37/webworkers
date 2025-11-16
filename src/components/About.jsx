import React from "react";
import { FaLightbulb, FaUsers, FaRocket, FaShieldAlt } from "react-icons/fa";

export default function About() {
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

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "10+ years in digital strategy and business development",
      image: "👩‍💼",
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      description: "Expert in full-stack development and cloud architecture",
      image: "👨‍💻",
    },
    {
      name: "Emma Rodriguez",
      role: "Design Director",
      description: "Award-winning designer with passion for user experience",
      image: "👩‍🎨",
    },
    {
      name: "Alex Thompson",
      role: "Project Manager",
      description: "Specializes in agile methodologies and team leadership",
      image: "👨‍💼",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent mb-6">
            About WebWorkers
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            We're a team of passionate developers and designers creating
            innovative digital solutions for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We empower businesses to thrive in the digital age by creating
                beautiful, functional, and scalable web solutions. Our mission
                is to transform ideas into reality through innovative technology
                and strategic thinking.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every project we undertake is an opportunity to make a
                meaningful impact. We combine technical expertise with creative
                thinking to deliver solutions that exceed expectations.
              </p>
            </div>

            {/* Right Stats */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
                <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
                <p className="text-gray-700 font-medium">Happy Clients</p>
                <p className="text-sm text-gray-600 mt-2">
                  Trusted by businesses globally
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
                <p className="text-4xl font-bold text-purple-600 mb-2">1000+</p>
                <p className="text-gray-700 font-medium">Projects Delivered</p>
                <p className="text-sm text-gray-600 mt-2">
                  From startups to enterprises
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
                <p className="text-4xl font-bold text-green-600 mb-2">10+</p>
                <p className="text-gray-700 font-medium">Years of Excellence</p>
                <p className="text-sm text-gray-600 mt-2">
                  Continuous innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape our company
              culture.
            </p>
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

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Talented professionals dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Avatar */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-12 text-center">
                  <div className="text-7xl">{member.image}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Expert Team
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of industry veterans with years of experience
                across various technologies and domains.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain rigorous quality standards through testing, code
                reviews, and best practices in every project.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Timely Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We respect deadlines and deliver projects on time without
                compromising on quality or functionality.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated support team is always available to assist you
                with any questions or concerns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Competitive Pricing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We offer flexible pricing models tailored to your budget without
                sacrificing quality.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Long-term Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build lasting relationships with our clients, becoming a
                trusted partner in their growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
