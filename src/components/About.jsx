import React, { Fragment } from "react";

import BlurInText from "./BlurInText";
import Paragraph from "./Paragraph";
import OurTeam from "./OurTeam";
import ChooseUs from "./ChooseUs";
import OurMission from "./OurMission";
import OurValue from "./OurValue";
// About Page for WebWorkers
export default function About() {
  //
  return (
    <Fragment>
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
      <OurMission />
      <OurValue />
      <OurTeam />
      <ChooseUs />
    </Fragment>
  );
}
