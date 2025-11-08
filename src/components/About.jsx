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
          We are a full-service digital agency focused on helping businesses grow in the online world. From modern websites to complete branding and marketing strategies, we provide digital solutions that turn ideas into measurable results. Whether you’re a startup or an established business, we help you build a strong digital presence that attracts customers and drives revenue.
        </p>
        <Team />
      </div>
    </section>
  );
}
