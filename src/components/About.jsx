import React from "react";
import Team from "./Team";
//
export default function About() {
  //
 
  // 
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center">
          About Us
        </h2>
        <p className="mt-5 max-w-[700px] mx-auto text-center text-lg font-normal">
          WebWorkers Digital Agency is your trusted partner for digital growth.
          We are a team of creative professionals delivering innovative web
          development, user-focused design, and result-driven marketing
          solutions.
        </p>
        <Team />
      </div>
    </section>
  );
}
