import React from "react";
import { Link } from "react-router";
import Paragraph from "./Paragraph";

//
export default function Services() {
  // services innitial data
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Complete product design including user research, wireframes, prototypes, and interactions.",
    },
    {
      title: "Web Development",
      description:
        "Creative mobile UI layouts and development for Android and iOS apps with clean and modern design principles.",
    },
    {
      title: "Website Design",
      description:
        "Responsive website UI design with modern layouts, typography, and smooth user flows.",
    },
    {
      title: "SEO",
      description:
        "Professional SaaS dashboard and admin panel UI with beautiful data visualization.",
    },
    {
      title: "Social Media Marketing",
      description:
        "End-to-end digital marketing: strategy, ads, SEO, social growth and analytics.",
    },
    {
      title: "App Development",
      description:
        "Responsive website development with modern tech, performance-first and SEO friendly.",
    },
    {
      title: "Business Consultation",
      description:
        "Responsive website development with modern tech, performance-first and SEO friendly.",
    },
    {
      title: "Custom Software Development",
      description:
        "Responsive website development with modern tech, performance-first and SEO friendly.",
    },
  ];
  // We'll render a 4 x 2 grid (4 columns) to match your reference image.
  const cols = 4;

  return (
    <section className="py-20">
      {/* outer container with bold blue border like your sketch */}
      <div className="mx-auto max-w-7xl">
        <h2 className="font-bold text-5xl mb-4">Meet our Services</h2>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          nostrum et dolor neque! Placeat, rem! Eius architecto dolorem
          laudantium similique!
        </Paragraph>
        {/* grid with no gap so borders meet like the image */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4`}>
          {services.map((item, idx) => {
            // compute whether to draw left / top borders for internal separators
            const col = idx % cols; // 0..3
            const row = Math.floor(idx / cols); // 0..1

            const leftBorder = col !== 0 ? "border-l-2" : "";
            const topBorder = row !== 0 ? "border-t-2 " : "";
            //
            return (
              <div
                key={idx}
                className={`${leftBorder} ${topBorder} p-6 flex flex-col justify-center group `}
              >
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
                <Link to={idx} className="mt-4 font-semibold">
                  Learn More
                </Link>
                <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-transparent mb-3 group-hover:from-blue-500 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/*
Usage:

1. Make sure you have Tailwind CSS configured in your project.
2. Copy this file into your components folder (e.g. src/components/ServicesGrid.jsx).
3. Import and use in any page: import ServicesGrid from "./components/ServicesGrid";
   <ServicesGrid />

Notes / tweaks you can make:
- Change the border thickness by replacing `border-4` with `border-2` or other values.
- If you want the rough/hand-drawn look from the sketch, consider replacing borders with an SVG grid behind the cells and slightly wavy paths.
- For accessibility, you can turn each cell into a button/link if these services lead to detail pages.
*/
