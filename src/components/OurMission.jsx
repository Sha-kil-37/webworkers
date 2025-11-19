import React from "react";
import Paragraph from "./Paragraph";
// 
export default function OurMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>

            <Paragraph>
              To empower businesses worldwide by providing innovative, reliable,
              and scalable web solutions that drive growth and success.
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
  );
}
