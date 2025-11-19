import React from "react";
import Paragraph from "./Paragraph";

export default function OurTeam() {
  //

  const team = [
    {
      name: "Shakil Ahmed",
      role: "Founder & CEO",
      description: "5+ years in web development and business development",
      image: "👨‍💻",
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      description: "Expert in full-stack development and cloud architecture",
      image: "👩‍💼",
    },
    {
      name: "Rakibul Islam",
      role: "Marketing Director",
      description: "Award-winning marketing with passion for user experience",
      image: "👨",
    },
    {
      name: "Alex Thompson",
      role: "Project Manager",
      description: "Specializes in agile methodologies and team leadership",
      image: "👩‍💼",
    },
  ];
  //
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <Paragraph>
            Our diverse team of experts is dedicated to delivering innovative
            solutions and exceptional service.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-2"
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
                <h5 className="text-blue-600 font-medium text-sm mb-3">
                  {member.role}
                </h5>
                <Paragraph>{member.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
