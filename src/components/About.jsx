import React from "react";
import { FaLightbulb, FaUsers, FaRocket, FaShieldAlt } from "react-icons/fa";
import BlurInText from "./BlurInText";
import Paragraph from "./Paragraph";
import OurTeam from "./OurTeam";
import ChooseUs from "./ChooseUs";
// About Page for WebWorkers
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
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <BlurInText>
            <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              About WebWorkers
            </span>
          </BlurInText>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            in ipsum perferendis quas enim quae esse asperiores tempora sequi
            voluptates.
          </Paragraph>
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

              <Paragraph>
                To empower businesses worldwide by providing innovative,
                reliable, and scalable web solutions that drive growth and
                success.
              </Paragraph>
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

      <OurTeam />

      <ChooseUs />
    </>
  );
}
