import React from "react";
import Paragraph from "./Paragraph";
//
export default function OurMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <Paragraph className="max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio quam fugiat velit eligendi eaque ad mollitia totam dolorem excepturi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              consectetur dignissimos quasi adipisci. Illo ea ducimus optio
              officiis dolor possimus sed ipsum error, eaque voluptate, dolorem
              ipsam, adipisci accusantium nemo.
            </Paragraph>
          </div>

          {/* Right Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
              <p className="text-4xl font-bold text-blue-600 mb-2">300+</p>
              <p className="text-gray-700 font-medium">Happy Clients</p>
              <p className="text-sm text-gray-600 mt-2">
                Trusted by businesses globally
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <p className="text-4xl font-bold text-purple-600 mb-2">400+</p>
              <p className="text-gray-700 font-medium">Projects Delivered</p>
              <p className="text-sm text-gray-600 mt-2">
                From startups to enterprises
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <p className="text-4xl font-bold text-green-600 mb-2">5+</p>
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
