import React from "react";
import Paragraph from "./Paragraph";
// "Why Choose Us" Section Component
export default function ChooseUs() {
  //
  const reasons = [
    {
      title: "Expertise You Can Trust",
      description:
        "Our team of seasoned professionals brings years of experience to every project, ensuring top-notch quality and results.",
    },
    {
      title: "Innovative Solutions",
      description:
        "We leverage the latest technologies and creative strategies to deliver cutting-edge web solutions tailored to your needs.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your satisfaction is our priority. We work closely with you to understand your goals and exceed your expectations.",
    },
  ];

  //

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <Paragraph>
            We combine expertise, innovation, and a client-centric approach to
            deliver exceptional web solutions that drive success.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                {reason.title}
              </h3>
              <Paragraph>{reason.description}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
